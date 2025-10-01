import VERTC, { MediaType, StreamIndex } from '@volcengine/rtc';
import { rtcMessageHandler } from './rtcMessageHandler';
import * as proto from '../proto/xproto';
import { getLoginCache } from '../utils/loginCache';

const isProtoLog = false; //add by chao 2025.09.30 日志开关
const isRtcLog = false; //add by chao 2025.09.30 日志开关
export interface RTCVideoConfig {
  appId: string;
  appKey: string;
  roomId: string;
  userId: string;
  token?: string;
}

export interface EventHandlers {
  onUserJoin?: (userId: string) => void;
  onUserLeave?: (userId: string) => void;
  onUserPublishStream?: (userId: string, hasVideo: boolean, hasAudio: boolean) => void;
  onUserUnpublishStream?: (userId: string) => void;
  onError?: (error: any) => void;
  onHeartbeat?: (delay: number) => void;
}

export interface RemoteStream {
  userId: string;
  hasVideo: boolean;
  hasAudio: boolean;
  domId: string;
}

export class RTCVideoService {
  private engine: any = null;
  private config: RTCVideoConfig | null = null;
  private isConnected: boolean = false;
  private remoteStreams: Map<string, RemoteStream> = new Map();
  private eventHandlers: EventHandlers = {};

  constructor() {
    // 初始化消息处理器
    rtcMessageHandler.initialize();
    
    // 注册心跳响应处理
    rtcMessageHandler.onMessage('heartbeat_ack', (data) => {
      const delay = rtcMessageHandler.getLastHeartbeatDelay();
      this.eventHandlers.onHeartbeat?.(delay);
    });
  }

  // 设置事件处理器
  setEventHandlers(handlers: EventHandlers): void {
    this.eventHandlers = { ...this.eventHandlers, ...handlers };
  }


  sendGetImagesInfo(videoId: string): void {
    if(isRtcLog) console.log('👕 发送获取图片信息消息:', videoId);
    rtcMessageHandler.sendGetImagesInfo(videoId);
  }

  // 初始化RTC引擎
  async initialize(config: RTCVideoConfig): Promise<void> {
    if(isRtcLog) console.log('🎥 初始化RTC视频服务...');
    if(isRtcLog) console.log('  - appId:', config.appId);
    if(isRtcLog) console.log('  - roomId:', config.roomId);
    if(isRtcLog) console.log('  - userId:', config.userId);
    
    // 如果引擎已经存在，先销毁
    if (this.engine) {
      if(isRtcLog) console.log('⚠️ 检测到已存在的RTC引擎，先销毁');
      this.destroy();
    }
    
    this.config = config;
    
    try {
      // 创建RTC引擎
      this.engine = VERTC.createEngine(config.appId);
      
      // 设置引擎到消息处理器
      rtcMessageHandler.setEngine(this.engine);
      
      // 绑定事件监听器
      this.bindEngineEvents();
      
      if(isRtcLog) console.log('✅ RTC引擎初始化成功');
      if(isRtcLog) console.log('🔍 RTC引擎状态:', {
        engine: !!this.engine,
        config: !!this.config,
        appId: this.config?.appId,
        roomId: this.config?.roomId,
        userId: this.config?.userId
      });
    } catch (error) {
      console.error('❌ RTC引擎初始化失败:', error);
      throw error;
    }
  }

