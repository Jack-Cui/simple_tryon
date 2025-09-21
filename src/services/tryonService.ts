import { authAPI, roomAPI } from './api';
import { scheduleService } from './scheduleService';
import { webSocketService, WebSocketConfig } from './websocketService';
import { RTCVideoService, RTCVideoConfig, rtcVideoService } from './rtcVideoService';
import { RTC_CONFIG } from '../config/config';
import { AccessToken, Privilege } from '../token/AccessToken';
import { updateRoomNameInCache, updateClothesListInCache, updateRoomIdInCache, updateScenesListInCache } from '../utils/loginCache';
import { ClothesItem, CreateSysRoomShareRequest } from '../types/api';

export interface TryonConfig {
  phone: string;
  coCreationId: string;
  userId: string;
  accessToken: string;
  rtcConfig?: RTCVideoConfig;
}

export class TryonService {
  private config: TryonConfig | null = null;
  private accessToken: string | null = null;
  private roomId: string | null = null;
  private roomName: string | null = null; // 添加房间名称属性
  private roomPrimaryId: number | null = null; // 添加房间主键ID属性
  private clothesList: ClothesItem[] = []; // 添加服饰列表属性
  private scenesList: { [key: string]: { name: string; code: string; bgm?: string } } = {}; // 添加场景列表映射属性
  private enterStageInfo: string | null = null;
  private rtcVideoService: RTCVideoService | null = null;
  private rtcStarted: boolean = false; // 防止重复启动RTC

  constructor() {
    // 监听登台成功事件
    this.setupEventListeners();
  }

  // 设置事件监听器
  private setupEventListeners(): void {
    window.addEventListener('stageSuccessRTCStart', ((event: CustomEvent) => {
      console.log('🎯 收到登台成功事件，准备启动RTC...');
      console.log('事件详情:', event.detail);
      
      if (!this.rtcStarted) {
        this.rtcStarted = true;
        this.startRTCVideo().catch(error => {
          console.error('RTC启动失败:', error);
          this.rtcStarted = false; // 重置标志，允许重试
        });
      } else {
        console.log('RTC已经启动，跳过重复启动');
      }
    }) as EventListener);
  }

  // 生成RTC Token
  private generateRTCToken(): string {
    if (!this.config || !this.roomPrimaryId) {
      throw new Error('缺少必要参数：config 或 roomPrimaryId');
    }

    const appId = RTC_CONFIG.APP_ID;
    const appKey = RTC_CONFIG.APP_KEY;
    const roomId = this.roomPrimaryId.toString();

    // update by chao 2025.09.09 09.19
    const userId = this.config.userId;
    // const userId = this.config.rtcConfig?.userId;
    if(userId===undefined){
      alert('缺少必要参数：userId');
      throw new Error('缺少必要参数：userId');
    }
    console.log('🔑 生成RTC Token...');
    console.log('  - appId:', appId);
    console.log('  - roomId:', roomId);
    console.log('  - userId111:', userId);
    console.log('  - roomPrimaryId:', this.roomPrimaryId);

    const token = new AccessToken(appId, appKey, roomId, userId);
    
    // 添加订阅流权限（永久有效）
    token.addPrivilege(Privilege.PrivSubscribeStream, 0);
    
    // 添加发布流权限（24小时有效）
    const expireTime = Math.floor(new Date().getTime() / 1000) + 24 * 3600;
    token.addPrivilege(Privilege.PrivPublishStream, expireTime);
    
    // 设置token过期时间（24小时）
    token.expireTime(expireTime);
    
    // 序列化生成token字符串
    const tokenString = token.serialize();
    console.log('✅ RTC Token 生成成功');
    
    return tokenString;
  }

