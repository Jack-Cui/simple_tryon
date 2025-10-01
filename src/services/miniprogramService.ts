// 小程序专用服务
// 提供简化的登录和视频播放功能

import { API_CONFIG, API_ENDPOINTS } from '../config/config';
import { tryonService } from './tryonService';
import { rtcVideoService } from './rtcVideoService';
import { RTC_CONFIG } from '../config/config';

export interface MiniprogramLoginConfig {
  phone: string;
  coCreationId: string;
  verifyCode: string; // 必传：小程序传入的验证码
}

export interface MiniprogramLoginResult {
  success: boolean;
  accessToken?: string;
  userId?: string;
  roomPrimaryId?: number;
  enterStageInfo?: string;
  error?: string;
}

export class MiniprogramService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_CONFIG.BASE_URL || 'https://dev-h5.ai1010.cn';
  }

  /**
   * 小程序一键登录
   * 自动完成登录、房间初始化、视频播放准备
   */
  async oneClickLogin(config: MiniprogramLoginConfig): Promise<MiniprogramLoginResult> {
    try {
      console.log('🚀 开始小程序一键登录流程...', config);

      // 使用小程序传入的验证码
      const verifyCode = config.verifyCode;

      // 步骤2: 登录
      console.log('🔐 步骤2: 执行登录...');
      const loginResult = await this.login(config.phone, verifyCode);
      if (!loginResult.success) {
        return { success: false, error: loginResult.error };
      }

      // 步骤3: 初始化房间信息
      console.log('🏠 步骤3: 初始化房间信息...');
      const roomResult = await this.initializeRoom({
        accessToken: loginResult.accessToken!,
        userId: loginResult.userId!,
        coCreationId: config.coCreationId,
        phone: config.phone
      });

      if (!roomResult.success) {
        return { success: false, error: roomResult.error };
      }

      // 步骤4: 构建进入舞台信息
      console.log('🎭 步骤4: 构建进入舞台信息...');
      const stageInfo = await this.buildEnterStageInfo(
        roomResult.roomInfo!,
        loginResult.accessToken!
      );

      return {
        success: true,
        accessToken: loginResult.accessToken,
        userId: loginResult.userId,
        roomPrimaryId: roomResult.roomPrimaryId,
        enterStageInfo: stageInfo
      };

    } catch (error) {
      console.error('❌ 小程序一键登录失败:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : '未知错误'
      };
    }
  }

  /**
   * 获取验证码
   */
  private async getVerifyCode(phone: string): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await fetch(`${this.baseURL}${API_ENDPOINTS.GET_VERIFY_CODE(phone)}`, {
        method: 'GET',
        headers: API_CONFIG.COMMON_HEADERS
      });

      if (response.ok) {
        console.log('✅ 验证码发送成功');
        return { success: true };
      } else {
        console.error('❌ 验证码发送失败:', response.status);
        return { success: false, error: `验证码发送失败: ${response.status}` };
      }
    } catch (error) {
      console.error('❌ 获取验证码错误:', error);
      return { success: false, error: '网络错误，请稍后重试' };
    }
  }

  /**
   * 登录
   */
  private async login(phone: string, code: string): Promise<{ success: boolean; accessToken?: string; userId?: string; error?: string }> {
    try {
      const response = await fetch(`${this.baseURL}${API_ENDPOINTS.LOGIN(phone, code)}`, {
        method: 'POST',
        headers: API_CONFIG.LOGIN_HEADERS
      });

      if (response.ok) {
        const data = await response.json();
        console.log('✅ 登录成功');
        return {
          success: true,
          accessToken: data.access_token,
          userId: data.user_id
        };
      } else {
        console.error('❌ 登录失败:', response.status);
        return { success: false, error: `登录失败: ${response.status}` };
      }
    } catch (error) {
      console.error('❌ 登录错误:', error);
      return { success: false, error: '网络错误，请稍后重试' };
    }
  }

  /**
   * 初始化房间信息
   */
  private async initializeRoom(config: {
    accessToken: string;
    userId: string;
    coCreationId: string;
    phone: string;
  }): Promise<{ success: boolean; roomInfo?: any; roomPrimaryId?: number; error?: string }> {
    try {
      // 获取房间信息
      const roomResponse = await fetch(`${this.baseURL}${API_ENDPOINTS.GET_SYSROOMSHARE('0')}`, {
        method: 'GET',
        headers: {
          ...API_CONFIG.COMMON_HEADERS,
          'Authorization': `Bearer ${config.accessToken}`
        }
      });

      if (!roomResponse.ok) {
        return { success: false, error: '获取房间信息失败' };
      }

      const roomInfo = await roomResponse.json();
      console.log('✅ 房间信息获取成功2');

      // 获取场景列表
      const sceneResponse = await fetch(`${this.baseURL}${API_ENDPOINTS.GET_SCENE_LIST()}`, {
        method: 'GET',
        headers: {
          ...API_CONFIG.COMMON_HEADERS,
          'Authorization': `Bearer ${config.accessToken}`
        }
      });

      if (!sceneResponse.ok) {
        return { success: false, error: '获取场景列表失败' };
      }

      const sceneList = await sceneResponse.json();
      console.log('✅ 场景列表获取成功');

      // 创建房间
      const createRoomResponse = await fetch(`${this.baseURL}${API_ENDPOINTS.CREATE_ROOM()}`, {
        method: 'POST',
        headers: {
          ...API_CONFIG.COMMON_HEADERS,
          'Authorization': `Bearer ${config.accessToken}`
        },
        body: JSON.stringify({
          sourceRoomId: roomInfo.data.roomId || 'default_room',
          shareId: config.coCreationId
        })
      });

      if (!createRoomResponse.ok) {
        return { success: false, error: '创建房间失败' };
      }

      const createRoomData = await createRoomResponse.json();
      const roomPrimaryId = createRoomData.data?.id;
      console.log('✅ 房间创建成功');

      // 加入房间
      const joinRoomResponse = await fetch(`${this.baseURL}${API_ENDPOINTS.JOIN_ROOM()}`, {
        method: 'POST',
        headers: {
          ...API_CONFIG.COMMON_HEADERS,
          'Authorization': `Bearer ${config.accessToken}`
        },
        body: JSON.stringify({
          id: roomPrimaryId,
          relationshipType: 1
        })
      });

      if (!joinRoomResponse.ok) {
        return { success: false, error: '加入房间失败' };
      }

      console.log('✅ 加入房间成功');

      return {
        success: true,
        roomInfo: roomInfo.data,
        roomPrimaryId: roomPrimaryId
      };

    } catch (error) {
      console.error('❌ 房间初始化失败:', error);
      return { success: false, error: '房间初始化失败' };
    }
  }

  /**
   * 构建进入舞台信息
   */
  private async buildEnterStageInfo(roomInfo: any, accessToken: string): Promise<string> {
    try {
      // 使用现有的roomAPI来构建进入舞台信息
      const { roomAPI } = await import('./api');
      const enterStageInfo = await roomAPI.buildEnterStageInfo(roomInfo, accessToken);
      console.log('✅ 进入舞台信息构建成功');
      return enterStageInfo;
    } catch (error) {
      console.error('❌ 构建进入舞台信息失败:', error);
      // 返回默认的进入舞台信息
      return JSON.stringify({
        AvatarId: 0,
        UserId: roomInfo.userId || '0',
        MapName: "Maps_jiaotang",
        Garments: {
          Garment1Id: "0",
          Garment1Size: "1",
          Garment2Id: "0",
          Garment2Size: "1",
          Garment3Id: "0",
          Garment3Size: "1"
        },
        Animation: null,
        Camera: true,
        Voice: false,
        isControl: true,
        startTime: 0,
        endTime: 0,
        Size: 4,
        // update by chao 2025.09.29 登台参数修改
        CustomModelUrl: "12345"
      });
    }
  }

  /**
   * 启动视频播放
   * 使用服务端配置的RTC参数
   */
  async startVideoPlayback(userId: string, roomId: string): Promise<{ success: boolean; error?: string }> {
    try {
      console.log('🎥 开始启动视频播放...', { userId, roomId });

      // 使用服务端配置的RTC参数
      await rtcVideoService.initialize({
        appId: RTC_CONFIG.APP_ID,
        appKey: RTC_CONFIG.APP_KEY,
        roomId: roomId,
        userId: userId
      });

      console.log('✅ 视频播放服务初始化成功');
      return { success: true };

    } catch (error) {
      console.error('❌ 视频播放启动失败:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : '视频播放启动失败'
      };
    }
  }

  /**
   * 完整的小程序流程：一键登录 + 视频播放
   */
  async completeFlow(loginConfig: MiniprogramLoginConfig): Promise<{
    success: boolean;
    loginResult?: MiniprogramLoginResult;
    videoResult?: { success: boolean; error?: string };
    error?: string;
  }> {
    try {
      console.log('🚀 开始完整小程序流程...');

      // 步骤1: 一键登录
      const loginResult = await this.oneClickLogin(loginConfig);
      if (!loginResult.success) {
        return { success: false, error: loginResult.error };
      }

      // 步骤2: 启动视频播放（使用登录结果中的信息）
      const videoResult = await this.startVideoPlayback(
        loginResult.userId!,
        loginResult.roomPrimaryId?.toString() || 'default_room'
      );
      if (!videoResult.success) {
        return {
          success: false,
          loginResult,
          videoResult,
          error: videoResult.error
        };
      }

      console.log('✅ 完整小程序流程执行成功');
      return {
        success: true,
        loginResult,
        videoResult
      };

    } catch (error) {
      console.error('❌ 完整小程序流程失败:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : '流程执行失败'
      };
    }
  }
}

// 导出单例实例
export const miniprogramService = new MiniprogramService();