  // 绑定引擎事件
  private bindEngineEvents(): void {
    if (!this.engine) return;
    
    if(isRtcLog) console.log('🔧 开始绑定RTC引擎事件...');

    // 用户加入房间
    this.engine.on(VERTC.events.onUserJoined, (event: any) => {
      const userId = event.userInfo?.userId;
      if(isRtcLog) console.log('👤 用户加入房间:', userId);
      this.eventHandlers.onUserJoin?.(userId);
    });
    const cachedLoginData = getLoginCache();
    let roomId = '';
    if (cachedLoginData) {
      if (cachedLoginData.roomId) {
        roomId = cachedLoginData.roomId;
      }
    }
    if (roomId == '') {
      console.log('❌ 房间ID为空，跳过试穿流程');
      return;
    } else {
      if(isRtcLog) console.log('✅ 房间ID:', roomId);
    }
    // 测试余额扣费功能
    const balanceRaw = {
      deducteList: [{
        deductionType: 2,
        billPrice: 0.3,
        // sourceId: 1939613403762253825,
        // sourceId: 1956266414970302466,
        sourceId: BigInt(roomId),
        reduceCount: 1,
        clotheId: 0
      }]
    };

    // 用户离开房间
    this.engine.on(VERTC.events.onUserLeave, (event: any) => {
      const userId = event.userInfo?.userId;
      if(isRtcLog) console.log('👤 用户离开房间:', userId);
      this.removeRemoteStream(userId);
      this.eventHandlers.onUserLeave?.(userId);
    });

    // 用户发布流
    this.engine.on(VERTC.events.onUserPublishStream, (event: any) => {
      const userId = event.userId;
      const mediaType = event.mediaType;
      const hasVideo = !!(mediaType & MediaType.VIDEO);
      const hasAudio = !!(mediaType & MediaType.AUDIO);
      
      if(isRtcLog) console.log('📹 用户发布流:', userId, '视频:', hasVideo, '音频:', hasAudio);
      
      // 过滤掉userid=0的流
      if (userId === '0') {
        if(isRtcLog) console.log('⚠️ 跳过userid=0的流:', userId);
        return;
      }
      
      if(isRtcLog) console.log('✅ 处理用户流:', userId);
      this.addRemoteStream(userId, hasVideo, hasAudio);
      this.eventHandlers.onUserPublishStream?.(userId, hasVideo, hasAudio);
    });

    // 用户取消发布流
    this.engine.on(VERTC.events.onUserUnpublishStream, (event: any) => {
      const userId = event.userId;
      if(isRtcLog) console.log('📹 用户取消发布流:', userId);
      
      this.removeRemoteStream(userId);
      this.eventHandlers.onUserUnpublishStream?.(userId);
    });

    // 用户消息接收
    this.engine.on(VERTC.events.onUserMessageReceived, (event: any) => {
      const { roomId, userId, message } = event;
      if(isRtcLog){
          if(isRtcLog) console.log('📨 收到用户消息:', { roomId, userId, message });
          if(isRtcLog) console.log('📨 消息详情:', {
            roomId: roomId,
            userId: userId,
            messageLength: message ? message.length : 0,
            messageType: typeof message,
            messageContent: message
          });
      }
      // 处理消息
      this.handleUserMessage(message);
    });

    // 房间消息接收
    this.engine.on(VERTC.events.onRoomMessageReceived, (event: any) => {
      const { roomId, userId, message } = event;
      if(isRtcLog) console.log('📨 收到房间消息:', { roomId, userId, message });
      if(isRtcLog) console.log('📨 房间消息详情:', {
        roomId: roomId,
        userId: userId,
        messageLength: message ? message.length : 0,
        messageType: typeof message,
        messageContent: message
      });
      
      // 处理房间消息
      this.handleUserMessage(message);
    });

    // 自动播放失败
    this.engine.on(VERTC.events.onAutoplayFailed, (event: any) => {
      console.warn('⚠️ 自动播放失败:', event.userId, event.kind);
    });

    // 播放器事件
    this.engine.on(VERTC.events.onPlayerEvent, (event: any) => {
      if(isRtcLog) console.log('🎬 播放器事件:', event);
      
      // 检查是否是视频开始播放的事件
      // 根据日志，事件有 eventName 属性，我们需要监听 'canplay' 或 'canplaythrough' 事件
      if (event.eventName === 'canplay' || event.eventName === 'canplaythrough') {
        if(isRtcLog) console.log('🎬 视频可以播放:', event.userId, '事件:', event.eventName);
        
        // 发送自定义事件到首页
        const customEvent = new CustomEvent('rtcPlayerEvent', {
          detail: {
            eventType: event.eventName,
            userId: event.userId
          }
        });
        window.dispatchEvent(customEvent);
        
        // 发送余额扣费事件，让外部处理
        const balanceEvent = new CustomEvent('rtcBalanceDeduction', {
          detail: {
            userId: event.userId,
            timestamp: Date.now()
          }
        });
        if(isRtcLog) console.log('💰 发送余额扣费事件:', event.userId);
        window.dispatchEvent(balanceEvent);
      } else {
        if(isRtcLog) console.log('🎬 其他播放器事件:', event.eventName, 'userId:', event.userId);
      }
    });

    // 错误处理
    this.engine.on(VERTC.events.onError, (event: any) => {
      console.error('❌ RTC错误:', event);
      this.eventHandlers.onError?.(event);
    });
    
    if(isRtcLog) console.log('✅ RTC引擎事件绑定完成');
  }

  // 加入房间
  async joinRoom(token?: string): Promise<void> {
    if (!this.engine || !this.config) {
      throw new Error('RTC引擎未初始化');
    }

    if(isRtcLog) console.log('🚪 加入RTC房间...');
    if(isRtcLog) console.log('  - roomId:', this.config.roomId);
    if(isRtcLog) console.log('  - userId:', this.config.userId);
    if(isRtcLog) console.log('  - token:', token || '无token');

    try {
      await this.engine.joinRoom(
        token || null,
        this.config.roomId,
        {
          userId: this.config.userId,
        },
        {
          // 只订阅，不发布本地流
          isAutoPublish: false,
          isAutoSubscribeAudio: true,
          isAutoSubscribeVideo: true,
        }
      );
      
      this.isConnected = true;
      
      // 开始心跳
      rtcMessageHandler.startHeartbeat();
      
      console.log('✅ 成功加入RTC房间');
      console.log('性能调优 b2.1：' + new Date().toLocaleString()+' '+ performance.now())
    } catch (error) {
      console.error('❌ 加入RTC房间失败:', error);
      throw error;
    }
  }