  // 登录成功后初始化房间信息
  async initializeAfterLogin(config: TryonConfig): Promise<void> {
    this.config = config;
    this.accessToken = config.accessToken;
    
    try {
      console.log('🏠 开始初始化房间信息...');
      
      // 1. 获取房间信息（但不构建登台信息）
      console.log('步骤1: 获取房间信息');
      await this.getRoomInfoWithoutStageInfo();
      
      // 1.5. 获取场景列表
      console.log('步骤1.5: 获取场景列表');
      await this.getSceneList();
      
      // 1.6. 构建登台信息（在获取场景列表之后）
      console.log('步骤1.6: 构建登台信息');
      await this.buildStageInfo();
      
      // 2. 创建房间
      console.log('步骤2: 创建房间');
      this.roomPrimaryId = await this.createRoom();
      console.log('创建房间 roomPrimaryId:', this.roomPrimaryId);
      
      console.log('✅ 房间信息初始化完成');
      console.log('  - 房间ID:', this.roomId);
      console.log('  - 房间名称:', this.roomName);
      console.log('  - 房间主键ID:', this.roomPrimaryId);
      
      // 更新缓存中的房间名称
      if (this.roomName) {
        updateRoomNameInCache(this.roomName);
      }
      
    } catch (error) {
      console.error('❌ 房间信息初始化失败:', error);
      throw error;
    }
  }

  // 完整的试穿流程（简化版，跳过已执行的步骤）
  async startTryonFlow(config: TryonConfig): Promise<void> {
    // 如果没有预先初始化，则执行完整流程
    if (!this.roomId || !this.roomPrimaryId || !this.accessToken) {
      console.log('⚠️ 房间信息未初始化，执行完整流程...');
      return this.startFullTryonFlow(config);
    }
    
    // 更新配置（主要是RTC配置）
    this.config = config;
    
    // 确保RTC配置中的房间ID正确设置
    if (this.config.rtcConfig) {
      this.config.rtcConfig.roomId = this.roomPrimaryId.toString();
      console.log('🔄 已更新RTC配置中的房间ID:', this.roomId);
    }
    
    try {
      console.log('🚀 开始简化试穿流程...');
      console.log('  - 使用已获取的房间ID:', this.roomId);
      console.log('  - 使用已获取的房间主键ID:', this.roomPrimaryId);
      console.log('  - 使用已获取的房间名称:', this.roomName);
      
      // 3. 加入房间
      console.log('步骤3: 加入房间');
      await this.joinRoom(this.roomPrimaryId);
      
      // 4. 调度分配实例
      console.log('步骤4: 调度分配实例');
      const scheduleResult = await this.scheduleInstance();
      
      // 5. 连接WebSocket并执行登台流程
      console.log('步骤5: 连接WebSocket并执行登台流程');
      await this.connectAndPerformStage(scheduleResult);
      
      console.log('✅ 简化试穿流程完成！');
      
    } catch (error) {
      console.error('❌ 简化试穿流程失败:', error);
      
      // 检查是否是API响应错误，并处理登录过期
      this.handleApiError(error);
      
      throw error;
    }
  }

  // 完整的试穿流程（原始版本）
  private async startFullTryonFlow(config: TryonConfig): Promise<void> {
    this.config = config;
    this.accessToken = config.accessToken;
    
    try {
      console.log('开始完整试穿流程...');
      
      // 1. 获取房间信息（但不构建登台信息）
      console.log('步骤1: 获取房间信息');
      await this.getRoomInfoWithoutStageInfo();
      
      // 1.5. 获取场景列表
      console.log('步骤1.5: 获取场景列表');
      await this.getSceneList();
      
      // 1.6. 构建登台信息（在获取场景列表之后）
      console.log('步骤1.6: 构建登台信息');
      await this.buildStageInfo();
      
      // 2. 创建房间
      console.log('步骤2: 创建房间');
      const roomPrimaryId = await this.createRoom();
      console.log('创建房间111 roomPrimaryId:', roomPrimaryId);
      this.roomPrimaryId = roomPrimaryId;
      
      // 3. 加入房间
      console.log('步骤3: 加入房间');
      await this.joinRoom(roomPrimaryId);
      
      // 4. 调度分配实例
      console.log('步骤4: 调度分配实例');
      const scheduleResult = await this.scheduleInstance();
      
      // 5. 连接WebSocket并执行登台流程
      console.log('步骤5: 连接WebSocket并执行登台流程');
      await this.connectAndPerformStage(scheduleResult);
      
      console.log('试穿流程完成！');
      
    } catch (error) {
      console.error('试穿流程失败:', error);
      
      // 检查是否是API响应错误，并处理登录过期
      this.handleApiError(error);
      
      throw error;
    }
  }

