// RTC消息处理服务，参考C#代码实现
import * as proto from '../proto/xproto';
const Long = require('long');
//add by chao 2025.09.30 日志开关
const isProtoLog = false;
const isRtcLog = false;

export interface RTCMessage {
  type: string;
  data: any;
}

export interface HeartBeatMessage {
  timestamp: number;
}

export interface HeartBeatAckMessage {
  timestamp: number;
}

export class RTCMessageHandler {
  private messageCallbacks: Map<string, (data: any) => void> = new Map();
  private heartbeatInterval: NodeJS.Timeout | null = null;
  private lastHeartbeatDelay: number = 0;
  private engine: any = null;

  constructor() {}

  // 初始化消息处理器
  initialize(): void {
    console.log('📨 初始化RTC消息处理器');
    console.log('性能调优 a1：' + new Date().toLocaleString())
  }

  // 设置RTC引擎
  setEngine(engine: any): void {
    this.engine = engine;
    console.log('📨 设置RTC引擎到消息处理器');
  }

  // 注册消息回调
  onMessage(type: string, callback: (data: any) => void): void {
    this.messageCallbacks.set(type, callback);
  }

  // 处理接收到的消息
  handleMessage(message: RTCMessage): void {
    console.log('📨 收到RTC消息:', message.type, message.data);
    
    const callback = this.messageCallbacks.get(message.type);
    if (callback) {
      callback(message.data);
    }
  }

  // 发送用户消息（参考C#代码）
  sendUserMessage(message: string): void {
    if (!this.engine) {
      console.error('❌ [RTCMessageHandler:sendUserMessage] engine is null');
      return;
    }

    console.log('📤 发送用户消息:', message);
    this.engine.sendUserMessage("8888", message);
  }

  // 发送房间消息
  sendRoomMessage(message: string): void {
    if (!this.engine) {
      console.error('❌ [RTCMessageHandler:sendRoomMessage] engine is null');
      return;
    }

    console.log('📤 发送房间消息:', message);
    this.engine.sendRoomMessage(message);
  }

  // 发送心跳消息
  sendHeartbeat(stageIndex: number = 0, isAudioOn: boolean = false, videoFrameSize?: { x: number, y: number }): void {
    if (!this.engine) {
      console.error('❌ [RTCMessageHandler:sendHeartbeat] engine is null');
      return;
    }

    let heartBeatCmd = `cmd=stay_room&msec=${Date.now()}&delay=${this.lastHeartbeatDelay}&spos=${stageIndex}&ad=${isAudioOn}`;
    
    if (videoFrameSize) {
      heartBeatCmd += `&w=${videoFrameSize.x}&h=${videoFrameSize.y}`;
    }

    console.log('💓 发送心跳消息:', heartBeatCmd);
    this.engine.sendUserMessage("8888", heartBeatCmd);
  }

  // 发送进入房间消息
  sendEnterRoom(): void {
    if (!this.engine) {
      console.error('❌ [RTCMessageHandler:sendEnterRoom] engine is null');
      return;
    }

    const message = `cmd=enter_room&msec=${Date.now()}`;
    console.log('🚪 发送进入房间消息:', message);
    this.engine.sendUserMessage("8888", message);
  }

  // 发送离开房间消息
  sendLeaveRoom(): void {
    if (!this.engine) {
      console.error('❌ [RTCMessageHandler:sendLeaveRoom] engine is null');
      return;
    }

    const message = `cmd=leave_room&msec=${Date.now()}`;
    console.log('🚪 发送离开房间消息:', message);
    this.engine.sendUserMessage("8888", message);
  }

  // 发送进入舞台消息
  sendEnterStage(stageIndex: number): void {
    if (!this.engine) {
      console.error('❌ [RTCMessageHandler:sendEnterStage] engine is null');
      return;
    }

    const message = `cmd=enter_stage&msec=${Date.now()}&pos=${stageIndex}`;
    console.log('🎭 发送进入舞台消息:', message);
    this.engine.sendUserMessage("8888", message);
  }

  // 发送离开舞台消息
  sendLeaveStage(stageIndex: number): void {
    if (!this.engine) {
      console.error('❌ [RTCMessageHandler:sendLeaveStage] engine is null');
      return;
    }

    const message = `cmd=leave_stage&msec=${Date.now()}&pos=${stageIndex}`;
    console.log('🎭 发送离开舞台消息:', message);
    this.engine.sendUserMessage("8888", message);
  }