  // 添加远程流
  private addRemoteStream(userId: string, hasVideo: boolean, hasAudio: boolean): void {
    const domId = `remoteStream_${userId}`;
    
    this.remoteStreams.set(userId, {
      userId,
      hasVideo,
      hasAudio,
      domId
    });

    console.log('📹 添加远程流:', userId, 'DOM ID:', domId);
  }

  // 移除远程流
  private removeRemoteStream(userId: string): void {
    this.remoteStreams.delete(userId);
    console.log('📹 移除远程流:', userId);
  }

  // 设置远程视频播放器
  async setRemoteVideoPlayer(userId: string, domId: string): Promise<void> {
    if (!this.engine) {
      throw new Error('RTC引擎未初始化');
    }

    // 过滤掉userid=0的流
    if (userId === '0') {
      console.log(`⚠️ 跳过userid=0的视频播放器设置: ${userId}`);
      return;
    }

    console.log('🎬 设置远程视频播放器:', userId, 'DOM ID:', domId);

    try {
      // 确保DOM元素存在
      const domElement = document.getElementById(domId);
      if (!domElement) {
        throw new Error(`DOM元素不存在: ${domId}`);
      }
      console.log('✅ DOM元素存在:', domId);

      // 订阅用户的音视频流
      await this.engine.subscribeStream(userId, MediaType.AUDIO_AND_VIDEO);
      console.log('✅ 订阅流成功:', userId);
      
      // 设置远程视频播放器
      await this.engine.setRemoteVideoPlayer(StreamIndex.STREAM_INDEX_MAIN, {
        userId: userId,
        renderDom: domId,
      });

      console.log('✅ 远程视频播放器设置成功');
    } catch (error) {
      console.error('❌ 设置远程视频播放器失败:', error);
      throw error;
    }
  }

  // 获取所有远程流
  getRemoteStreams(): RemoteStream[] {
    return Array.from(this.remoteStreams.values());
  }

  // 获取远程流信息
  getRemoteStream(userId: string): RemoteStream | undefined {
    return this.remoteStreams.get(userId);
  }

  // 离开房间
  async leaveRoom(): Promise<void> {
    if (!this.engine) return;

    console.log('🚪 准备离开RTC房间...');

    try {
      // 停止心跳
      rtcMessageHandler.stopHeartbeat();
      
      await this.engine.leaveRoom();
      this.isConnected = false;
      this.remoteStreams.clear();
      console.log('✅ 成功离开RTC房间');
    } catch (error) {
      console.error('❌ 离开RTC房间失败:', error);
      throw error;
    }
  }

  // 销毁引擎
  destroy(): void {
    if (this.engine) {
      this.engine.destroy();
      this.engine = null;
    }
    this.isConnected = false;
    this.remoteStreams.clear();
    
    // 销毁消息处理器
    rtcMessageHandler.destroy();
    
    console.log('🗑️ RTC引擎已销毁');
  }

  // 获取连接状态
  getConnectionStatus(): boolean {
    return this.isConnected;
  }

  // 获取SDK版本
  getSDKVersion(): string {
    return VERTC.getSdkVersion();
  }

  // 获取心跳延迟
  getHeartbeatDelay(): number {
    return rtcMessageHandler.getLastHeartbeatDelay();
  }

