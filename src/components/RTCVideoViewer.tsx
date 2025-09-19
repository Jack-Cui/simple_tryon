import React, { useEffect, useState, useRef } from 'react';
import { rtcVideoService, RTCVideoConfig, RemoteStream } from '../services/rtcVideoService';

interface RTCVideoViewerProps {
  config: RTCVideoConfig;
  onError?: (error: any) => void;
  onUserJoin?: (userId: string) => void;
  onUserLeave?: (userId: string) => void;
  onStreamUpdate?: (streams: RemoteStream[]) => void;
}

const RTCVideoViewer: React.FC<RTCVideoViewerProps> = ({
  config,
  onError,
  onUserJoin,
  onUserLeave,
  onStreamUpdate
}) => {
  const [isConnected, setIsConnected] = useState(false);
  const [remoteStreams, setRemoteStreams] = useState<RemoteStream[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [heartbeatDelay, setHeartbeatDelay] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 初始化RTC服务
  useEffect(() => {
    const initializeRTC = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // 设置事件处理器
        rtcVideoService.setEventHandlers({
          onUserJoin: (userId: string) => {
            console.log('用户加入:', userId);
            onUserJoin?.(userId);
          },
          onUserLeave: (userId: string) => {
            console.log('用户离开:', userId);
            onUserLeave?.(userId);
          },
          onUserPublishStream: (userId: string, hasVideo: boolean, hasAudio: boolean) => {
            console.log('用户发布流:', userId, hasVideo, hasAudio);
            updateRemoteStreams();
          },
          onUserUnpublishStream: (userId: string) => {
            console.log('用户取消发布流:', userId);
            updateRemoteStreams();
          },
          onError: (error: any) => {
            console.error('RTC错误:', error);
            setError(`RTC错误: ${error.message || error}`);
            onError?.(error);
          },
          onHeartbeat: (delay: number) => {
            setHeartbeatDelay(delay);
          }
        });

        // 初始化RTC引擎
        await rtcVideoService.initialize(config);
        
        // 加入房间
        await rtcVideoService.joinRoom(config.token);
        
        setIsConnected(true);
        updateRemoteStreams();
        
        console.log('✅ RTC视频服务初始化完成');
      } catch (err: any) {
        const errorMessage = err.message || '初始化失败';
        console.error('❌ RTC初始化失败:', errorMessage);
        setError(errorMessage);
        onError?.(err);
      } finally {
        setIsLoading(false);
      }
    };

    initializeRTC();

    // 清理函数
    return () => {
      rtcVideoService.leaveRoom().catch(console.error);
    };
  }, [config.appId, config.roomId, config.userId, config.token]);

  // 更新远程流列表
  const updateRemoteStreams = () => {
    const streams = rtcVideoService.getRemoteStreams();
    setRemoteStreams(streams);
    onStreamUpdate?.(streams);
    
    // 为每个新的远程流设置视频播放器
    streams.forEach(stream => {
      if (stream.hasVideo) {
        setupRemoteVideo(stream.userId, stream.domId);
      }
    });
  };

  // 设置远程视频播放器
  const setupRemoteVideo = async (userId: string, domId: string) => {
    try {
      await rtcVideoService.setRemoteVideoPlayer(userId, domId);
    } catch (err) {
      console.error('设置远程视频播放器失败:', err);
    }
  };

  // 使用useEffect监听远程流变化，自动设置视频播放器
  useEffect(() => {
    remoteStreams.forEach(stream => {
      if (stream.hasVideo) {
        // 延迟一点时间确保DOM元素已经渲染
        setTimeout(() => {
          setupRemoteVideo(stream.userId, stream.domId);
        }, 100);
      }
    });
  }, [remoteStreams]);

  // 渲染远程视频流
  const renderRemoteStreams = () => {
    if (remoteStreams.length === 0) {
      return (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '200px',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          color: '#666'
        }}>
          等待其他用户发布视频流...
        </div>
      );
    }

    return remoteStreams.map((stream) => (
      <div
        key={stream.userId}
        style={{
          width: '100%',
          height: '200px',
          backgroundColor: '#000',
          borderRadius: '8px',
          overflow: 'hidden',
          position: 'relative',
          marginBottom: '10px'
        }}
      >
        <div
          id={stream.domId}
          style={{
            width: '100%',
            height: '100%'
          }}
        />
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          color: '#fff',
          fontSize: '12px',
          backgroundColor: 'rgba(0,0,0,0.5)',
          padding: '4px 8px',
          borderRadius: '4px'
        }}>
          {stream.userId}
          {stream.hasVideo && <span style={{ marginLeft: '8px' }}>📹</span>}
          {stream.hasAudio && <span style={{ marginLeft: '4px' }}>🎤</span>}
        </div>
      </div>
    ));
  };

  // 渲染加载状态
  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
        <div>正在连接RTC房间...</div>
      </div>
    );
  }

  // 渲染错误状态
  if (error) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px',
        backgroundColor: '#fff2f0',
        borderRadius: '8px',
        border: '1px solid #ffccc7',
        color: '#cf1322'
      }}>
        <div>连接失败: {error}</div>
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <div style={{
        marginBottom: '10px',
        padding: '8px',
        backgroundColor: isConnected ? '#f6ffed' : '#fff7e6',
        borderRadius: '4px',
        border: `1px solid ${isConnected ? '#b7eb8f' : '#ffd591'}`,
        color: isConnected ? '#52c41a' : '#fa8c16'
      }}>
        {isConnected ? '✅ 已连接到RTC房间' : '⏳ 正在连接...'}
        {isConnected && heartbeatDelay > 0 && (
          <span style={{ marginLeft: '10px', fontSize: '12px' }}>
            延迟: {heartbeatDelay}ms
          </span>
        )}
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <strong>远程视频流 ({remoteStreams.length})</strong>
      </div>
      
      {renderRemoteStreams()}
    </div>
  );
};

export default RTCVideoViewer; 