import { useRevalidator } from 'react-router-dom';
import * as proto from '../proto/xproto';
import VERTC, { MediaType, StreamIndex } from '@volcengine/rtc';

// 从 proto 中获取 Long 类型
const Long = require('long');

// 导入RTC相关依赖

export interface WebSocketConfig {
  url: string;
  uid: string;
  accessToken: string;
  insToken: string;
  roomId: string;
  enterStageInfo: string;
  // 添加RTC配置
  rtcConfig?: RTCConfig;
}

// RTC配置接口
export interface RTCConfig {
  appId: string;
  appKey: string;
  roomId: string;
  userId: string;
  token?: string;
}

// 远程流信息
export interface RemoteStream {
  userId: string;
  hasVideo: boolean;
  hasAudio: boolean;
  domId: string;
}

export class WebSocketService {
  private websocket: WebSocket | null = null;
  private config: WebSocketConfig | null = null;
  private isConnected: boolean = false;
  private messageHandlers: Map<number, (data: any) => void> = new Map();
  private reconnectAttempts: number = 0;
  private maxReconnectAttempts: number = 3;
  private reconnectDelay: number = 1000;

  // 心跳相关属性
  private heartbeatTimer: NodeJS.Timeout | null = null;
  private heartbeatInterval: number = 10000; // 10秒发送一次心跳，更频繁
  private lastHeartbeatTime: number = 0;
  private heartbeatTimeoutTimer: NodeJS.Timeout | null = null; // 心跳超时检查
  private heartbeatTimeout: number = 15000; // 15秒心跳超时
  
  // 手动断开标志
  private isManualDisconnect: boolean = false;

  // RTC相关属性
  private rtcEngine: any = null;
  private rtcConfig: RTCConfig | null = null;
  private isRTCConnected: boolean = false;
  private remoteStreams: Map<string, RemoteStream> = new Map();
  private rtcEventHandlers: {
    onUserJoin?: (userId: string) => void;
    onUserLeave?: (userId: string) => void;
    onUserPublishStream?: (userId: string, hasVideo: boolean, hasAudio: boolean) => void;
    onUserUnpublishStream?: (userId: string) => void;
    onError?: (error: any) => void;
  } = {};

  constructor() {
    this.setupMessageHandlers();
  }

  // 设置RTC事件处理器
  setRTCEventHandlers(handlers: Partial<{
    onUserJoin?: (userId: string) => void;
    onUserLeave?: (userId: string) => void;
    onUserPublishStream?: (userId: string, hasVideo: boolean, hasAudio: boolean) => void;
    onUserUnpublishStream?: (userId: string) => void;
    onError?: (error: any) => void;
  }>): void {
    this.rtcEventHandlers = { ...this.rtcEventHandlers, ...handlers };
  }

  // 初始化RTC引擎
  async initializeRTC(config: RTCConfig): Promise<void> {
    try {
      console.log('🚀 初始化RTC引擎...', config);
      
      this.rtcConfig = config;
      this.rtcEngine = VERTC.createEngine(config.appId);
      
      // 绑定RTC事件
      this.bindRTCEvents();
      
      console.log('✅ RTC引擎初始化成功');
    } catch (error) {
      console.error('❌ RTC引擎初始化失败:', error);
      throw error;
    }
  }

  // 初始化RTC配置
  async initializeRTCConfig(rtcConfig: RTCConfig): Promise<void> {
    try {
      console.log('🔧 初始化RTC配置...', rtcConfig);
      
      // 初始化RTC引擎
      await this.initializeRTC(rtcConfig);
      
      console.log('✅ RTC配置初始化完成');
    } catch (error) {
      console.error('❌ RTC配置初始化失败:', error);
      throw error;
    }
  }

  // 绑定RTC事件
  private bindRTCEvents(): void {
    if (!this.rtcEngine) return;

    // 用户加入房间
    this.rtcEngine.on(VERTC.events.onUserJoined, (event: any) => {
      console.log('👤 用户加入RTC房间:', event.userInfo.userId);
      this.rtcEventHandlers.onUserJoin?.(event.userInfo.userId);
    });

    // 用户离开房间
    this.rtcEngine.on(VERTC.events.onUserLeave, (event: any) => {
      console.log('👤 用户离开RTC房间:', event.userInfo.userId);
      this.rtcEventHandlers.onUserLeave?.(event.userInfo.userId);
      
      // 移除远程流
      this.remoteStreams.delete(event.userInfo.userId);
    });

    // 用户发布流
    this.rtcEngine.on(VERTC.events.onUserPublishStream, (event: any) => {
      console.log('📹 用户发布流:', event.userId, event.mediaType);
      const hasVideo = (event.mediaType & MediaType.VIDEO) !== 0;
      const hasAudio = (event.mediaType & MediaType.AUDIO) !== 0;
      
      this.rtcEventHandlers.onUserPublishStream?.(event.userId, hasVideo, hasAudio);
      
      // 记录远程流信息
      this.remoteStreams.set(event.userId, {
        userId: event.userId,
        hasVideo,
        hasAudio,
        domId: `remoteStream_${event.userId}`
      });
    });

    // 用户取消发布流
    this.rtcEngine.on(VERTC.events.onUserUnpublishStream, (event: any) => {
      console.log('📹 用户取消发布流:', event.userId);
      this.rtcEventHandlers.onUserUnpublishStream?.(event.userId);
      
      // 移除远程流
      this.remoteStreams.delete(event.userId);
    });

    // 错误处理
    this.rtcEngine.on(VERTC.events.onError, (event: any) => {
      console.error('❌ RTC错误:', event);
      this.rtcEventHandlers.onError?.(event);
    });

    console.log('✅ RTC事件绑定完成');
  }