  // 获取房间信息（不构建登台信息）
  private async getRoomInfoWithoutStageInfo(): Promise<any> {
    if (!this.config || !this.accessToken) {
      throw new Error('未配置参数或未提供accessToken');
    }

    const response = await roomAPI.getSysRoomShare(this.config.coCreationId, this.accessToken);
    console.log('房间信息响应:', response);
    console.log('房间信息响应数据:', response.data);

    if (!response.ok) {
      // 检查响应数据中是否包含code 424
      try {
        const responseData = JSON.parse(response.data);
        if (responseData.code === 424) {
          console.log('🚨 获取房间信息时检测到登录过期 (code: 424)');
          this.handleLoginExpired();
          throw new Error('登录已过期');
        }
      } catch (parseError) {
        console.log('解析响应数据失败:', parseError);
      }

      throw new Error(`获取房间信息失败: HTTP ${response.status}`);
    }

    const roomInfo = roomAPI.parseRoomInfoResponse(response);
    console.log('解析后的房间信息:', roomInfo);

    if (!roomInfo) {
      throw new Error('解析房间信息失败：响应数据为空');
    }

    if (!roomInfo.data) {
      throw new Error('解析房间信息失败：响应数据中没有data字段');
    }

    if (!roomInfo.data.roomId) {
      throw new Error('解析房间信息失败：响应数据中没有roomId字段');
    }

    this.roomId = roomInfo.data.roomId;
    console.log('房间ID:', this.roomId);

    // 更新RTC配置中的房间ID
    if (this.config.rtcConfig) {
      this.config.rtcConfig.roomId = this.roomId;
      console.log('🔄 已更新RTC配置中的房间ID:', this.roomId);
    }

    return roomInfo;
  }

  // 构建登台信息（在获取场景列表之后）
  private async buildStageInfo(): Promise<void> {
    if (!this.config || !this.accessToken) {
      throw new Error('未配置参数或未提供accessToken');
    }

    // 重新获取房间信息用于构建登台信息
    const response = await roomAPI.getSysRoomShare(this.config.coCreationId, this.accessToken);
    if (!response.ok) {
      throw new Error(`获取房间信息失败: HTTP ${response.status}`);
    }

    const roomInfo = roomAPI.parseRoomInfoResponse(response);
    if (!roomInfo) {
      throw new Error('解析房间信息失败');
    }

    // 构建登台信息
    this.enterStageInfo = await roomAPI.buildEnterStageInfo(roomInfo, this.accessToken);
    console.log('登台信息构建成功:', this.enterStageInfo);
  }

  // 获取场景列表
  private async getSceneList(): Promise<any> {
    if (!this.config || !this.accessToken) {
      throw new Error('未配置参数或未提供accessToken');
    }

    const response = await roomAPI.getSceneList(this.accessToken);
    // console.log('场景列表响应:', response);
    // console.log('场景列表响应数据:', response.data);

    if (!response.ok) {
      // 检查响应数据中是否包含code 424
      try {
        const responseData = JSON.parse(response.data);
        if (responseData.code === 424) {
          console.log('🚨 获取场景列表时检测到登录过期 (code: 424)');
          this.handleLoginExpired();
          throw new Error('登录已过期');
        }
      } catch (parseError) {
        console.log('解析响应数据失败:', parseError);
      }

      throw new Error(`获取场景列表失败: HTTP ${response.status}`);
    }

    try {
      const scenesData = JSON.parse(response.data);
      console.log('解析后的场景列表数据:', scenesData);

      if (!scenesData) {
        throw new Error('解析场景列表响应失败：响应数据为空');
      }

      if (!Array.isArray(scenesData)) {
        throw new Error('解析场景列表失败：响应数据不是数组格式');
      }

      // 构建场景列表映射：id => {name, code, bgm}
      const scenesMap: { [key: string]: { name: string; code: string; bgm?: string } } = {};
      scenesData.forEach((scene: any) => {
        if (scene.id && scene.name && scene.code) {
          scenesMap[scene.id] = {
            name: scene.name,
            code: scene.code,
            bgm: scene.bgm
          };
        }
      });

      this.scenesList = scenesMap;
      console.log('场景列表获取成功，数量:', Object.keys(this.scenesList).length);
      console.log('场景列表映射:', scenesMap);

      // 更新缓存中的场景列表
      updateScenesListInCache(scenesMap);

      // 触发场景列表更新事件
      this.triggerScenesListUpdate();

      return scenesData;
    } catch (parseError) {
      console.error('解析场景列表数据失败:', parseError);
      throw new Error('解析场景列表数据失败');
    }
  }