  // 发送消息 (参考C#代码的SendMessage方法)
  sendMessage<PB>(id: proto.eClientPID, body: PB, callback?: (message: any) => void): void {
    if (!this.engine) {
      console.error('❌ [RTCMessageHandler:sendMessage] engine is null');
      return;
    }

    try {
      // 编码消息体 - 使用正确的proto编码方式
      let payload: Uint8Array;
      if ((body as any).toByteArray) {
        // 如果对象有toByteArray方法
        payload = (body as any).toByteArray();
      } else if ((body as any).encode) {
        // 如果对象有encode方法
        payload = (body as any).encode().finish();
      } else {
        // 使用proto编码器
        payload = proto.oChangeMapReq.encode(body as any).finish();
      }
      
      // 转换为十六进制字符串
      const hexString = Array.from(payload).map((b: unknown) => (b as number).toString(16).padStart(2, '0')).join('');
      if(isProtoLog){
        console.log('📤 发送proto消息:', {
          id: id,
          idHashCode: id,
          payloadSize: payload.length,
          hexString: hexString
        });
      }
      
      // 使用正确的proto消息格式 (参考C#代码)
      const messageStr = `cmd=proto&id=${id}&hex=${hexString}`;
      this.engine.sendUserMessage("8888", messageStr);
      
      if(isProtoLog){
      console.log('✅ proto消息发送成功:', id);
      console.log('📤 发送的消息内容:', messageStr);
      }
    } catch (error) {
      console.error('❌ 发送proto消息失败:', error);
    }
  }

  // 发送切换地图消息
  sendChangeMap(mapName: string): void {
    if (!this.engine) {
      console.error('❌ [RTCMessageHandler:sendChangeMap] engine is null');
      return;
    }

    try {
      console.log('🗺️ 准备发送切换地图消息:', {
        mapName: mapName,
        messageType: 'oChangeMapReq'
      });
      
      // 直接编码proto消息
      const message = proto.oChangeMapReq.create({
        mapName: mapName
      });
      
      const payload = proto.oChangeMapReq.encode(message).finish();
      const hexString = Array.from(payload).map((b: number) => b.toString(16).padStart(2, '0')).join('');
      if(isProtoLog){
        console.log('📤 发送proto消息:', {
          id: proto.eClientPID.ChangeMapReq,
          payloadSize: payload.length,
          hexString: hexString
        });
      }
      
      // 使用正确的proto消息格式 (参考C#代码)
      const messageStr = `cmd=proto&id=${proto.eClientPID.ChangeMapReq}&hex=${hexString}`;
      this.engine.sendUserMessage("8888", messageStr);

      if(isProtoLog){      
      console.log('✅ proto消息发送成功:', proto.eClientPID.ChangeMapReq);
      console.log('📤 发送的消息内容:', messageStr);
      }
    } catch (error) {
      console.error('❌ 发送切换地图RTC消息失败:', error);
      // 如果proto编码失败，回退到简单字符串格式
      const fallbackMessage = `cmd=change_map&msec=${Date.now()}&map=${mapName}`;
      console.log('🔄 回退到简单字符串格式:', fallbackMessage);
      this.engine.sendUserMessage("8888", fallbackMessage);
    }
  }