  // 加入RTC房间（只观看，不发布本地流）
  async joinRTCRoom(): Promise<void> {
    if (!this.rtcEngine || !this.rtcConfig) {
      throw new Error('RTC引擎或配置未初始化');
    }

    try {
      console.log('🚪 加入RTC房间...', {
        roomId: this.rtcConfig.roomId,
        //update by chao 2025.09.09
        // userId: this.rtcConfig.userId,
        userId: this.config?.uid,
        hasToken: !!this.rtcConfig.token
      });

      await this.rtcEngine.joinRoom(
        this.rtcConfig.token || null,
        this.rtcConfig.roomId,
        {
          //update by chao 2025.09.09
          // userId: this.rtcConfig.userId,
          userId: this.config?.uid,
        },
        {
          // 只订阅，不发布本地流
          isAutoPublish: false,
          isAutoSubscribeAudio: true,
          isAutoSubscribeVideo: true,
        }
      );

      this.isRTCConnected = true;
      console.log('✅ 成功加入RTC房间（仅观看模式）');
    } catch (error) {
      console.error('❌ 加入RTC房间失败:', error);
      throw error;
    }
  }

  // 设置远程视频播放器
  async setRemoteVideoPlayer(userId: string, domId: string): Promise<void> {
    if (!this.rtcEngine || !this.isRTCConnected) {
      console.warn('RTC引擎未连接，无法设置远程视频播放器');
      return;
    }

    try {
      console.log(`📹 设置远程视频播放器: ${userId} -> ${domId}`);
      
      // 订阅用户的音视频流
      await this.rtcEngine.subscribeStream(userId, MediaType.AUDIO_AND_VIDEO);
      
      // 设置远程视频播放器
      await this.rtcEngine.setRemoteVideoPlayer(StreamIndex.STREAM_INDEX_MAIN, {
        userId: userId,
        renderDom: domId,
      });

      console.log(`✅ 远程视频播放器设置成功: ${userId}`);
    } catch (error) {
      console.error(`❌ 设置远程视频播放器失败: ${userId}`, error);
      throw error;
    }
  }

  // 获取远程流列表
  getRemoteStreams(): RemoteStream[] {
    return Array.from(this.remoteStreams.values());
  }

  // 离开RTC房间
  async leaveRTCRoom(): Promise<void> {
    if (!this.rtcEngine) return;

    try {
      console.log('🚪 离开RTC房间...');
      
      // 停止所有本地流（如果有的话）
      await Promise.all([
        this.rtcEngine?.stopVideoCapture?.()?.catch(() => {}),
        this.rtcEngine?.stopAudioCapture?.()?.catch(() => {}),
      ]);
      
      // 取消发布所有流
      await this.rtcEngine?.unpublishStream(MediaType.AUDIO_AND_VIDEO).catch(() => {});
      
      // 离开房间
      await this.rtcEngine.leaveRoom();
      
      this.isRTCConnected = false;
      this.remoteStreams.clear();
      
      console.log('✅ 成功离开RTC房间');
    } catch (error) {
      console.error('❌ 离开RTC房间失败:', error);
      throw error;
    }
  }

  // 清理RTC资源
  cleanupRTC(): void {
    if (this.rtcEngine) {
      // 移除所有事件监听器
      this.rtcEngine.off(VERTC.events.onUserJoined);
      this.rtcEngine.off(VERTC.events.onUserLeave);
      this.rtcEngine.off(VERTC.events.onUserPublishStream);
      this.rtcEngine.off(VERTC.events.onUserUnpublishStream);
      this.rtcEngine.off(VERTC.events.onError);
      
      this.rtcEngine = null;
    }
    
    this.isRTCConnected = false;
    this.remoteStreams.clear();
    this.rtcConfig = null;
    
    console.log('🧹 RTC资源清理完成');
  }

  // 获取RTC连接状态
  getRTCConnectionStatus(): boolean {
    return this.isRTCConnected;
  }

  // 工具方法：安全地将字符串转换为 Long 类型
  private stringToLong(value: string): any {
    try {
      if (!value || value.trim() === '') {
        throw new Error('输入值不能为空');
      }
      
      // 验证输入是否为有效的数字字符串
      if (!/^\d+$/.test(value)) {
        throw new Error(`输入值不是有效的数字: ${value}`);
      }
      
      const longValue = Long.fromString(value);
      
      // 验证 Long 对象是否有效
      if (!longValue || typeof longValue.toString !== 'function') {
        throw new Error('Long 对象创建失败');
      }
      
      console.log(`✅ 成功转换字符串 "${value}" 为 Long: ${longValue.toString()}`);
      return longValue;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error(`❌ 转换字符串到 Long 失败: ${value}`, error);
      throw new Error(`无效的数字格式: ${value} - ${errorMessage}`);
    }
  }

  // 工具方法：安全地将 Long 类型转换为字符串
  private longToString(value: any): string {
    if (!value) return 'unknown';
    try {
      return value.toString();
    } catch (error) {
      console.error('转换 Long 到字符串失败:', error);
      return 'unknown';
    }
  }

  private setupMessageHandlers(): void {
    // 登录响应
    this.messageHandlers.set(1101, this.handleLoginResponse.bind(this));
    // 顶号通知
    this.messageHandlers.set(1105, this.handleLoginOtherPush.bind(this));
    // 进入房间响应
    this.messageHandlers.set(1201, this.handleEnterRoomResponse.bind(this));
    // 进入房间广播
    this.messageHandlers.set(1202, this.handleEnterRoomPush.bind(this));
    // 登台响应
    this.messageHandlers.set(1501, this.handleEnterStageResponse.bind(this));
    // 登台广播
    this.messageHandlers.set(1502, this.handleEnterStagePush.bind(this));
    // 舞台状态变更
    this.messageHandlers.set(1522, this.handleStageStatusChange.bind(this));
    // 队列信息推送
    this.messageHandlers.set(1505, this.handleStageQueueInfo.bind(this));
    // 离开房间响应
    this.messageHandlers.set(1203, this.handleLeaveRoomResponse.bind(this));
    // 离开房间广播
    this.messageHandlers.set(1204, this.handleLeaveRoomPush.bind(this));
    // 心跳响应
    this.messageHandlers.set(1111, this.handleHeartBeatResponse.bind(this));
    // 切换地图响应
    this.messageHandlers.set(11008, this.handleChangeMapPush.bind(this));
    // 场景变更推送
    this.messageHandlers.set(1109, this.handleSceneChangePush.bind(this));
    
    console.log('✅ 消息处理器设置完成，已注册以下消息类型:');
    console.log('  - 登录响应: 1101');
    console.log('  - 顶号通知: 1105');
    console.log('  - 进入房间响应: 1201');
    console.log('  - 进入房间广播: 1202');
    console.log('  - 登台响应: 1501');
    console.log('  - 登台广播: 1502');
    console.log('  - 舞台状态变更: 1522');
    console.log('  - 队列信息推送: 1505');
    console.log('  - 离开房间响应: 1203');
    console.log('  - 离开房间广播: 1204');
    console.log('  - 心跳响应: 1111');
    console.log('  - 切换地图响应: 11008');
    console.log('  - 场景变更推送: 1109');
  }