  // 创建房间
  private async createRoom(): Promise<number> {
    if (!this.config || !this.accessToken || !this.roomId || this.config.coCreationId === '') {
      throw new Error('未配置参数、未登录或未获取房间信息');
    }
    
    const response = await roomAPI.createRoom(this.roomId, this.config.coCreationId, this.accessToken);
    // console.log('创建房间响应:', response);
    // console.log('创建房间响应数据:', response.data);
    
    if (!response.ok) {
      // 检查响应数据中是否包含code 424
      try {
        const responseData = JSON.parse(response.data);
        if (responseData.code === 424) {
          console.log('🚨 创建房间时检测到登录过期 (code: 424)');
          this.handleLoginExpired();
          throw new Error('登录已过期');
        }
      } catch (parseError) {
        console.log('解析响应数据失败:', parseError);
      }
      
      throw new Error(`创建房间失败: HTTP ${response.status}`);
    }
    
    const createRoomData = roomAPI.parseCreateRoomResponse(response);
    console.log('解析后的创建房间数据:', createRoomData);
    
    if (!createRoomData) {
      throw new Error('解析创建房间响应失败：响应数据为空');
    }
    
    if (!createRoomData.data) {
      throw new Error('解析创建房间响应失败：响应数据中没有data字段');
    }
    
    if (!createRoomData.data.id) {
      throw new Error('解析创建房间响应失败：响应数据中没有id字段');
    } else {
      console.log('将房间ID添加到登录缓存:', createRoomData.data.id);
      updateRoomIdInCache(createRoomData.data.id.toString());
    }
    
    // 获取房间名称
    if (createRoomData.data.roomName) {
      this.roomName = createRoomData.data.roomName;
      console.log('房间名称:', this.roomName);
    } else {
      console.log('创建房间响应中没有 roomName 字段');
    }
    
    // 获取服饰列表
    if (createRoomData.data.clothesList && Array.isArray(createRoomData.data.clothesList)) {
      this.clothesList = createRoomData.data.clothesList;
      console.log('服饰分类数量:', this.clothesList.length);
      
      // 打印第一个分类的信息用于验证数据结构
      if (this.clothesList.length > 0) {
        const firstCategory = this.clothesList[0];
        console.log('第一个分类信息:', {
          classifyName: firstCategory.classifyName,
          classifyUrl: firstCategory.classifyUrl,
          clothesItemsCount: firstCategory.clothesItems?.length || 0
        });
        
        if (firstCategory.clothesItems && firstCategory.clothesItems.length > 0) {
          const firstClothes = firstCategory.clothesItems[0];
          console.log('第一个分类的第一个服装:', {
            clothesName: firstClothes.clothesName,
            clothesImageUrl: firstClothes.clothesImageUrl
          });
        }
      }
      
      // 更新缓存中的服饰列表
      updateClothesListInCache(this.clothesList);
      
      // 触发服饰列表更新事件
      this.triggerClothesListUpdate();
    } else {
      console.log('创建房间响应中没有 clothesList 字段或格式不正确');
    }
    
    // 获取场景列表
    if (createRoomData.data.scenesList && Array.isArray(createRoomData.data.scenesList)) {
      const scenesMap: { [key: string]: { name: string; code: string; bgm?: string } } = {};
      createRoomData.data.scenesList.forEach((scene: any) => {
        if (scene.id && scene.name && scene.code) {
          scenesMap[scene.id] = {
            name: scene.name,
            code: scene.code,
            bgm: scene.bgm
          };
        }
      });
      this.scenesList = scenesMap;
      console.log('场景列表数量:', Object.keys(this.scenesList).length);
      
      // 打印场景列表信息用于验证数据结构
      const sceneEntries = Object.entries(this.scenesList);
      if (sceneEntries.length > 0) {
        sceneEntries.forEach(([id, scene], index) => {
          console.log(`场景 ${index + 1}:`, {
            id,
            name: scene.name,
            code: scene.code,
            bgm: scene.bgm
          });
        });
      }
      
      // 触发场景列表更新事件
      this.triggerScenesListUpdate();
    } else {
      console.log('创建房间响应中没有 scenesList 字段或格式不正确');
    }
    
    console.log('房间创建成功，primary room key:', createRoomData.data.id);
    return createRoomData.data.id;
  }