  // 发送热力图消息
  sendHeatMap(enable: boolean): void {
    if (!this.engine) {
      console.error('❌ [RTCMessageHandler:sendHeatMap] engine is null');
      return;
    }

    try {
      if(isRtcLog){
        console.log('🔥 准备发送热力图消息:', {
          enable: enable,
          messageType: 'oHeatMapReq'
        });
      }
      // 直接编码proto消息
      const message = proto.oHeatMapReq.create({
        enable: enable
      });
      
      const payload = proto.oHeatMapReq.encode(message).finish();
      const hexString = Array.from(payload).map((b: number) => b.toString(16).padStart(2, '0')).join('');
      if(isProtoLog){
        console.log('📤 发送proto消息:', {
          id: proto.eClientPID.HeatMapReq,
          payloadSize: payload.length,
          hexString: hexString
        });
      }
      
      // 使用正确的proto消息格式 (参考C#代码)
      const messageStr = `cmd=proto&id=${proto.eClientPID.HeatMapReq}&hex=${hexString}`;
      this.engine.sendUserMessage("8888", messageStr);
      if(isProtoLog){      
      console.log('✅ proto消息发送成功:', proto.eClientPID.HeatMapReq);
      console.log('📤 发送的消息内容:', messageStr);
      }
    } catch (error) {
      console.error('❌ 发送热力图RTC消息失败:', error);
      // 如果proto编码失败，回退到简单字符串格式
      const fallbackMessage = `cmd=heat_map&msec=${Date.now()}&enable=${enable}`;
      console.log('🔄 回退到简单字符串格式:', fallbackMessage);
      this.engine.sendUserMessage("8888", fallbackMessage);
    }
  }

  // 发送更换服装消息
  sendChangeGarment(garment1Id: number, garment2Id: number, garment3Id: number, garment1Size: number, garment2Size: number, garment3Size: number): void {
    if (!this.engine) {
      console.error('❌ [RTCMessageHandler:sendChangeGarment] engine is null');
      return;
    }

    try {
      console.log('👕 准备发送更换服装消息:', {
        garment1Id: garment1Id,
        garment2Id: garment2Id,
        garment3Id: garment3Id,
        garment1Size: garment1Size,
        garment2Size: garment2Size,
        garment3Size: garment3Size,
        messageType: 'oChangeGarmentReq'
      });
      
      // 直接编码proto消息
      const message = proto.oChangeGarmentReq.create({
        garment1Id: garment1Id,
        garment2Id: garment2Id,
        garment3Id: garment3Id,
        garment1Size: garment1Size,
        garment2Size: garment2Size,
        garment3Size: garment3Size
      });
      
      const payload = proto.oChangeGarmentReq.encode(message).finish();
      const hexString = Array.from(payload).map((b: number) => b.toString(16).padStart(2, '0')).join('');
      
      console.log('📤 发送更换服装proto消息:', {
        id: proto.eClientPID.ChangeGarmentReq,
        payloadSize: payload.length,
        hexString: hexString
      });
      
      // 使用正确的proto消息格式 (参考C#代码)
      const messageStr = `cmd=proto&id=${proto.eClientPID.ChangeGarmentReq}&hex=${hexString}`;
      this.engine.sendUserMessage("8888", messageStr);
      
      if(isProtoLog){      
      console.log('✅ 更换服装proto消息发送成功:', proto.eClientPID.ChangeGarmentReq);
      console.log('📤 发送的消息内容:', messageStr);
      }
    } catch (error) {
      console.error('❌ 发送更换服装RTC消息失败:', error);
    }
  }

  sendGetImagesInfo(videoId: string): void {
    if (!this.engine) {
      console.error('❌ [RTCMessageHandler:sendGetImagesInfo] engine is null');
      return;
    }

    try {
      console.log('👕 准备发送获取图片信息消息:', {
        videoId: videoId,
        messageType: 'oGetImagesInfoReq'
      });

      const message = proto.oGetImagesInfoReq.create({
        videoId: Long.fromString(videoId)
      });

      const payload = proto.oGetImagesInfoReq.encode(message).finish();
      const hexString = Array.from(payload).map((b: number) => b.toString(16).padStart(2, '0')).join('');

      console.log('📤 发送获取图片信息proto消息:', {
        id: proto.eClientPID.GetImagesInfoReq,
        payloadSize: payload.length,
        hexString: hexString
      });

      const messageStr = `cmd=proto&id=${proto.eClientPID.GetImagesInfoReq}&hex=${hexString}`;
      this.engine.sendUserMessage("8888", messageStr);
      if(isProtoLog){
      console.log('✅ 获取图片信息proto消息发送成功:', proto.eClientPID.GetImagesInfoReq);
      console.log('📤 发送的消息内容:', messageStr);
      }
    } catch (error) {
      console.error('❌ 发送获取图片信息RTC消息失败:', error);
    }
  }