  // 启动心跳
  private startHeartbeat(): void {
    console.log('💓 启动心跳机制，间隔:', this.heartbeatInterval, 'ms');
    
    // 清除可能存在的旧定时器
    this.stopHeartbeat();
    
    // 立即发送一次心跳
    this.sendHeartbeat();
    
    // 设置定时器，每15秒发送一次心跳
    this.heartbeatTimer = setInterval(() => {
      this.sendHeartbeat();
    }, this.heartbeatInterval);
    
    // 启动心跳超时检查
    this.startHeartbeatTimeoutCheck();
  }

  // 停止心跳
  private stopHeartbeat(): void {
    if (this.heartbeatTimer) {
      console.log('💓 停止心跳机制');
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
    
    // 停止心跳超时检查
    if (this.heartbeatTimeoutTimer) {
      clearTimeout(this.heartbeatTimeoutTimer);
      this.heartbeatTimeoutTimer = null;
    }
  }

  // 启动心跳超时检查
  private startHeartbeatTimeoutCheck(): void {
    // 清除可能存在的旧超时检查
    if (this.heartbeatTimeoutTimer) {
      clearTimeout(this.heartbeatTimeoutTimer);
    }
    
    // 设置心跳超时检查
    this.heartbeatTimeoutTimer = setTimeout(() => {
      const now = Date.now();
      const timeSinceLastHeartbeat = now - this.lastHeartbeatTime;
      
      if (timeSinceLastHeartbeat > this.heartbeatTimeout) {
        console.warn('⚠️ 心跳超时，可能连接异常');
        console.log(`💓 距离上次心跳: ${timeSinceLastHeartbeat}ms`);
        
        // 如果心跳超时，尝试重连
        if (this.isConnected) {
          console.log('🔄 心跳超时，尝试重连...');
          this.handleReconnect();
        }
      }
    }, this.heartbeatTimeout);
  }

  // 发送心跳消息
  private sendHeartbeat(): void {
    if (!this.isConnected) {
      console.warn('💓 WebSocket未连接，跳过心跳发送');
      return;
    }

    try {
      console.log('💓 发送心跳消息...');
      
      // 创建心跳请求对象
      const heartbeatReq = proto.oHeartBeatReq.create({
        timestamp: Date.now()
      });
      
      const payload = proto.oHeartBeatReq.encode(heartbeatReq).finish();
      this.sendMessage(1111, payload); // HeartBeatReq = 1111
      
      this.lastHeartbeatTime = Date.now();
      console.log('💓 心跳消息发送成功');
      
    } catch (error) {
      console.error('❌ 发送心跳消息失败:', error);
      
      // 如果心跳发送失败，可能是连接有问题，尝试重连
      if (this.isConnected) {
        console.log('🔄 心跳发送失败，可能连接异常，尝试重连...');
        this.handleReconnect();
      }
    }
  }

  // 处理心跳响应
  private handleHeartBeatResponse(payload: ArrayBuffer): void {
    try {
      const heartbeatAsw = proto.oHeartBeatAsw.decode(new Uint8Array(payload));
      console.log('💓 收到心跳响应:', heartbeatAsw);
      
      // 更新最后心跳时间
      this.lastHeartbeatTime = Date.now();
      
      // 重新启动心跳超时检查
      this.startHeartbeatTimeoutCheck();
      
      // 可以在这里添加心跳延迟计算
      const now = Date.now();
      const timestamp = typeof heartbeatAsw.timestamp === 'object' && heartbeatAsw.timestamp?.toString 
        ? parseInt(heartbeatAsw.timestamp.toString()) 
        : Number(heartbeatAsw.timestamp);
      const latency = now - timestamp;
      console.log('💓 心跳延迟:', latency, 'ms');
      
    } catch (error) {
      console.error('❌ 解析心跳响应失败:', error);
    }
  }

  async connect(config: WebSocketConfig): Promise<void> {
    this.config = config;
    
    return new Promise((resolve, reject) => {
      try {
        console.log(`正在连接WebSocket: ${config.url}`);
        this.websocket = new WebSocket(config.url);
        
        // 设置二进制数据类型为 ArrayBuffer
        this.websocket.binaryType = 'arraybuffer';
        
        this.websocket.onopen = () => {
          console.log('WebSocket 连接成功');
          this.isConnected = true;
          this.reconnectAttempts = 0;
          
          // 启动心跳机制
          this.startHeartbeat();
          
          resolve();
        };
        
        this.websocket.onmessage = (event) => {
          this.handleMessage(event.data);
        };
        
        this.websocket.onclose = (event) => {
          console.log('🔌 WebSocket 连接关闭', {
            code: event.code,
            reason: event.reason,
            wasClean: event.wasClean,
            type: event.type
          });
          
          // 解析关闭代码的含义
          const closeCodeMessages: {[key: number]: string} = {
            1000: '正常关闭',
            1001: '端点离开',
            1002: '协议错误',
            1003: '不支持的数据类型',
            1005: '无状态码',
            1006: '异常关闭',
            1007: '数据类型不一致',
            1008: '违反政策',
            1009: '消息过大',
            1010: '客户端需要扩展',
            1011: '服务器遇到意外情况',
            1015: 'TLS握手失败'
          };
          
          const closeMessage = closeCodeMessages[event.code] || `未知关闭代码: ${event.code}`;
          console.log(`🔌 连接关闭原因: ${closeMessage}`);
          
          this.isConnected = false;
          
          // 停止心跳机制
          this.stopHeartbeat();
          
          // 检查是否是手动断开
          if (this.isManualDisconnect) {
            console.log('✅ 手动断开连接，不进行重连');
            this.isManualDisconnect = false; // 重置标志
          } else if (event.code !== 1000) {
            console.log('🔄 检测到异常关闭，启动重连机制...');
            this.handleReconnect();
          } else {
            console.log('✅ 正常关闭，不进行重连');
          }
        };
        
        this.websocket.onerror = (error) => {
          console.error('WebSocket 错误:', error);
          this.isConnected = false;
          reject(error);
        };
        
        // 连接超时
        setTimeout(() => {
          if (!this.isConnected) {
            reject(new Error('WebSocket 连接超时'));
          }
        }, 10000);
        
      } catch (error) {
        console.error('WebSocket 连接失败:', error);
        reject(error);
      }
    });
  }

  private handleReconnect(): void {
    if (this.reconnectAttempts < this.maxReconnectAttempts && this.config) {
      this.reconnectAttempts++;
      console.log(`🔄 尝试重连 (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
      
      const delay = this.reconnectDelay * this.reconnectAttempts;
      console.log(`⏰ 等待 ${delay}ms 后重连...`);
      
      setTimeout(() => {
        console.log('🚀 开始重连...');
        this.connect(this.config!).catch(error => {
          console.error('❌ 重连失败:', error);
          // 如果重连失败，继续尝试
          if (this.reconnectAttempts < this.maxReconnectAttempts) {
            console.log('🔄 重连失败，将继续尝试...');
          } else {
            console.log('❌ 重连次数已达上限，停止重连');
          }
        });
      }, delay);
    } else {
      console.log('❌ 重连次数已达上限或配置无效，停止重连');
      console.log(`  - 重连次数: ${this.reconnectAttempts}/${this.maxReconnectAttempts}`);
      console.log(`  - 配置状态: ${this.config ? '有效' : '无效'}`);
    }
  }

  private handleMessage(data: any): void {
    // 如果连接已断开，不再处理消息
    if (!this.isConnected) {
      console.log('⚠️ 连接已断开，忽略消息');
      return;
    }
    
    try {
      let arrayBuffer: ArrayBuffer;
      
      // 检查数据类型并转换为 ArrayBuffer
      if (data instanceof ArrayBuffer) {
        arrayBuffer = data;
      } else if (data instanceof Blob) {
        // 如果是 Blob，需要异步读取
        data.arrayBuffer().then(buffer => {
          this.handleMessage(buffer);
        }).catch(error => {
          console.error('读取 Blob 数据失败:', error);
        });
        return;
      } else if (typeof data === 'string') {
        // 如果是字符串，可能是 JSON 或其他格式
        console.log('收到字符串消息:', data);
        // 这里可以根据需要处理字符串消息
        return;
      } else {
        console.error('不支持的消息数据类型:', typeof data, data);
        return;
      }
      
      // 检查数据长度是否足够
      if (arrayBuffer.byteLength < 6) {
        console.error('消息数据长度不足:', arrayBuffer.byteLength);
        return;
      }
      
      const dataView = new DataView(arrayBuffer);
      
      // 解析消息头 (4字节长度 + 2字节消息ID)
      const totalLength = dataView.getUint32(0, true); // 小端序
      const messageId = dataView.getUint16(4, true);   // 小端序
      
      // 调试：打印原始字节数据
      const headerBytes = new Uint8Array(arrayBuffer.slice(0, 6));
      console.log(`🔍 消息头原始字节: [${Array.from(headerBytes).join(', ')}]`);
      console.log(`🔍 解析结果: totalLength=${totalLength}, messageId=${messageId}`);
      
      // 验证消息长度
      if (totalLength !== arrayBuffer.byteLength) {
        console.error(`消息长度不匹配: 期望 ${totalLength}, 实际 ${arrayBuffer.byteLength}`);
        return;
      }
      
      // 提取消息体
      const payload = arrayBuffer.slice(6);
      
      console.log(`收到消息 ID: ${messageId}, 长度: ${totalLength}`);
      
      // 调试：打印所有已注册的消息处理器
      console.log('🔍 已注册的消息处理器:', Array.from(this.messageHandlers.keys()));
      
      // 根据消息ID处理消息
      const handler = this.messageHandlers.get(messageId);
      if (handler) {
        console.log(`✅ 找到消息处理器: ${messageId}`);
        handler(payload);
      } else {
        console.warn(`❌ 未知消息类型: ${messageId}`);
        console.log(`🔍 当前已注册的消息类型: ${Array.from(this.messageHandlers.keys()).join(', ')}`);
      }
    } catch (error) {
      console.error('解析消息失败:', error);
    }
  }

  private sendMessage(messageId: number, payload: Uint8Array): void {
    console.log(`📤 准备发送消息 ID: ${messageId}, 连接状态: ${this.isConnected}`);
    
    if (!this.websocket || !this.isConnected) {
      console.error('❌ WebSocket 未连接，无法发送消息');
      throw new Error('WebSocket 未连接');
    }
    
    // 构造消息 (4字节长度 + 2字节消息ID + 数据)
    const totalLength = 4 + 2 + payload.length;
    const buffer = new ArrayBuffer(totalLength);
    const dataView = new DataView(buffer);
    
    dataView.setUint32(0, totalLength, true);  // 小端序
    dataView.setUint16(4, messageId, true);    // 小端序
    
    // 复制消息体
    const bodyView = new Uint8Array(buffer, 6);
    bodyView.set(payload);
    
    console.log(`📤 发送消息详情: ID=${messageId}, 总长度=${totalLength}, 数据长度=${payload.length}`);
    
    this.websocket.send(buffer);
    console.log(`✅ 消息发送成功 ID: ${messageId}`);
  }

  // 发送登录请求
  async sendLoginRequest(): Promise<void> {
    if (!this.config) {
      throw new Error('未配置WebSocket参数');
    }
    
    console.log('🔐 准备发送登录请求...');
    console.log('  - uid:', this.config.uid);
    console.log('  - accessToken:', this.config.accessToken ? '已设置' : '未设置');
    console.log('  - insToken:', this.config.insToken ? '已设置' : '未设置');
    
    try {
      // 使用 Long.fromString 将字符串 uid 转换为 Long 类型
      const accountLong = this.stringToLong(this.config.uid);
      console.log('🔐 转换后的 account Long:', this.longToString(accountLong));
      
      // 验证 accountLong 是否为有效的 Long 对象
      if (!accountLong || typeof accountLong.toString !== 'function') {
        throw new Error('account Long 对象无效');
      }
      
      // 创建登录请求对象
      const loginReqData = {
        account: accountLong,
        token: this.config.accessToken,
        insToken: this.config.insToken
      };
      
      console.log('🔐 登录请求数据:', {
        account: accountLong.toString(),
        token: this.config.accessToken ? '已设置' : '未设置',
        insToken: this.config.insToken ? '已设置' : '未设置'
      });
      
      const loginReq = proto.oLoginReq.create(loginReqData);
      
      // 验证创建的对象
      if (!loginReq) {
        throw new Error('登录请求对象创建失败');
      }
      
      console.log('🔐 登录请求对象创建成功:', loginReq);
      
      const payload = proto.oLoginReq.encode(loginReq).finish();
      console.log('🔐 登录请求编码完成，长度:', payload.length);
      
      this.sendMessage(101, payload); // LoginReq = 101
      console.log('🔐 登录请求已发送');
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error('❌ 发送登录请求失败:', errorMessage);
      throw new Error(`登录请求失败: ${errorMessage}`);
    }
  }

  // 发送进入房间请求
  async sendEnterRoomRequest(): Promise<void> {
    if (!this.config) {
      throw new Error('未配置WebSocket参数');
    }
    
    console.log('🚪 准备发送进入房间请求...');
    console.log('  - roomId:', this.config.roomId);
    
    // 使用 Long.fromString 将字符串 roomId 转换为 Long 类型
    const roomIdLong = this.stringToLong(this.config.roomId);
    console.log('🚪 转换后的 roomId Long:', this.longToString(roomIdLong));
    
    const enterRoomReq = proto.oEnterRoomReq.create({
      roomId: roomIdLong
    });
    
    const payload = proto.oEnterRoomReq.encode(enterRoomReq).finish();
    console.log('🚪 进入房间请求已发送');
    this.sendMessage(201, payload); // EnterRoomReq = 201
  }

  // 发送登台请求
  async sendEnterStageRequest(): Promise<void> {
    if (!this.config) {
      throw new Error('未配置WebSocket参数');
    }
    
    console.log('🔍 登台请求参数检查:');
    console.log('  - enterStageInfo:', this.config.enterStageInfo);
    
    const enterStageReq = proto.oEnterStageReq.create({
      context: this.config.enterStageInfo
    });
    
    const payload = proto.oEnterStageReq.encode(enterStageReq).finish();
    console.log('🔍 发送登台请求');
    this.sendMessage(501, payload); // EnterStageReq = 501
    
    // 启动登台状态监听
    this.startStageStatusMonitoring();
  }

  // 登台状态监听
  private stageStatusMonitoring: {
    isActive: boolean;
    timeoutCount: number;
    maxTimeouts: number;
    receivedStageChange: boolean;
    enterStageSuccess: boolean;
    roomIdForLeave: string | null;
  } = {
    isActive: false,
    timeoutCount: 0,
    maxTimeouts: 2,
    receivedStageChange: false,
    enterStageSuccess: false,
    roomIdForLeave: null
  };

  private startStageStatusMonitoring(): void {
    this.stageStatusMonitoring = {
      isActive: true,
      timeoutCount: 0,
      maxTimeouts: 2,
      receivedStageChange: false,
      enterStageSuccess: false,
      roomIdForLeave: null
    };
    
    console.log('🔍 开始登台状态监听...');
    
    // 设置超时检查
    this.checkStageStatusTimeout();
  }

  private checkStageStatusTimeout(): void {
    if (!this.stageStatusMonitoring.isActive) {
      return;
    }
    
    this.stageStatusMonitoring.timeoutCount++;
    console.log(`⏰ 登台状态检查超时 (${this.stageStatusMonitoring.timeoutCount}/${this.stageStatusMonitoring.maxTimeouts})`);
    
    // 如果收到了舞台状态变更，可能登台已经成功
    if (this.stageStatusMonitoring.receivedStageChange && this.stageStatusMonitoring.timeoutCount >= this.stageStatusMonitoring.maxTimeouts) {
      console.log('✅ 基于舞台状态变更判断登台可能成功');
      this.stageStatusMonitoring.enterStageSuccess = true;
      this.completeStageFlow();
    } else if (this.stageStatusMonitoring.timeoutCount >= this.stageStatusMonitoring.maxTimeouts) {
      console.log('❌ 登台过程失败或超时');
      this.stageStatusMonitoring.isActive = false;
    } else {
      // 继续等待
      setTimeout(() => {
        this.checkStageStatusTimeout();
      }, 8000); // 8秒超时
    }
  }

  private async completeStageFlow(): Promise<void> {
    if (!this.stageStatusMonitoring.isActive) {
      return;
    }
    
    this.stageStatusMonitoring.isActive = false;
    
    if (!this.stageStatusMonitoring.roomIdForLeave && this.config) {
      this.stageStatusMonitoring.roomIdForLeave = this.config.roomId;
      console.log(`使用配置的房间ID: ${this.stageStatusMonitoring.roomIdForLeave}`);
    }
    
    console.log('✅ 登台成功，准备启动RTC视频服务...');
    
    // 启动RTC视频服务（仅观看模式）
    try {
      await this.triggerRTCStart();
      console.log('✅ RTC视频服务启动完成');
    } catch (error) {
      console.error('❌ RTC视频服务启动失败:', error);
      // 即使RTC启动失败，也继续后续流程
    }
    
    console.log('✅ 登台流程完成，RTC视频服务已启动，用户可以正常观看视频');
    console.log('💡 提示：用户可以通过"离开舞台"按钮手动离开房间');
  }

  // 触发RTC启动事件
  private async triggerRTCStart(): Promise<void> {
    console.log('🚀 触发RTC启动事件...');
    
    // 创建自定义事件，通知tryonService启动RTC
    const event = new CustomEvent('stageSuccessRTCStart', {
      detail: {
        timestamp: Date.now(),
        roomId: this.config?.roomId,
        userId: this.config?.uid
      }
    });
    
    window.dispatchEvent(event);
    console.log('📡 RTC启动事件已发送');
  }

  // 发送离开房间请求
  async sendLeaveRoomRequest(): Promise<void> {
    if (!this.config) {
      throw new Error('未配置WebSocket参数');
    }
    
    console.log('🚪 准备发送离开房间请求...');
    console.log('  - roomId:', this.config.roomId);
    
    // 使用 Long.fromString 将字符串 roomId 转换为 Long 类型
    const roomIdLong = this.stringToLong(this.config.roomId);
    console.log('🚪 转换后的 roomId Long:', this.longToString(roomIdLong));
    
    const leaveRoomReq = proto.oLeaveRoomReq.create({
      roomId: roomIdLong
    });
    
    const payload = proto.oLeaveRoomReq.encode(leaveRoomReq).finish();
    console.log('🚪 离开房间请求已发送');
    this.sendMessage(203, payload); // LeaveRoomReq = 203
  }

  // 处理登录响应
  private handleLoginResponse(payload: ArrayBuffer): void {
    try {
      const loginAsw = proto.oLoginAsw.decode(new Uint8Array(payload));
      console.log('登录响应:', loginAsw);
      
      const errorName = proto.eError[loginAsw.code];
      console.log(`登录结果: ${errorName}`);
      
      if (loginAsw.code === proto.eError.SUCCESS) {
        console.log('登录成功，准备进入房间...');
        // 自动进入房间
        setTimeout(() => {
          this.sendEnterRoomRequest();
        }, 500);
      } else {
        alert("登录失败:" + errorName);
        console.error('登录失败:', errorName);
      }
    } catch (error) {
      console.error('处理登录响应失败:', error);
    }
  }

  // 处理顶号通知
  private handleLoginOtherPush(payload: ArrayBuffer): void {
    try {
      const loginOther = proto.oLoginOtherPush.decode(new Uint8Array(payload));
      console.log('收到顶号通知');
      // 这里可以触发UI提示用户
      // alert('您的账号在其他地方登录');
    } catch (error) {
      console.error('处理顶号通知失败:', error);
    }
  }

  // 处理进入房间响应
  private handleEnterRoomResponse(payload: ArrayBuffer): void {
    try {
      const enterRoomAsw = proto.oEnterRoomAsw.decode(new Uint8Array(payload));
      console.log('进入房间响应:', enterRoomAsw);
      
      const errorName = proto.eError[enterRoomAsw.code];
      console.log(`进入房间结果: ${errorName}`);
      
      if (enterRoomAsw.code === proto.eError.SUCCESS) {
        // 将 Long 类型转换为字符串显示
        const roomIdStr = enterRoomAsw.roomId.toString();
        console.log(`成功进入房间: ${roomIdStr}`);
        console.log(`在线用户数量: ${enterRoomAsw.onlineUsers.length}`);
        console.log(`舞台数量: ${enterRoomAsw.stageCount}`);
        console.log(`场景: ${enterRoomAsw.scene}`);
        
        // 自动发送登台请求
        setTimeout(() => {
          this.sendEnterStageRequest();
        }, 1000);
      } else {
        console.error('进入房间失败:', errorName);
      }
    } catch (error) {
      console.error('处理进入房间响应失败:', error);
    }
  }

  // 处理进入房间广播
  private handleEnterRoomPush(payload: ArrayBuffer): void {
    try {
      const enterRoomPush = proto.oEnterRoomPush.decode(new Uint8Array(payload));
      // 将 Long 类型转换为字符串显示
      const userIdStr = this.longToString(enterRoomPush.enterUserId);
      console.log(`收到用户进入房间广播: 用户ID ${userIdStr}`);
    } catch (error) {
      console.error('处理进入房间广播失败:', error);
    }
  }

  // 处理登台响应
  private handleEnterStageResponse(payload: ArrayBuffer): void {
    console.log('登台响应:', payload);
    try {
      const enterStageAsw = proto.oEnterStageAsw.decode(new Uint8Array(payload));
      console.log('登台响应详情:', enterStageAsw);
      
      const errorName = proto.eError[enterStageAsw.code];
      console.log(`登台结果: ${errorName}`);
      
      if (enterStageAsw.code === proto.eError.SUCCESS) {
        // 将 Long 类型转换为字符串显示
        const roomIdStr = this.longToString(enterStageAsw.roomId);
        const stageIdStr = this.longToString(enterStageAsw.stageId);
        console.log(`✅ 成功登台: 房间ID ${roomIdStr}, 舞台ID ${stageIdStr}`);
        
        // 更新登台状态监听器
        if (this.stageStatusMonitoring.isActive) {
          this.stageStatusMonitoring.enterStageSuccess = true;
          this.stageStatusMonitoring.roomIdForLeave = roomIdStr;
          this.completeStageFlow();
        }
      } else {
        console.error('❌ 登台失败:', errorName);
        // 停止登台状态监听
        this.stageStatusMonitoring.isActive = false;
      }
    } catch (error) {
      console.error('处理登台响应失败:', error);
    }
  }

  // 处理登台广播
  private handleEnterStagePush(payload: ArrayBuffer): void {
    try {
      const enterStagePush = proto.oEnterStagePush.decode(new Uint8Array(payload));
      // 将 Long 类型转换为字符串显示
      const userIdStr = this.longToString(enterStagePush.userId);
      const stageIdStr = this.longToString(enterStagePush.stageId);
      console.log(`收到用户登台广播: 用户ID ${userIdStr}, 舞台ID ${stageIdStr}`);
    } catch (error) {
      console.error('处理登台广播失败:', error);
    }
  }

  // 处理舞台状态变更
  private handleStageStatusChange(payload: ArrayBuffer): void {
    try {
      const stageStatusChange = proto.oStageStatusChangePush.decode(new Uint8Array(payload));
      // 将 Long 类型转换为字符串显示
      const stageIdStr = this.longToString(stageStatusChange.stageId);
      const userIdStr = this.longToString(stageStatusChange.userId);
      console.log(`收到舞台状态变更: 索引${stageStatusChange.index}, 舞台ID${stageIdStr}, 用户ID${userIdStr}, 状态${stageStatusChange.stageType}`);
      
      // 更新登台状态监听器
      if (this.stageStatusMonitoring.isActive) {
        this.stageStatusMonitoring.receivedStageChange = true;
        
        if (stageStatusChange.stageType === proto.eStageType.StageTypeTryEnter) {
          console.log('舞台状态变更为 TryEnter - 正在尝试上台');
        } else if (stageStatusChange.stageType === proto.eStageType.StageTypeWorking) {
          console.log('舞台状态变更为 Working - 已经在台上工作！');
          // 如果状态变为Working，认为登台成功
          this.stageStatusMonitoring.enterStageSuccess = true;
          this.completeStageFlow();
        }
      }
    } catch (error) {
      console.error('处理舞台状态变更失败:', error);
    }
  }

  // 处理队列信息推送
  private handleStageQueueInfo(payload: ArrayBuffer): void {
    try {
      const stageQueueInfo = proto.oStageQueueInfoPush.decode(new Uint8Array(payload));
      console.log(`收到舞台队列信息: 队列类型${stageQueueInfo.type}, 排队人数${stageQueueInfo.queueCount}, 舞台数量${stageQueueInfo.stageCount}`);
      
      // 可以在这里添加队列状态的处理逻辑
      if (stageQueueInfo.queueUserIds && stageQueueInfo.queueUserIds.length > 0) {
        console.log(`排队用户: ${stageQueueInfo.queueUserIds.length}个`);
      }
      if (stageQueueInfo.stageUserIds && stageQueueInfo.stageUserIds.length > 0) {
        console.log(`台上用户: ${stageQueueInfo.stageUserIds.length}个`);
      }
    } catch (error) {
      console.error('处理队列信息推送失败:', error);
    }
  }

  // 处理离开房间响应
  private handleLeaveRoomResponse(payload: ArrayBuffer): void {
    try {
      const leaveRoomAsw = proto.oLeaveRoomAsw.decode(new Uint8Array(payload));
      console.log('离开房间响应:', leaveRoomAsw);
      
      const errorName = proto.eError[leaveRoomAsw.code];
      console.log(`离开房间结果: ${errorName}`);
      
      if (leaveRoomAsw.code === proto.eError.SUCCESS) {
        console.log('成功离开房间');
        // 关闭WebSocket连接
        this.disconnect();
      } else {
        console.error('离开房间失败:', errorName);
      }
    } catch (error) {
      console.error('处理离开房间响应失败:', error);
    }
  }

  // 处理离开房间广播
  private handleLeaveRoomPush(payload: ArrayBuffer): void {
    try {
      const leaveRoomPush = proto.oLeaveRoomPush.decode(new Uint8Array(payload));
      // 将 Long 类型转换为字符串显示
      const userIdStr = this.longToString(leaveRoomPush.leaveUserId);
      console.log(`收到用户离开房间广播: 用户ID ${userIdStr}`);
    } catch (error) {
      console.error('处理离开房间广播失败:', error);
    }
  }

  // 完整的登台流程
  async performFullStageFlow(): Promise<void> {
    console.log('🚀 开始执行完整登台流程...');
    console.log('  - WebSocket 连接状态:', this.isConnected);
    console.log('  - WebSocket 实例:', this.websocket ? '已创建' : '未创建');
    console.log('  - 配置信息:', this.config ? '已设置' : '未设置');
    
    if (!this.isConnected) {
      console.error('❌ WebSocket 未连接，无法执行登台流程');
      throw new Error('WebSocket 未连接');
    }
    
    if (!this.config) {
      console.error('❌ 未配置WebSocket参数，无法执行登台流程');
      throw new Error('未配置WebSocket参数');
    }
    
    try {
      console.log('✅ 开始登台流程...');
      
      // 1. 发送登录请求
      console.log('📤 步骤1: 发送登录请求');
      await this.sendLoginRequest();
      
      // 其他步骤将通过消息处理器自动执行
      console.log('⏳ 登台流程已启动，等待服务器响应...');
      
    } catch (error) {
      console.error('❌ 登台流程失败:', error);
      throw error;
    }
  }

  // 断开连接
  async disconnect(): Promise<void> {
    console.log('🔌 开始断开连接...');
    
    // 设置手动断开标志
    this.isManualDisconnect = true;
    
    // 立即设置连接状态为false，防止新的消息处理
    this.isConnected = false;
    
    // 停止心跳机制
    this.stopHeartbeat();
    
    // 停止重连机制
    this.reconnectAttempts = this.maxReconnectAttempts + 1;
    
    // 先断开RTC连接
    if (this.isRTCConnected) {
      try {
        await this.leaveRTCRoom();
        console.log('✅ RTC连接已断开');
      } catch (error) {
        console.error('❌ 断开RTC连接失败:', error);
      }
    }
    
    // 清理RTC资源
    this.cleanupRTC();
    
    // 断开WebSocket连接
    if (this.websocket) {
      // 移除所有事件监听器
      this.websocket.onopen = null;
      this.websocket.onmessage = null;
      this.websocket.onclose = null;
      this.websocket.onerror = null;
      
      // 关闭连接
      this.websocket.close(1000, '用户主动断开');
      this.websocket = null;
    }
    
    // 清理配置
    this.config = null;
    
    // 清理消息处理器
    this.messageHandlers.clear();
    
    console.log('✅ WebSocket连接已完全断开');
  }

  // 发送切换地图请求
  async sendChangeMapRequest(mapName: string): Promise<void> {
    console.log('🗺️ 准备发送切换地图请求...', mapName);
    
    // 检查连接状态
    if (!this.isConnected) {
      console.error('❌ WebSocket未连接，无法发送切换地图请求');
      throw new Error('WebSocket未连接');
    }
    
    // 检查配置是否有效
    if (!this.config || !this.config.roomId) {
      console.error('❌ WebSocket配置无效或未进房，无法发送切换地图请求');
      throw new Error('WebSocket配置无效或未进房');
    }
    
    console.log('🔍 切换地图请求状态检查:');
    console.log('  - WebSocket连接状态:', this.isConnected);
    console.log('  - 房间ID:', this.config.roomId);
    console.log('  - 用户ID:', this.config.uid);
    console.log('  - 目标地图:', mapName);
    
    try {
      // 创建 oChangeMapReq 消息
      const message = proto.oChangeMapReq.create({
        mapName: mapName
      });
      
      // 编码消息
      const payload = proto.oChangeMapReq.encode(message).finish();
      
      console.log('📦 切换地图消息编码完成:', {
        mapName: mapName,
        payloadSize: payload.length,
        payloadBytes: Array.from(payload)
      });
      
      // 发送消息 (ChangeMapReq = 1008)
      this.sendMessage(1008, payload);
      
      console.log('✅ 切换地图请求发送成功:', mapName);
      
    } catch (error) {
      console.error('❌ 发送切换地图请求失败:', error);
      throw error;
    }
  }

  // 发送热力图请求
  async sendHeatMapRequest(enable: boolean): Promise<void> {
    console.log('🔥 准备发送热力图请求...', enable);
    
    // 检查连接状态
    if (!this.isConnected) {
      console.error('❌ WebSocket未连接，无法发送热力图请求');
      throw new Error('WebSocket未连接');
    }
    
    // 检查配置是否有效
    if (!this.config || !this.config.roomId) {
      console.error('❌ WebSocket配置无效或未进房，无法发送热力图请求');
      throw new Error('WebSocket配置无效或未进房');
    }
    
    console.log('🔍 热力图请求状态检查:');
    console.log('  - WebSocket连接状态:', this.isConnected);
    console.log('  - 房间ID:', this.config.roomId);
    console.log('  - 用户ID:', this.config.uid);
    console.log('  - 热力图开关:', enable);
    
    try {
      // 创建 oHeatMapReq 消息
      const message = proto.oHeatMapReq.create({
        enable: enable
      });
      
      // 编码消息
      const payload = proto.oHeatMapReq.encode(message).finish();
      
      console.log('📦 热力图消息编码完成:', {
        enable: enable,
        payloadSize: payload.length,
        payloadBytes: Array.from(payload)
      });
      
      // 发送消息 (HeatMapReq = 1009)
      this.sendMessage(1009, payload);
      
      console.log('✅ 热力图请求发送成功:', enable);
      
    } catch (error) {
      console.error('❌ 发送热力图请求失败:', error);
      throw error;
    }
  }

  // 处理切换地图响应
  private handleChangeMapPush(data: Uint8Array): void {
    try {
      console.log('🗺️ 收到切换地图响应, 数据长度:', data.length);
      console.log('🗺️ 原始响应数据:', Array.from(data));
      
      // 解码消息
      const message = proto.oChangeMapPush.decode(data);
      
      console.log('📦 切换地图响应解码成功:', {
        code: message.code,
        mapName: message.mapName,
        codeText: this.getErrorCodeText(message.code)
      });
      
      // 打印详细日志
      if (message.code === proto.eError.SUCCESS) {
        console.log('✅ 地图切换成功!');
        console.log('  - 新地图名称:', message.mapName);
      } else {
        console.log('❌ 地图切换失败!');
        console.log('  - 错误代码:', message.code);
        console.log('  - 错误描述:', this.getErrorCodeText(message.code));
        console.log('  - 请求的地图名称:', message.mapName);
      }
      
      // 触发自定义事件，通知UI组件
      const event = new CustomEvent('mapChangeResult', {
        detail: {
          success: message.code === proto.eError.SUCCESS,
          code: message.code,
          mapName: message.mapName,
          errorText: this.getErrorCodeText(message.code)
        }
      });
      
      window.dispatchEvent(event);
      
    } catch (error) {
      console.error('❌ 处理切换地图响应失败:', error);
      console.error('原始数据:', Array.from(data)); // 打印完整数据用于调试
    }
  }

  // 处理场景变更推送
  private handleSceneChangePush(data: Uint8Array): void {
    try {
      console.log('🎭 收到场景变更推送, 数据长度:', data.length);
      console.log('🎭 原始响应数据:', Array.from(data));
      
      // 检查数据是否有效
      if (!data || data.length === 0) {
        console.log('⚠️ 场景变更推送数据为空，忽略');
        return;
      }
      
      // 尝试解码消息
      const message = proto.oSceneChangePush.decode(data);
      
      console.log('📦 场景变更推送解码成功:', {
        scene: message.scene
      });
      
      console.log('✅ 场景变更成功!');
      console.log('  - 新场景名称:', message.scene);
      
      // 触发自定义事件，通知UI组件
      const event = new CustomEvent('sceneChangeResult', {
        detail: {
          success: true,
          scene: message.scene,
          timestamp: Date.now()
        }
      });
      
      window.dispatchEvent(event);
      
    } catch (error) {
      console.log('⚠️ 场景变更推送解码失败，可能是数据格式不匹配，忽略此错误');
      console.log('  - 错误详情:', error);
      console.log('  - 数据长度:', data.length);
      console.log('  - 数据预览:', Array.from(data.slice(0, 10)));
      
      // 不抛出错误，只是记录日志
      // 因为场景变更已经通过RTC消息成功处理了
    }
  }

  // 获取错误代码对应的文本描述
  private getErrorCodeText(code: proto.eError): string {
    const errorTexts: {[key: number]: string} = {
      [proto.eError.UNKNOWN]: '未知错误',
      [proto.eError.SUCCESS]: '成功',
      [proto.eError.FAILD]: '失败',
      [proto.eError.ERROR_REQ_PARAM]: '请求参数有误',
      [proto.eError.ERROR_OTHER_ROOM_OPEN]: '本实例已经开着其他房间了',
      [proto.eError.ERROR_CREATE_ROOM_FAIL]: '创建房间失败',
      [proto.eError.ERROR_ENTER_ROOM_FAIL]: '进入房间失败',
      [proto.eError.EMPTY_INS_TOKEN]: '未传递insToken',
      [proto.eError.UNSET_INS_TOKEN]: '未设置insToken',
      [proto.eError.ERROR_INS_TOKEN]: '不匹配insToken',
      [proto.eError.ERROR_NO_ROOM]: '没有房间',
      [proto.eError.ERROR_NOT_IN_ROOM]: '不在房间内',
      [proto.eError.ERROR_ALREADY_IN_STAGE]: '已经在小窗里了',
      [proto.eError.ERROR_ALREADY_IN_QUEUE]: '已经在排队了',
      [proto.eError.ERROR_ENTER_STAGE_FAIL]: '上台失败',
      [proto.eError.ERROR_ENTER_STAGE_TIMEOUT]: '上台超时',
      [proto.eError.ERROR_NOT_IN_STAGE]: '不在小窗里'
    };
    
    return errorTexts[code] || `未知错误代码: ${code}`;
  }

  // 获取连接状态
  getConnectionStatus(): boolean {
    return this.isConnected;
  }
}

// 导出单例实例
export const webSocketService = new WebSocketService(); 