  // 加入房间
  private async joinRoom(roomPrimaryId: number): Promise<void> {
    if (!this.accessToken) {
      throw new Error('未登录');
    }
    
    const response = await roomAPI.joinRoom(roomPrimaryId, this.accessToken, 1);
    console.log('加入房间响应:', response);
    console.log('加入房间响应数据:', response.data);
    
    if (!response.ok) {
      // 检查响应数据中是否包含code 424
      try {
        const responseData = JSON.parse(response.data);
        if (responseData.code === 424) {
          console.log('🚨 加入房间时检测到登录过期 (code: 424)');
          this.handleLoginExpired();
          throw new Error('登录已过期');
        }
      } catch (parseError) {
        console.log('解析响应数据失败:', parseError);
      }
      
      throw new Error(`加入房间失败: HTTP ${response.status}`);
    }
    
    const joinRoomData = roomAPI.parseJoinRoomResponse(response);
    console.log('解析后的加入房间数据:', joinRoomData);
    
    if (!joinRoomData) {
      throw new Error('解析加入房间响应失败：响应数据为空');
    }
    
    console.log('成功加入房间:', joinRoomData);
  }

  // 调度分配实例
  private async scheduleInstance(): Promise<any> {
    if (!this.config || !this.roomPrimaryId) {
      throw new Error('未配置参数或未获取房间信息');
    }
    
    const scheduleRequest = {
      user_id: this.config.userId,
      room_id: this.roomPrimaryId.toString()
    };
    
    const scheduleResult = await scheduleService.schedule(scheduleRequest);
    console.log('调度结果:', scheduleResult);
    
    return scheduleResult;
  }

  // 连接WebSocket并执行登台流程
  private async connectAndPerformStage(scheduleResult: any): Promise<void> {
    if (!this.config || !this.accessToken || !this.roomId || !this.enterStageInfo) {
      throw new Error('缺少必要参数');
    }
    
    const wsConfig: WebSocketConfig = {
      url: `wss://${scheduleResult.data.inst_acc_info.ws_url}`,
      uid: this.config.userId,
      accessToken: this.accessToken,
      insToken: scheduleResult.data.inst_acc_info.token,
      // roomId: this.roomId,
      roomId: this.roomPrimaryId?.toString() || '',
      enterStageInfo: this.enterStageInfo,
      rtcConfig: {
        appId: RTC_CONFIG.APP_ID,
        appKey: RTC_CONFIG.APP_KEY,
        roomId: this.roomPrimaryId?.toString() || '',
        //update by chao 2025.09.09 09.19
        userId: this.config.userId,
        // userId: this.config.rtcConfig?.userId || '',
        token: this.generateRTCToken() // 动态生成token
      }
    };
    
    console.log('WebSocket配置111:', wsConfig);
    
    // 连接WebSocket
    await webSocketService.connect(wsConfig);
    
    // 执行完整的登台流程
    await webSocketService.performFullStageFlow();
    
    // RTC会在登台成功后通过事件自动启动
    console.log('⏳ 等待登台成功后自动启动RTC...');
  }