  // 处理用户消息
  private handleUserMessage(message: string): void {
    if(isRtcLog) console.log('📨 处理用户消息:', message);
    
    // 检查是否是心跳响应
    if (message.includes('stay_room_ack')) {
      console.log('💓 收到心跳响应:', message);
      // 这里可以解析心跳延迟等信息
      return;
    }
    
    // 检查是否是proto消息
    if (message.includes('cmd=proto')) {
      if(isProtoLog){
        console.log('📦 收到proto消息:', message);
      }
      try {
        // 解析proto消息格式: cmd=proto&id={messageId}&hex={hexData}
        const parts = message.split('&');
        if (parts.length >= 3) {
          const idMatch = parts[1].match(/id=(\d+)/);
          const hexMatch = parts[2].match(/hex=([0-9a-fA-F]+)/);
          
          if (idMatch && hexMatch) {
            const messageId = parseInt(idMatch[1]);
            const hexData = hexMatch[1];
            
            if(isProtoLog){
              console.log('📦 解析proto消息:', {
                messageId: messageId,
                hexData: hexData,
                hexLength: hexData.length
              });
            }
            // 转换十六进制为字节数组
            const bytes = new Uint8Array(hexData.length / 2);
            for (let i = 0; i < hexData.length; i += 2) {
              bytes[i / 2] = parseInt(hexData.substr(i, 2), 16);
            }
            
            // 根据消息ID处理不同类型的消息
            if (messageId === proto.eServerPID.ChangeMapPush) {
              // 处理ChangeMapPush消息
              const pushMessage = proto.oChangeMapPush.decode(bytes);
              console.log('🗺️ 解析到ChangeMapPush消息:', {
                code: pushMessage.code,
                mapName: pushMessage.mapName,
                success: pushMessage.code === proto.eError.SUCCESS
              });
              
              // 发送自定义事件通知UI
              const customEvent = new CustomEvent('rtcMapChangeResult', {
                detail: {
                  success: pushMessage.code === proto.eError.SUCCESS,
                  code: pushMessage.code,
                  mapName: pushMessage.mapName,
                  message: message,
                  timestamp: Date.now()
                }
              });
              window.dispatchEvent(customEvent);
            } else {
              if(isProtoLog){
                console.log('📦 未知的proto消息ID:', messageId);
              }
            }
          }
        }
      } catch (error) {
        console.error('❌ 解析proto消息失败:', error);
      }
      return;
    }
    
    // 检查是否是地图切换响应 (简单格式)
    if (message.includes('change_map')) {
      console.log('🗺️ 收到地图切换响应:', message);
      
      // 发送简单事件
      const customEvent = new CustomEvent('rtcMapChangeResult', {
        detail: {
          message: message,
          timestamp: Date.now()
        }
      });
      window.dispatchEvent(customEvent);
      return;
    }
    
    // 检查是否是其他类型的响应
    if (message.includes('cmd=')) {
      console.log('📋 收到命令响应:', message);
      // 可以在这里添加更多命令处理逻辑
      return;
    }
    
    // 默认处理
    console.log('📨 未识别的消息类型:', message);
  }

  // 发送切换地图消息
  sendChangeMap(mapName: string): void {
    console.log('🗺️ 发送切换地图消息:', mapName);
    rtcMessageHandler.sendChangeMap(mapName);
  }

  // 发送热力图消息
  sendHeatMap(enable: boolean): void {
    if(isRtcLog){
      console.log('🔥 发送热力图消息:', enable);
    }
    rtcMessageHandler.sendHeatMap(enable);
  }

  // 发送更换服装消息
  sendChangeGarment(garment1Id: number, garment2Id: number, garment3Id: number, garment1Size: number, garment2Size: number, garment3Size: number): void {
    console.log('👕 发送更换服装消息:', { garment1Id, garment2Id, garment3Id, garment1Size, garment2Size, garment3Size });
    rtcMessageHandler.sendChangeGarment(garment1Id, garment2Id, garment3Id, garment1Size, garment2Size, garment3Size);
  }

  // 发送更换服装尺寸消息
  sendChangeGarmentSize(size: number): void {
    console.log('👕 发送更换服装尺寸消息:', size);
    rtcMessageHandler.sendChangeGarmentSize(size);
  }

  // 发送触摸屏幕消息
  sendTouchScreen(touchType: proto.eTouchType, pos: { x: number, y: number, z: number }, timestamp: number): void {
    console.log('👆 发送触摸屏幕消息:', { touchType, pos, timestamp });
    rtcMessageHandler.sendTouchScreen(touchType, pos, timestamp);
  }

  // 发送进入房间消息
  sendEnterRoom(): void {
    console.log('🚪 发送进入房间消息');
    rtcMessageHandler.sendEnterRoom();
  }

  // 发送离开房间消息
  sendLeaveRoom(): void {
    console.log('🚪 发送离开房间消息');
    rtcMessageHandler.sendLeaveRoom();
  }

  // 发送进入舞台消息
  sendEnterStage(stageIndex: number): void {
    console.log('🎭 发送进入舞台消息:', stageIndex);
    rtcMessageHandler.sendEnterStage(stageIndex);
  }

  // 发送离开舞台消息
  sendLeaveStage(stageIndex: number): void {
    console.log('🎭 发送离开舞台消息:', stageIndex);
    rtcMessageHandler.sendLeaveStage(stageIndex);
  }

  // 发送用户消息
  sendUserMessage(message: string): void {
    console.log('📤 发送用户消息:', message);
    rtcMessageHandler.sendUserMessage(message);
  }

  // 发送房间消息
  sendRoomMessage(message: string): void {
    console.log('📤 发送房间消息:', message);
    rtcMessageHandler.sendRoomMessage(message);
  }

  // 余额扣费方法已移至Home页面，通过事件系统处理
}

// 导出单例实例
export const rtcVideoService = new RTCVideoService(); 