  // 发送更换服装尺寸消息
  sendChangeGarmentSize(size: number): void {
    if (!this.engine) {
      console.error('❌ [RTCMessageHandler:sendChangeGarmentSize] engine is null');
      return;
    }

    try {
      console.log('👕 准备发送更换服装尺寸消息:', {
        size: size,
        messageType: 'oChangeGarmentSizeReq'
      });

      const message = proto.oChangeGarmentSizeReq.create({
        size: size
      });

      const payload = proto.oChangeGarmentSizeReq.encode(message).finish();
      const hexString = Array.from(payload).map((b: number) => b.toString(16).padStart(2, '0')).join('');

      console.log('📤 发送更换服装尺寸proto消息:', {
        id: proto.eClientPID.ChangeGarmentSizeReq,
        payloadSize: payload.length,
        hexString: hexString
      });

      const messageStr = `cmd=proto&id=${proto.eClientPID.ChangeGarmentSizeReq}&hex=${hexString}`;
      this.engine.sendUserMessage("8888", messageStr);
      if(isProtoLog){
      console.log('✅ 更换服装尺寸proto消息发送成功:', proto.eClientPID.ChangeGarmentSizeReq);
      console.log('📤 发送的消息内容:', messageStr);
      }
    } catch (error) {
      console.error('❌ 发送更换服装尺寸RTC消息失败:', error);
    }
  }
  

  // 发送触摸屏幕消息
  sendTouchScreen(touchType: proto.eTouchType, pos: { x: number, y: number, z: number }, timestamp: number): void {
    if (!this.engine) {
      console.error('❌ [RTCMessageHandler:sendTouchScreen] engine is null');
      return;
    }

    try {
      console.log('👆 准备发送触摸屏幕消息:', {
        touchType: touchType,
        pos: pos,
        timestamp: timestamp,
        messageType: 'oTouchScreenReq'
      });
      
      // 创建 oTouchScreenReq 消息
      const message = proto.oTouchScreenReq.create({
        touchType: touchType,
        pos: {
          x: pos.x,
          y: pos.y,
          z: pos.z
        },
        timestamp: timestamp
      });
      
      const payload = proto.oTouchScreenReq.encode(message).finish();
      const hexString = Array.from(payload).map((b: number) => b.toString(16).padStart(2, '0')).join('');
      
      console.log('📤 发送触摸屏幕proto消息:', {
        id: proto.eClientPID.TouchScreenReq,
        payloadSize: payload.length,
        hexString: hexString
      });
      
      // 使用正确的proto消息格式 (参考C#代码)
      const messageStr = `cmd=proto&id=${proto.eClientPID.TouchScreenReq}&hex=${hexString}`;
      this.engine.sendUserMessage("8888", messageStr);
      if(isProtoLog){      
      console.log('✅ 触摸屏幕proto消息发送成功:', proto.eClientPID.TouchScreenReq);
      console.log('📤 发送的消息内容:', messageStr);
      }
    } catch (error) {
      console.error('❌ 发送触摸屏幕RTC消息失败:', error);
    }
  }

  // 发送心跳消息
  sendHeartbeatMessage(): HeartBeatMessage {
    const message: HeartBeatMessage = {
      timestamp: Date.now()
    };
    
    console.log('💓 发送心跳消息:', message);
    return message;
  }

  // 处理心跳响应
  handleHeartbeatAck(data: HeartBeatAckMessage): void {
    const delay = Date.now() - data.timestamp;
    this.lastHeartbeatDelay = delay;
    console.log('💓 心跳响应延迟:', delay, 'ms');
  }

  // 开始心跳
  startHeartbeat(interval: number = 30000): void {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
    }
    
    this.heartbeatInterval = setInterval(() => {
      this.sendHeartbeat();
    }, interval);
    
    console.log('💓 开始心跳，间隔:', interval, 'ms');
  }

  // 停止心跳
  stopHeartbeat(): void {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
    console.log('💓 停止心跳');
  }

  // 获取最后心跳延迟
  getLastHeartbeatDelay(): number {
    return this.lastHeartbeatDelay;
  }

  // 销毁处理器
  destroy(): void {
    this.stopHeartbeat();
    this.messageCallbacks.clear();
    this.engine = null;
    console.log('🗑️ RTC消息处理器已销毁');
  }
}

// 导出单例实例
export const rtcMessageHandler = new RTCMessageHandler(); 