  // 启动RTC视频服务
  private async startRTCVideo(): Promise<void> {
    console.log('🎥 检查RTC配置...');
    console.log('  - config:', this.config);
    console.log('  - rtcConfig:', this.config?.rtcConfig);
    
    if (!this.config?.rtcConfig) {
      console.log('❌ 未配置RTC参数，跳过RTC视频接入');
      return;
    }

    try {
      console.log('🎥 开始接入RTC视频服务...');
      console.log('📋 RTC配置参数:');
      console.log('  - appId:', this.config.rtcConfig.appId);
      console.log('  - appKey:', this.config.rtcConfig.appKey);
      console.log('  - roomId:', this.config.rtcConfig.roomId);
      console.log('  - userId:', this.config.rtcConfig.userId);
      
      // 使用全局RTC视频服务实例
      this.rtcVideoService = rtcVideoService;
      
      // 设置事件处理器
      this.rtcVideoService!.setEventHandlers({
        onUserJoin: (userId: string) => {
          console.log('👤 RTC用户加入:', userId);
        },
        onUserLeave: (userId: string) => {
          console.log('👤 RTC用户离开:', userId);
        },
        onUserPublishStream: (userId: string, hasVideo: boolean, hasAudio: boolean) => {
          console.log('📹 RTC用户发布流:', userId, '视频:', hasVideo, '音频:', hasAudio);
          this.handleRemoteStream(userId, hasVideo, hasAudio);
        },
        onUserUnpublishStream: (userId: string) => {
          console.log('📹 RTC用户取消发布流:', userId);
        },
        onError: (error: any) => {
          console.error('❌ RTC错误:', error);
        }
      });
      
      console.log('🔧 开始初始化RTC服务...');
      
      // 确保RTC配置中的房间ID是最新的
      if (this.roomPrimaryId && this.config.rtcConfig) {
        this.config.rtcConfig.roomId = this.roomPrimaryId.toString();
        console.log('🔄 在startRTCVideo中更新RTC配置房间ID:', this.roomPrimaryId);
      }
      
      // 初始化RTC服务
      await this.rtcVideoService!.initialize(this.config.rtcConfig);
      
      // 生成RTC Token
      const rtcToken = this.generateRTCToken();
      console.log('🔑 生成RTC Token成功');
      
      // 加入RTC房间
      console.log('🚪 开始加入RTC房间...');
      await this.rtcVideoService!.joinRoom(rtcToken);
      
      console.log('✅ RTC视频服务接入成功！');
      
    } catch (error) {
      console.error('❌ RTC视频服务接入失败:', error);
      console.error('错误详情:', error);
      // 不抛出错误，避免影响主流程
    }
  }

  // 处理远程视频流
  private async handleRemoteStream(userId: string, hasVideo: boolean, hasAudio: boolean): Promise<void> {
    if (!this.rtcVideoService || !hasVideo) {
      return;
    }

    // 过滤掉userid=0的流
    if (userId === '0') {
      console.log(`⚠️ 跳过userid=0的视频流: ${userId}`);
      return;
    }

    console.log(`✅ 处理视频流: ${userId}`);

    try {
      const domId = `remoteStream_${userId}`;
      
      // 触发UI更新，让首页先创建DOM元素
      this.triggerVideoPlayerUpdate(userId, domId);
      
      // 使用更智能的等待策略，检查DOM元素是否准备好
      const waitForDOMAndSetPlayer = async (attempt: number = 1) => {
        const domElement = document.getElementById(domId);
        if (domElement) {
          console.log(`✅ DOM元素已准备好: ${domId}, 开始设置播放器`);
          try {
            // 设置远程视频播放器
            if (this.rtcVideoService) {
              await this.rtcVideoService.setRemoteVideoPlayer(userId, domId);
              console.log('🎬 远程视频播放器设置成功:', userId, domId);
            }
          } catch (error) {
            console.error('❌ 设置远程视频播放器失败:', error);
          }
        } else if (attempt < 20) {
          // 如果DOM元素还没准备好，继续等待
          console.log(`⏳ DOM元素未准备好，第${attempt}次重试: ${domId}`);
          setTimeout(() => waitForDOMAndSetPlayer(attempt + 1), 200); // 每200ms检查一次
        } else {
          console.error(`❌ DOM元素创建超时: ${domId}`);
        }
      };
      
      // 立即开始检查
      waitForDOMAndSetPlayer();
      
    } catch (error) {
      console.error('❌ 处理远程视频流失败:', error);
    }
  }

  // 触发视频播放器UI更新
  private triggerVideoPlayerUpdate(userId: string, domId: string): void {
    // 创建自定义事件，通知UI组件更新视频播放器
    const event = new CustomEvent('rtcVideoStreamUpdate', {
      detail: {
        userId,
        domId,
        type: 'add'
      }
    });
    
    window.dispatchEvent(event);
    console.log('📡 发送视频播放器更新事件:', userId, domId);
  }

  // 触发服饰列表更新事件
  private triggerClothesListUpdate(): void {
    // 创建自定义事件，通知UI组件更新服饰列表
    const event = new CustomEvent('clothesListUpdate', {
      detail: {
        clothesList: this.clothesList
      }
    });
    
    window.dispatchEvent(event);
    console.log('📡 发送服饰列表更新事件，服饰分类数量:', this.clothesList.length);
  }

  // 触发场景列表更新事件
  private triggerScenesListUpdate(): void {
    // 创建自定义事件，通知UI组件更新场景列表
    const event = new CustomEvent('scenesListUpdate', {
      detail: {
        scenesList: this.scenesList
      }
    });
    
    window.dispatchEvent(event);
    console.log('�� 发送场景列表更新事件，场景数量:', Object.keys(this.scenesList).length);
  }

  getRoomPrimaryId(): number {
    return this.roomPrimaryId || 0;
  }

  // 获取房间名称
  getRoomName(): string | null {
    return this.roomName;
  }

  // 获取服饰列表
  getClothesList(): ClothesItem[] {
    return this.clothesList;
  }

  // 获取场景列表
  getScenesList(): { [key: string]: { name: string; code: string; bgm?: string } } {
    return this.scenesList;
  }

  // 创建分享
  async createShare(): Promise<any> {
    if (!this.config || !this.accessToken || !this.roomPrimaryId) {
      throw new Error('缺少必要参数：config、accessToken 或 roomPrimaryId');
    }

    try {
      console.log('开始创建分享...');
      console.log('  - roomPrimaryId:', this.roomPrimaryId);
      console.log('  - coCreationId:', this.config.coCreationId);

      // 1. 获取房间信息以获取必要的数据
      const roomResponse = await roomAPI.getSysRoomShare(this.config.coCreationId, this.accessToken);
      if (!roomResponse.ok || !roomResponse.data) {
        throw new Error('获取房间信息失败');
      }

      const roomInfo = roomAPI.parseRoomInfoResponse(roomResponse);
      if (!roomInfo || !roomInfo.data) {
        throw new Error('解析房间信息失败');
      }

      console.log('✅ 房间信息获取成功:', roomInfo.data);

      // 2. 构建分享数据
      const shareData: CreateSysRoomShareRequest = {
        roomId: this.roomPrimaryId.toString(),
        userId: roomInfo.data.userId || this.config.userId,
        extra1: roomInfo.data.extra1 || '新视频',
        extra2: roomInfo.data.extra2 || '',
        clothId: roomInfo.data.clothId || '',
        actionId: roomInfo.data.actionId || '',
        scenarioId: roomInfo.data.scenarioId || '',
        user2Id: null,
        cloth2Id: null,
        action2Id: null,
        startT: null,
        endT: null,
        state: '',
        startT2: null,
        endT2: null,
        extra3: null,
        createTime: null,
        createBy: '',
        updateTime: null,
        updateBy: '',
        tenantId: null
      };

      console.log('📋 构建的分享数据:', shareData);

      // 3. 调用创建分享接口
      const response = await roomAPI.createSysRoomShare(shareData, this.accessToken);
      console.log('📤 创建分享响应:', response);

      if (!response.ok) {
        // 检查响应数据中是否包含code 424
        try {
          const responseData = JSON.parse(response.data);
          if (responseData.code === 424) {
            console.log('🚨 创建分享时检测到登录过期 (code: 424)');
            this.handleLoginExpired();
            throw new Error('登录已过期');
          }
        } catch (parseError) {
          console.log('解析响应数据失败:', parseError);
        }

        throw new Error(`创建分享失败: HTTP ${response.status}`);
      }

      const createShareData = roomAPI.parseCreateSysRoomShareResponse(response);
      console.log('✅ 创建分享成功:', createShareData);

      return createShareData;

    } catch (error) {
      console.error('❌ 创建分享失败:', error);
      throw error;
    }
  }

  // 断开连接
  disconnect(): void {
    webSocketService.disconnect();
    
    // 清理RTC视频服务
    if (this.rtcVideoService) {
      this.rtcVideoService.leaveRoom().catch(error => {
        console.error('清理RTC服务失败:', error);
      });
      this.rtcVideoService = null;
    }
    
    // 重置RTC状态
    this.rtcStarted = false;
    
    // 清理房间相关数据
    this.roomName = null;
    this.roomId = null;
    this.roomPrimaryId = null;
    this.enterStageInfo = null;
    this.clothesList = []; // 清理服饰列表
    this.scenesList = {}; // 清理场景列表
  }

  // 获取连接状态
  getConnectionStatus(): boolean {
    return webSocketService.getConnectionStatus();
  }

  // 处理API错误，特别是登录过期的情况
  private handleApiError(error: any): void {
    console.log('🔍 检查API错误类型:', error);
    
    // 检查错误是否包含响应数据
    if (error && typeof error === 'object') {
      // 检查是否有响应数据
      let responseData: any = null;
      
      // 尝试从错误对象中提取响应数据
      if (error.response) {
        responseData = error.response;
      } else if (error.data) {
        responseData = error.data;
      } else if (error.message && error.message.includes('HTTP')) {
        // 如果是HTTP错误，尝试解析响应
        console.log('检测到HTTP错误，尝试解析响应数据');
        return;
      }
      
      // 如果找到了响应数据，检查code字段
      if (responseData) {
        try {
          // 如果responseData是字符串，尝试解析为JSON
          let parsedData: any;
          if (typeof responseData === 'string') {
            parsedData = JSON.parse(responseData);
          } else {
            parsedData = responseData;
          }
          
          console.log('🔍 解析的响应数据:', parsedData);
          
          // 检查code字段
          if (parsedData && typeof parsedData.code === 'number') {
            console.log(`🔍 检测到响应code: ${parsedData.code}`);
            
            if (parsedData.code === 424) {
              console.log('🚨 检测到登录过期 (code: 424)');
              this.handleLoginExpired();
              return;
            }
          }
        } catch (parseError) {
          console.log('解析响应数据失败:', parseError);
        }
      }
    }
    
    // 检查错误消息中是否包含相关信息
    if (error && error.message) {
      const errorMessage = error.message.toLowerCase();
      if (errorMessage.includes('424') || errorMessage.includes('登录过期') || errorMessage.includes('token expired')) {
        console.log('🚨 从错误消息中检测到登录过期');
        this.handleLoginExpired();
        return;
      }
    }
  }

  // 处理登录过期
  private handleLoginExpired(): void {
    console.log('🚨 处理登录过期...');
    
    // 显示登录过期提示
    alert('登录已过期，请重新登录');
    
    // 清理当前状态
    this.disconnect();
    
    // 跳转到登录页面
    window.location.href = '/login';
  }
}

// 导出单例实例
export const tryonService = new TryonService(); 