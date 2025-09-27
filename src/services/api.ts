import { API_CONFIG, API_ENDPOINTS } from '../config/api';
import { v4 as uuidv4 } from 'uuid';
import JSONbig from 'json-bigint';
import wx from 'weixin-js-sdk'; 

import { 
  ApiResponse, 
  LoginResponse, 
  VerifyCodeResponse, 
  RoomInfoResponse, 
  ClotheDetailResponse,
  CreateRoomResponse, 
  JoinRoomResponse, 
  EnterStageInfo,
  CreateSysRoomShareRequest,
  CreateSysRoomShareResponse
} from '../types/api';
import { getLoginCache, updateDefaultSceneNameInCache, getClothesDetailFromCache, updateClothesDetailsInCache } from '../utils/loginCache';

const Long = require('long');
const crypto = require('crypto');


// 通用HTTP请求方法
class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_CONFIG.BASE_URL;
  }

  // GET请求
  async get(endpoint: string, headers?: Record<string, string>): Promise<ApiResponse> {
    const url = this.baseURL + endpoint;
    const requestHeaders = {
      ...API_CONFIG.COMMON_HEADERS,
      ...headers
    };

    console.log('发起GET请求:', url);
    console.log('请求头:', requestHeaders);

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: requestHeaders,
        mode: 'cors', // 明确指定CORS模式
        credentials: 'omit' // 不发送cookies
      });

      // console.log('GET请求状态码:', response.status);
      // console.log('GET请求状态文本:', response.statusText);
      // console.log('GET请求响应头:', Object.fromEntries(response.headers.entries()));
      
      const responseText = await response.text();
      // console.log('GET请求响应内容:', responseText);

      return {
        status: response.status,
        data: responseText,
        ok: response.ok
      };
    } catch (error) {
      console.error('GET请求详细错误:', error);
      if (error instanceof Error) {
        console.error('错误类型:', error.constructor.name);
        console.error('错误消息:', error.message);
        if (error instanceof TypeError) {
          console.error('这可能是CORS错误或网络连接问题');
        }
      }
      throw error;
    }
  }

  // DELETE请求
  async delete(endpoint: string, headers?: Record<string, string>): Promise<ApiResponse> {
    const url = this.baseURL + endpoint;
    const requestHeaders = {
      ...API_CONFIG.COMMON_HEADERS,
      ...headers
    };

    console.log('发起DELETE请求:', url);
    console.log('请求头:', requestHeaders);

    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: requestHeaders,
        mode: 'cors', // 明确指定CORS模式
        credentials: 'omit' // 不发送cookies
      });

      console.log('DELETE请求状态码:', response.status);
      console.log('DELETE请求状态文本:', response.statusText);
      console.log('DELETE请求响应头:', Object.fromEntries(response.headers.entries()));
      
      const responseText = await response.text();
      // console.log('DELETE请求响应内容:', responseText);

      return {
        status: response.status,
        data: responseText,
        ok: response.ok
      };
    } catch (error) {
      console.error('DELETE请求详细错误:', error);
      if (error instanceof Error) {
        console.error('错误类型:', error.constructor.name);
        console.error('错误消息:', error.message);
        if (error instanceof TypeError) {
          console.error('这可能是CORS错误或网络连接问题');
        }
      }
      throw error;
    }
  }

  // POST请求
  async post(endpoint: string, data?: any, headers?: Record<string, string>): Promise<ApiResponse> {
    const url = this.baseURL + endpoint;
    const requestHeaders = {
      ...API_CONFIG.COMMON_HEADERS,
      ...headers
    };

    console.log('发起POST请求:', url);
    console.log('请求头:', requestHeaders);
    console.log('请求数据:', data);

    try {
      const fetchOptions: RequestInit = {
        method: 'POST',
        headers: requestHeaders,
        mode: 'cors', // 明确指定CORS模式
        credentials: 'omit' // 不发送cookies
      };

      // 只有当data存在且不为undefined时才设置body
      if (data !== undefined) {
        fetchOptions.body = data;
      }

      const response = await fetch(url, fetchOptions);

      console.log('POST请求状态码:', response.status);
      console.log('POST请求状态文本:', response.statusText);
      console.log('POST请求响应头:', Object.fromEntries(response.headers.entries()));
      
      const responseText = await response.text();
      // console.log('POST请求响应内容:', responseText);

      return {
        status: response.status,
        data: responseText,
        ok: response.ok
      };
    } catch (error) {
      console.error('POST请求详细错误:', error);
      if (error instanceof Error) {
        console.error('错误类型:', error.constructor.name);
        console.error('错误消息:', error.message);
        if (error instanceof TypeError) {
          console.error('这可能是CORS错误或网络连接问题');
        }
      }
      throw error;
    }
  }
}

// 创建API服务实例
export const apiService = new ApiService();

// 登录相关API方法
export const authAPI = {
  // 获取验证码
  async getVerifyCode(phone: string): Promise<ApiResponse> {
    console.log('开始获取验证码，手机号:', phone);
    const endpoint = API_ENDPOINTS.GET_VERIFY_CODE(phone);
    console.log('验证码请求端点:', endpoint);
    return await apiService.get(endpoint);
  },

  // 登录
  async login(user_id: string, tenant_id: string): Promise<ApiResponse> {
    console.log('开始登录，手机号:', user_id, 'tenant_id:', tenant_id);
    const endpoint = API_ENDPOINTS.LOGIN(user_id, tenant_id);
    console.log('自己登录请求端点:', endpoint);
    return await apiService.post(endpoint, undefined, API_CONFIG.LOGIN_HEADERS);
  },

  async shareLogin(user_id: string, tenant_id: string, register_time: string, inviteUserId: string): Promise<ApiResponse> {
    console.log('开始分享登录，手机号:', user_id, 'tenant_id:', tenant_id, 'register_time:', register_time);
    const endpoint = API_ENDPOINTS.SHARE_LOGIN(user_id, tenant_id, register_time, inviteUserId);
    console.log('分享登录请求端点:', endpoint);
    return await apiService.post(endpoint, undefined, API_CONFIG.LOGIN_HEADERS);
  },

  // 解析登录响应
  parseLoginResponse(response: ApiResponse): LoginResponse | null {
    if (!response.ok || !response.data) {
      return null;
    }

    try {
      return JSON.parse(response.data);
    } catch (error) {
      console.error('解析登录响应失败:', error);
      return null;
    }
  },

  // 解析验证码响应
  parseVerifyCodeResponse(response: ApiResponse): VerifyCodeResponse | null {
    if (!response.ok || !response.data) {
      return null;
    }

    try {
      // 简单判断返回内容是否为JSON
      if (typeof response.data === 'string' && response.data.trim().startsWith('<')) {
        throw new Error('返回内容不是JSON，可能是HTML页面');
      }
      return JSON.parse(response.data);
    } catch (error: any) {
      console.error('解析验证码响应失败:', error);
      return null;
    }
  },

   // 检查登录状态
   async checkLogin(access_token: string): Promise<ApiResponse> {
    console.log('开始检查登录状态');
    const endpoint = API_ENDPOINTS.CHECK_LOGIN(access_token);
    const headers = {
      // 'Authorization': `Bearer ${access_token}`
      "Authorization": "Basic cGlnOnBpZw=="
    };
    return await apiService.get(endpoint, headers);
  },

  // 解析检查登录状态响应
  parseCheckLoginResponse(response: ApiResponse): { status: number; message?: string } | null {
    if (!response.data) {
      return null;
    }

    try {
      return {
        status: response.status,
        ...(response.data && { message: JSON.parse(response.data).message })
      };
    } catch (error) {
      console.error('解析检查登录状态响应失败:', error);
      return {
        status: response.status
      };
    }
  },


  generateHMAC2(public_KEY: string, data: string) {
    const HMAC_SHA256 = 'sha256';

    try {
        return crypto
            .createHmac(HMAC_SHA256, Buffer.from(public_KEY, 'utf8'))
            .update(data, 'utf8')
            .digest('base64');
    } catch (e: any) {
        console.error('HMAC生成失败:', e);
        return null;
    }
  },

  generateHMAC(public_KEY: string, data: string) {
    try {
        // 计算 HMAC-SHA256 并返回 Base64 编码结果
        const keyBytes = Buffer.from(public_KEY, 'utf8');
        const messageBytes = Buffer.from(data, 'utf8');
        const hmac = crypto.createHmac('sha256', keyBytes);
        hmac.update(messageBytes);
        return hmac.digest('base64');
    } catch (e: any) {
        console.error('HMAC生成失败:', e);
        return null;
    }
  },

  // 余额扣费请求函数
  async getBalanceDeductionRequest(
    balanceRaw: any,
    accessToken: string,
    userId: string
  ): Promise<ApiResponse> {
    console.log('开始余额扣费请求');
    
    const url = `${API_CONFIG.BASE_URL}/admin/balance/deduction`;
    
    // 构建消息字符串：data|timestamp|userId
    const timestamp = Date.now().toString();
    const requestId = uuidv4().replace(/-/g, '');
    
    const data = JSONbig().stringify(balanceRaw).replace(/\s+/g, '');
    const sMessage = `${data}|${timestamp}|${userId}`;
    
    console.log('s_message:', sMessage);
    
    // 使用固定的密钥生成签名
    const KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwxAKb+pGIdtg189rgCtLGClLVTcWkAga0UTiZ8cfDzNDBF3eZBX96iXb5godZLHaAg38OZbtqclZfWBu9nBEpaV+nZudJ5z42RFpJlK6p9ACetR+/rX5Xfol9k0DayI9lP42uyK8h+wv/LPcA5PT/eE4aSMwn2g/xrVuLPGpCXM5Ca3de8s6Rj5JdW2GccLsi3GueLet2N4+a88cvpNMr4poVu135cb+SyxEbt3/4z0HhTFM0QF+GLaw+3faT8A4peiiot4io1UCUyW8fRXIAiHv5J0s8Y3bJW311BZFs/jnAodiIvQKzh3pEMKMyo0kw0T7HF5G4oSe+6Dvn9AV6QIDAQAB";
    const signature = this.generateHMAC(KEY, sMessage);
    
    if (!signature) {
      throw new Error('生成签名失败');
    }
    
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
      'X-timestamp': timestamp,
      'X-requestId': requestId,
      'X-signature': signature,
    };
    
    console.log('请求URL:', url);
    console.log('请求头:', headers);
    console.log('请求数据:', data);
    
    return await apiService.post(url, data, headers);
  }
};

// 房间相关API方法
export const roomAPI = {
  // 获取房间信息
  async getRoomInfoByRoomId(room_id: string, access_token: string): Promise<ApiResponse> {
    console.log('开始获取房间信息，房间ID:', room_id);
    const endpoint = API_ENDPOINTS.GET_ROOM_INFO_BY_ROOM_ID(room_id);
    const headers = {
      'Authorization': `Bearer ${access_token}`
    };
    return await apiService.get(endpoint, headers);
  },

  // 获取房间信息
  async getSysRoomShare(co_creation_id: string, access_token: string): Promise<ApiResponse> {
    console.log('开始获取房间信息，房间ID:', co_creation_id);
    const endpoint = API_ENDPOINTS.GET_SYSROOMSHARE(co_creation_id);
    const headers = {
      'Authorization': `Bearer ${access_token}`
    };
    return await apiService.get(endpoint, headers);
  },

  // 获取衣服尺寸
  async getClotheSize(clothe_id: string, access_token: string): Promise<ApiResponse> {
    console.log('开始获取衣服尺寸，衣服ID:', clothe_id);
    const endpoint = API_ENDPOINTS.GET_CLOTHE_SIZE(clothe_id);
    const headers = {
      'Authorization': `Bearer ${access_token}`
    };
    return await apiService.get(endpoint, headers);
  },

  // 获取衣服详情
  async getClotheDetail(clothe_id: string, access_token: string): Promise<ApiResponse> {
    console.log('开始获取衣服详情，衣服ID:', clothe_id);
    const endpoint = API_ENDPOINTS.GET_CLOTHE_DETAIL(clothe_id);
    const headers = {
      'Authorization': `Bearer ${access_token}`
    };
    return await apiService.get(endpoint, headers);
  },

  // 创建房间
  async createRoom(room_id: string, access_token: string): Promise<ApiResponse> {
    console.log('开始创建房间，房间ID:', room_id);
    const endpoint = API_ENDPOINTS.CREATE_ROOM();
    const headers = {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    };
    const data = JSON.stringify({
      sourceRoomId: room_id,
      // shareId: co_creation_id
    });
    return await apiService.post(endpoint, data, headers);
  },

  // 加入房间
  async joinRoom(room_primary_id: number, access_token: string, relationship_type: number = 1): Promise<ApiResponse> {
    console.log('开始加入房间，房间主键ID:', room_primary_id, '关系类型:', relationship_type);
    const endpoint = API_ENDPOINTS.JOIN_ROOM();
    const headers = {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    };
    const data = JSON.stringify({
      id: room_primary_id,
      relationshipType: relationship_type
    });
    return await apiService.post(endpoint, data, headers);
  },

  // 获取场景列表
  async getSceneList(access_token: string): Promise<ApiResponse> {
    console.log('开始获取场景列表');
    const endpoint = API_ENDPOINTS.GET_SCENE_LIST();
    const headers = {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    };
    return await apiService.get(endpoint, headers);
  },

  // 构建进入舞台信息
  async buildEnterStageInfo(room_info: RoomInfoResponse, access_token: string): Promise<string> {
    console.log('🚀 开始构建进入舞台信息');
    console.log('🔍 房间信息:', room_info);
    console.log('🔍 access_token:', access_token ? '存在' : '不存在');
    if (!room_info) {
      console.warn('⚠️ 房间信息为空');
      return '';
    }
    if (!room_info.data) {
      console.warn('⚠️ 房间信息中没有data');
      return '';
    }
    if (room_info.data.clothesList.length === 0) {
      console.warn('⚠️ 房间信息中没有衣服列表');
      return '';
    }
    if (room_info.data.clothesList[0].clothesItems.length === 0) {
      console.warn('⚠️ 房间信息中没有衣服列表');
      return '';
    }
    const suitIds = room_info.data.clothesList[0].clothesItems[0].suitIds;
    if (!suitIds) {
      console.warn('⚠️ 房间信息中没有衣服ID');
      return '';
    }
    const room_info_data = room_info.data;
    console.log('🔍 房间数据:', room_info_data);
    console.log('🔍 suitIds:', suitIds);
    console.log('🔍 userId:', room_info_data.userId);
    console.log('🔍 scenarioId:', room_info_data.scenarioId);

    // 安全检查：确保clothId存在
    // if (!room_info_data.clothId) {
    //   console.warn('⚠️ 房间信息中没有clothId，使用空的服装列表');
    //   const enter_stage_info: EnterStageInfo = {
    //     AvatarId: 0,
    //     UserId: String(room_info_data.userId || 0),
    //     MapName: "Maps_jiaotang",
    //     Garments: {
    //       Garment1Id: "0",
    //       Garment1Size: "1",
    //       Garment2Id: "0",
    //       Garment2Size: "1",
    //       Garment3Id: "0",
    //       Garment3Size: "1"
    //     },
    //     Animation: null,
    //     Camera: true,
    //     Voice: false,
    //     isControl: true,
    //     startTime: 0,
    //     endTime: 0,
    //     Size: 4,
    //     CustomModelUrl: "12345"
    //   };
    //   console.log('进入舞台信息（无服装）:', enter_stage_info);
    //   return JSON.stringify(enter_stage_info);
    // }

    const clothe_ids = suitIds.split(',');
    const garments: any = {};
    
    // 用于存储处理后的服装信息
    let clothesItemInfoList: any[] = [];
    let isClothesSuit = false;
    
    for (let i = 0; i < clothe_ids.length; i++) {
      const clothe_id = clothe_ids[i];
      console.log(`👕 处理衣服ID [${i + 1}/${clothe_ids.length}]: ${clothe_id}`);
      console.log(`🔍 当前clothe_ids数组:`, clothe_ids);
      console.log(`🔍 当前处理的clothe_id:`, clothe_id);
      
      if (!clothe_id || clothe_id === '' || clothe_id === '0') {
        console.log(`⚠️ 跳过无效的衣服ID: ${clothe_id}`);
        continue;
      }
      
      // 判断 clothe_id 是否大于0
      const clotheIdNum = Long.fromString(clothe_id);
      if (clotheIdNum.toNumber() <= 0) {
        console.log(`⚠️ 跳过无效的衣服ID: ${clothe_id}`);
        continue;
      }
      
      console.log(`✅ 衣服ID ${clothe_id} 验证通过，开始获取详情...`);
      
      try {
        // 获取衣服详情
        console.log(`获取衣服详情: ${clothe_id}`);
        let clothe_detail_data = getClothesDetailFromCache(clothe_id);
        
        // 如果缓存中没有，尝试实时获取
        if (!clothe_detail_data) {
          console.log(`⚠️ 缓存中没有衣服详情: ${clothe_id}，尝试实时获取...`);
          console.log(`🔍 当前缓存状态:`, getLoginCache()?.clothesDetails ? '有衣服详情缓存' : '无衣服详情缓存');
          try {
            const response = await this.getClotheDetail(clothe_id, access_token);
            if (response.ok && response.data) {
              const parsed_response = JSON.parse(response.data) as ClotheDetailResponse;
              clothe_detail_data = parsed_response.data;
              console.log(`✅ 实时获取衣服详情成功: ${clothe_id}`);
              
              // 更新缓存
              const clothesDetails: { [key: string]: any } = {};
              clothesDetails[clothe_id] = clothe_detail_data;
              updateClothesDetailsInCache(clothesDetails);
              console.log(`✅ 已更新衣服详情到缓存: ${clothe_id}`);
            } else {
              console.warn(`⚠️ 实时获取衣服详情失败: ${clothe_id}`);
              continue;
            }
          } catch (apiError) {
            console.error(`❌ 实时获取衣服详情出错: ${clothe_id}`, apiError);
            continue;
          }
        }
        
        if (clothe_detail_data) {
          const clothe_detail = clothe_detail_data;
          
          console.log(`衣服详情获取成功:`, {
            id: clothe_detail.id,
            name: clothe_detail.name,
            classifyId: clothe_detail.classifyId,
            suitIds: clothe_detail.suitIds
          });
          
          // 参考 handleClothesManagement 的逻辑处理服装
          const classifyId = clothe_detail.classifyId;
          const clothesId = clothe_detail.id;
          const suitIds = clothe_detail.suitIds || '';

          // const classifyId = 4;
          // const clothesId = "1916394930865287170";
          // const suitIds = "1916394256718999553";
          
          console.log('👕 处理衣服管理逻辑:', {
            classifyId: classifyId,
            clothesId: clothesId,
            suitIds: suitIds
          });
          
          if (classifyId === 4) {
            // 套装
            isClothesSuit = true;
            
            // 处理套装逻辑
            const arr = suitIds.split(',');
            
            // if (suitIds === '' || arr.length === 0) {
            if (arr.length === 0) {
              const item = {
                classifyId: classifyId,
                clothesId: Long.fromString(clothesId)
              };
              clothesItemInfoList.push(item);
              console.log(`👕 添加了套装衣服: ${clothesId}, classifyId: ${classifyId}`);
            } else {
              for (let j = 0; j < arr.length; ++j) {
                const longValue = Long.fromString(arr[j]);
                const item = {
                  classifyId: classifyId,
                  clothesId: longValue
                };
                clothesItemInfoList.push(item);
                console.log(`👕 添加了套装衣服: ${clothesId}, classifyId: ${classifyId}`);
              }
            }
            
            console.log('👕 套装处理完成:', clothesItemInfoList);
            
          } else {
            // 非套装
            if (isClothesSuit) {
              // 之前是套装，现在切换到非套装
              isClothesSuit = false;
              
              const item = {
                classifyId: classifyId,
                clothesId: Long.fromString(clothesId)
              };
              clothesItemInfoList.push(item);
              console.log(`👕 添加了非套装衣服: ${clothesId}, classifyId: ${classifyId}`);
              // console.log('👕 从套装切换到非套装:', clothesItemInfoList);
              
            } else {
              // 之前不是套装
              // 1. 删除存储的同类型衣服（但保留来自同一suitIds的衣服）
              for (let j = clothesItemInfoList.length - 1; j >= 0; --j) {
                const item = clothesItemInfoList[j];
                if (item.classifyId === classifyId) {
                  // 检查是否来自同一个suitIds，如果是则不删除
                  const isFromSameSuitIds = clothe_ids.includes(item.clothesId.toString());
                  if (!isFromSameSuitIds) {
                    clothesItemInfoList.splice(j, 1);
                    console.log(`👕 删除不同suitIds的同类型衣服: ${item.clothesId.toString()}`);
                  } else {
                    console.log(`👕 保留同一suitIds的同类型衣服: ${item.clothesId.toString()}`);
                  }
                }
              }

              // 2. 特殊处理
              // 穿裙子 脱下上下衣
              if (classifyId === 7) {
                for (let j = clothesItemInfoList.length - 1; j >= 0; --j) {
                  const item = clothesItemInfoList[j];
                  if (item.classifyId === 1 || item.classifyId === 2) {
                    clothesItemInfoList.splice(j, 1);
                    console.log(`👕 删除上下衣: ${item.clothesId.toString()}`);
                  }
                }
              }

              // 穿上下衣 脱下裙子
              if (classifyId === 1 || classifyId === 2) {
                for (let j = clothesItemInfoList.length - 1; j >= 0; --j) {
                  const item = clothesItemInfoList[j];
                  if (item.classifyId === 7) {
                    clothesItemInfoList.splice(j, 1);
                    console.log(`👕 删除裙子: ${item.clothesId.toString()}`);
                  }
                }
              }

              let index = -1;
              for (let j = 0; j < clothesItemInfoList.length; ++j) {
                const item = clothesItemInfoList[j];
                if (classifyId === item.classifyId) {
                  // 如果 classifyId=0，允许多件，不更新直接跳过
                  if (classifyId === '0') {
                    index = -1;
                    break;
                  }

                  item.clothesId = Long.fromString(clothesId);
                  clothesItemInfoList[j] = item;
                  index = j;
                  console.log(`👕 更新了同类型衣服[${j}]: ${clothesId}`);
                  break;
                }
              }


              // 如果没有找到同类型的衣服，才添加新的
              if (index === -1) {
                if (clothesItemInfoList.length >= 3) {
                  clothesItemInfoList.splice(0, 1);
                  console.log(`👕 删除第一个衣服: ${clothesItemInfoList[0].clothesId.toString()}`);
                }

                const cii = {
                  classifyId: classifyId,
                  clothesId: Long.fromString(clothesId)
                };
                clothesItemInfoList.push(cii);
                console.log(`👕 添加了新衣服: ${clothesId}, classifyId: ${classifyId}`);
              }
              
              console.log('👕 非套装处理完成:', clothesItemInfoList);
              console.log(`👕 添加了衣服: ${clothesId}, classifyId: ${classifyId}`);
            }
          }
          
        } else {
          console.warn(`⚠️ 缓存中没有衣服详情: ${clothe_id}，跳过处理`);
          // 如果缓存中没有衣服详情，跳过这件衣服，继续处理下一件
          continue;
        }
      } catch (error) {
        console.error(`获取衣服详情失败: ${clothe_id}`, error);
        // 如果出错，跳过这件衣服，继续处理下一件
        continue;
      }
    }
    
    console.log('🔍 所有衣服处理完成，最终结果:');
    console.log('🔍 处理的clothe_ids:', clothe_ids);
    console.log('🔍 最终clothesItemInfoList:', clothesItemInfoList);
    console.log('🔍 最终isClothesSuit:', isClothesSuit);
    
    // 详细打印每个衣服的信息
    clothesItemInfoList.forEach((item, index) => {
      console.log(`🔍 衣服[${index}]:`, {
        classifyId: item.classifyId,
        clothesId: item.clothesId.toString()
      });
    });
    
    // 参考 sendChangeGarmentRequest 的构建逻辑
    console.log('👕 准备构建服装参数:', {
      clothesItemInfoList: clothesItemInfoList,
      isClothesSuit: isClothesSuit
    });
    
    // 构建服装参数
    console.log('🔍 开始构建服装参数:');
    console.log('🔍 clothesItemInfoList[0]:', clothesItemInfoList[0]);
    console.log('🔍 clothesItemInfoList[1]:', clothesItemInfoList[1]);
    
    const garment1Id = clothesItemInfoList.length >= 1 ? clothesItemInfoList[0].clothesId : Long.ZERO;
    const garment2Id = clothesItemInfoList.length >= 2 ? clothesItemInfoList[1].clothesId : Long.ZERO;
    // const garment2Id = Long.fromString("1916792048612323330");
    const garment3Id = clothesItemInfoList.length >= 3 ? clothesItemInfoList[2].clothesId : Long.ZERO;
    
    console.log('🔍 构建的garment IDs:');
    console.log('🔍 garment1Id:', garment1Id.toString());
    console.log('🔍 garment2Id:', garment2Id.toString());
    console.log('🔍 garment3Id:', garment3Id.toString());
    const garment1Size = "4"; // 默认尺寸，实际应该从服务器获取
    const garment2Size = garment2Id.gt(Long.ZERO) ? "4" : "1"; // 默认尺寸，实际应该从服务器获取
    const garment3Size = garment3Id.gt(Long.ZERO) ? "4" : "1"; // 默认尺寸，实际应该从服务器获取

    console.log('👕 构建的服装参数:', {
      garment1Id: garment1Id.toString(), 
      garment2Id: garment2Id.toString(), 
      garment3Id: garment3Id.toString(),
      garment1Size, garment2Size, garment3Size
    });
    
    // 构建 garments 对象
    garments.Garment1Id = garment1Id.toString();
    garments.Garment1Size = garment1Size;
    garments.Garment2Id = garment2Id.toString();
    garments.Garment2Size = garment2Size;
    garments.Garment3Id = garment3Id.toString();
    garments.Garment3Size = garment3Size;

    const login_cache = getLoginCache();
    let scene_code = "";
    let scene_name = "";
    
    // 优先使用房间信息中的场景ID来查找场景代码和名称
    // if (room_info_data.scenarioId) {
    //   console.log("🔍 房间信息中有场景ID:", room_info_data.scenarioId);
    //   if (login_cache && login_cache.scenesList) {
    //     const scene_list = login_cache.scenesList;
    //     if (scene_list[room_info_data.scenarioId]) {
    //       scene_code = scene_list[room_info_data.scenarioId].code;
    //       scene_name = scene_list[room_info_data.scenarioId].name;
    //       console.log("✅ 根据场景ID找到场景代码:", scene_code, "名称:", scene_name);
    //     } else {
    //       console.log("⚠️ 场景ID在缓存中未找到:", room_info_data.scenarioId);
    //     }
    //   }
    // }
    
    // 如果没有找到场景代码，使用缓存中的第一个场景
    // if (scene_code === "") {
    //   if (login_cache && login_cache.scenesList) {
    //     const scene_list = login_cache.scenesList;
    //     const scene_list_keys = Object.keys(scene_list);
    //     if (scene_list_keys.length > 0) {
    //       const scene_id = scene_list_keys[0];
    //       scene_name = scene_list[scene_id].name;
    //       scene_code = scene_list[scene_id].code;
    //       console.log("🔄 使用缓存中第一个场景:", scene_name, "代码:", scene_code);
    //     }
    //   }
    // }
    
    // 如果还是没有场景代码，使用默认值
    scene_code = "Maps_baimu";
    scene_name = "白幕";
    console.log("⚠️ 场景代码为空，使用默认场景代码: Maps_jiaotang");
    
    // 更新缓存中的默认场景名称
    if (scene_name && login_cache) {
      updateDefaultSceneNameInCache(scene_name);
    }
    
    console.log('🔍 准备构建最终进入舞台信息...');
    console.log('🔍 场景代码:', scene_code);
    console.log('🔍 场景名称:', scene_name);
    console.log('🔍 服装信息:', garments);
    
    const enter_stage_info: EnterStageInfo = {
      AvatarId: 0,
      UserId: "1970059409683144705",
      // UserId: String(room_info_data.userId || 0),
      // MapName: room_info_data.scenarioId,
      MapName: scene_code,
      Garments: garments,
      Animation: null,
      Camera: true,
      Voice: false,
      isControl: true,
      startTime: 0,
      endTime: 0,
      Size: 4,
      CustomModelUrl: "12345"
    };

    console.log('✅ 进入舞台信息构建完成:', enter_stage_info);
    const result = JSON.stringify(enter_stage_info);
    console.log('✅ 返回的JSON字符串:', result);
    return result;
  },

  // 解析房间信息响应
  parseRoomInfoResponse(response: ApiResponse): RoomInfoResponse | null {
    if (!response.ok || !response.data) {
      return null;
    }

    try {
      return JSON.parse(response.data);
    } catch (error) {
      console.error('解析房间信息响应失败:', error);
      return null;
    }
  },

  // 解析创建房间响应
  parseCreateRoomResponse(response: ApiResponse): CreateRoomResponse | null {
    if (!response.ok || !response.data) {
      return null;
    }

    try {
      return JSON.parse(response.data);
    } catch (error) {
      console.error('解析创建房间响应失败:', error);
      return null;
    }
  },

  // 解析加入房间响应
  parseJoinRoomResponse(response: ApiResponse): JoinRoomResponse | null {
    if (!response.ok || !response.data) {
      return null;
    }

    try {
      return JSON.parse(response.data);
    } catch (error) {
      console.error('解析加入房间响应失败:', error);
      return null;
    }
  },

  // 预加载衣服详情到缓存
  async preloadClothesDetails(co_creation_id: string, access_token: string): Promise<void> {
    console.log('🚀 开始预加载衣服详情到缓存');
    console.log('🔍 co_creation_id:', co_creation_id);
    console.log('🔍 access_token:', access_token ? '存在' : '不存在');
    
    if (!co_creation_id || !access_token) {
      console.log('⚠️ 缺少必要参数，无法预加载衣服详情');
      return;
    }

    try {
      // 1. 通过 getSysRoomShare 获取房间信息
      console.log('📋 步骤1: 获取房间信息...');
      const roomResponse = await this.getSysRoomShare(co_creation_id, access_token);
      
      if (!roomResponse.ok || !roomResponse.data) {
        console.warn('⚠️ 获取房间信息失败，无法预加载衣服详情');
        return;
      }
      
      const roomInfo = this.parseRoomInfoResponse(roomResponse);
      if (!roomInfo || !roomInfo.data || !roomInfo.data.clothId) {
        console.warn('⚠️ 房间信息中没有clothId，无法预加载衣服详情');
        return;
      }
      
      console.log('✅ 房间信息获取成功');
      console.log('🔍 clothId:', roomInfo.data.clothId);
      
      // 2. 从 clothId 中提取衣服ID列表
      const clothe_ids = roomInfo.data.clothId.split(';').filter(id => id && id !== '0');
      console.log('📦 提取到的衣服ID列表:', clothe_ids);
      
      if (clothe_ids.length === 0) {
        console.log('⚠️ 没有有效的衣服ID需要预加载');
        return;
      }
      
      // 3. 获取每件衣服的详情
      const clothesDetails: { [key: string]: any } = {};
      console.log(`📦 开始处理 ${clothe_ids.length} 件衣服...`);
      
      for (const clothe_id of clothe_ids) {
        console.log(`📦 处理衣服ID: ${clothe_id}`);
        try {
          const response = await this.getClotheDetail(clothe_id, access_token);
          if (response.ok && response.data) {
            const clothe_detail_data = JSON.parse(response.data) as ClotheDetailResponse;
            clothesDetails[clothe_id] = clothe_detail_data.data;
            console.log(`✅ 预加载衣服详情成功: ${clothe_id}`, clothe_detail_data.data);
            
            // 4. 更新右侧顶部图片（如果这是第一件衣服）
            if (Object.keys(clothesDetails).length === 1) {
              console.log('🖼️ 准备更新右侧顶部图片，衣服数据:', clothe_detail_data.data);
              this.updateTopRightClothesImage(clothe_detail_data.data);
            }
          } else {
            console.warn(`⚠️ 预加载衣服详情失败: ${clothe_id}`, response);
          }
        } catch (error) {
          console.error(`❌ 预加载衣服详情出错: ${clothe_id}`, error);
        }
      }
      
      // 5. 更新缓存
      if (Object.keys(clothesDetails).length > 0) {
        console.log(`📦 准备更新缓存，衣服详情数量: ${Object.keys(clothesDetails).length}`);
        console.log(`📦 衣服详情列表:`, Object.keys(clothesDetails));
        updateClothesDetailsInCache(clothesDetails);
        console.log(`✅ 已预加载 ${Object.keys(clothesDetails).length} 件衣服的详情到缓存`);
        
        // 验证缓存是否更新成功
        const updatedCache = getLoginCache();
        console.log(`🔍 缓存更新验证:`, updatedCache?.clothesDetails ? '成功' : '失败');
        if (updatedCache?.clothesDetails) {
          console.log(`🔍 缓存中的衣服详情数量:`, Object.keys(updatedCache.clothesDetails).length);
        }
      } else {
        console.log(`⚠️ 没有成功预加载的衣服详情，跳过缓存更新`);
      }
      
    } catch (error) {
      console.error('❌ 预加载衣服详情过程中出错:', error);
    }
  },

  // 更新右侧顶部图片
  updateTopRightClothesImage(clothesData: any): void {
    console.log('🖼️ 准备更新右侧顶部图片:', clothesData);
    
    try {
      // 创建自定义事件，通知UI组件更新顶部图片
      const event = new CustomEvent('updateTopRightClothesImage', {
        detail: {
          clothesData: clothesData
        }
      });
      
      window.dispatchEvent(event);
      console.log('📡 发送更新顶部图片事件:', clothesData);
      
    } catch (error) {
      console.error('❌ 更新右侧顶部图片失败:', error);
    }
  },

  // 创建分享
  async createSysRoomShare(shareData: CreateSysRoomShareRequest, access_token: string): Promise<ApiResponse> {
    console.log('开始创建分享，分享数据:', shareData);
    const endpoint = API_ENDPOINTS.CREATE_SYSROOMSHARE();
    const headers = {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    };
    const data = JSON.stringify(shareData);
    return await apiService.post(endpoint, data, headers);
  },

  // 解析创建分享响应
  parseCreateSysRoomShareResponse(response: ApiResponse): CreateSysRoomShareResponse | null {
    if (!response.ok || !response.data) {
      return null;
    }

    try {
      return JSON.parse(response.data);
    } catch (error) {
      console.error('解析创建分享响应失败:', error);
      return null;
    }
  }
}; 

export const modelAPI = {
  async createModel(access_token: string, modelPictureUrl: string, modelVideoUrl: string): Promise<ApiResponse> {
    console.log('开始创建模型, endpoint:', API_ENDPOINTS.CREATE_MODEL(), 'access_token:', access_token, 'modelPictureUrl:', modelPictureUrl, 'modelVideoUrl:', modelVideoUrl);
    const endpoint = API_ENDPOINTS.CREATE_MODEL();
    const headers = {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json'
    };
    const data = {
      modelPictureUrl: modelPictureUrl,
      modelVideoUrl: modelVideoUrl,
      height: "180"
    };
    console.log('创建模型请求数据:', data);
    return await apiService.post(endpoint, JSON.stringify(data), headers);
  },


  async deleteModel(access_token: string, model_id: Long): Promise<ApiResponse> {
    console.log('开始删除模型，模型ID:', model_id.toString());
    const endpoint = API_ENDPOINTS.DELETE_MODEL(model_id.toString());
    const headers = {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    console.log('删除模型请求端点:', endpoint);
    return await apiService.delete(endpoint, headers);
  },

  async getModelList(access_token: string, user_id: string): Promise<ApiResponse> {
    console.log('开始获取模型列表');
    const endpoint = API_ENDPOINTS.GET_MODEL_LIST(user_id);
    const headers = {
      'Authorization': `Bearer ${access_token}`
    };
    return await apiService.get(endpoint, headers);
  },

  // 上传模型素材（图片和视频）
  async uploadModelMaterials(
    access_token: string, 
    user_id: string, 
    files: { images: File[]; videos: File[] }
  ): Promise<ApiResponse> {
    console.log('开始上传模型素材');
    console.log('图片数量:', files.images.length);
    console.log('视频数量:', files.videos.length);
    
    // 创建FormData
    const formData = new FormData();
    
    // 添加用户ID
    formData.append('user_id', user_id);
    
    // 添加图片文件
    files.images.forEach((file, index) => {
      formData.append(`images[${index}]`, file);
    });
    
    // 添加视频文件
    files.videos.forEach((file, index) => {
      formData.append(`videos[${index}]`, file);
    });
    
    // TODO: 这里需要实际的API端点
    // 暂时使用占位端点
    const endpoint = '/api/model/upload'; // 占位端点
    
    const headers = {
      'Authorization': `Bearer ${access_token}`
      // 注意：不要设置Content-Type，让浏览器自动设置multipart/form-data
    };
    
    try {
      // 模拟API调用
      console.log('模拟上传模型素材到:', endpoint);
      console.log('FormData内容:', Array.from(formData.entries()));
      
      // 模拟上传延迟
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 返回模拟成功响应
      return {
        status: 200,
        ok: true,
        data: JSON.stringify({
          code: 0,
          message: '上传成功',
          data: {
            model_id: 'model_' + Date.now(),
            uploaded_images: files.images.length,
            uploaded_videos: files.videos.length,
            processing_status: 'processing'
          }
        })
      };
    } catch (error) {
      console.error('上传模型素材失败:', error);
      return {
        status: 500,
        ok: false,
        data: JSON.stringify({
          code: 500,
          message: '上传失败',
          error: error instanceof Error ? error.message : '未知错误'
        })
      };
    }
  },

  // 获取模型处理状态
  async getModelProcessingStatus(access_token: string, model_id: string): Promise<ApiResponse> {
    console.log('获取模型处理状态:', model_id);
    
    // TODO: 这里需要实际的API端点
    const endpoint = `/api/model/status/${model_id}`;
    
    const headers = {
      'Authorization': `Bearer ${access_token}`
    };
    
    try {
      // 模拟API调用
      console.log('模拟获取模型处理状态:', endpoint);
      
      // 模拟处理延迟
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // 返回模拟状态响应
      return {
        status: 200,
        ok: true,
        data: JSON.stringify({
          code: 0,
          message: '获取状态成功',
          data: {
            model_id: model_id,
            status: 'completed', // processing, completed, failed
            progress: 100,
            result_url: 'https://example.com/model_result.jpg'
          }
        })
      };
    } catch (error) {
      console.error('获取模型处理状态失败:', error);
      return {
        status: 500,
        ok: false,
        data: JSON.stringify({
          code: 500,
          message: '获取状态失败',
          error: error instanceof Error ? error.message : '未知错误'
        })
      };
    }
  },

  async generateAiVideo(access_token: string, colthe_id: string, room_id: string, title: string, action_path: string): Promise<ApiResponse> {
    console.log('开始生成AI动作视频');
    const endpoint = API_ENDPOINTS.GENERATE_AI_VIDEO();
    const headers = {
      'Authorization': `Bearer ${access_token}`
    };
    const data = {
      clothId: colthe_id,
      roomId: room_id,
      title: title,
      actionPath: action_path
    };
    return await apiService.post(endpoint, JSON.stringify(data), headers);
  },

  async getAiVideoResult(access_token: string, id: string): Promise<ApiResponse> {
    console.log('开始获取AI动作视频结果');
    const endpoint = API_ENDPOINTS.GET_AI_VIDEO_RESULT(id);
    const headers = {
      'Authorization': `Bearer ${access_token}`
    };
    return await apiService.get(endpoint, headers);
  }
};

export const uploadAPI = {
  async getUploadVedioToken(access_token: string): Promise<ApiResponse> {
    console.log('开始获取上传视频临时token');
    const endpoint = API_ENDPOINTS.GET_UPLOAD_VEDIO_TOKEN();
    const headers = {
      'Authorization': `Bearer ${access_token}`
    };
    return await apiService.post(endpoint, undefined, headers);
  },

  async getUploadImageToken(access_token: string): Promise<ApiResponse> {
    console.log('开始获取上传图片临时token');
    const endpoint = API_ENDPOINTS.GET_UPLOAD_IMAGE_TOKEN();
    const headers = {
      'Authorization': `Bearer ${access_token}`
    };
    return await apiService.post(endpoint, undefined, headers);
  },

  async uploadActionVideo(access_token: string, action_name: string, video_url: string): Promise<ApiResponse> {
    console.log('开始上传动作视频');
    const endpoint = API_ENDPOINTS.UPLOAD_ACTION_VIDEO();
    const headers = {
      'Authorization': `Bearer ${access_token}`
    };
    const data = {
      remark: action_name,
      videoUrl: video_url
    }
    return await apiService.post(endpoint, JSON.stringify(data), headers);
  },

  async getActionVideoResult(access_token: string, current: number, size: number): Promise<ApiResponse> {
    console.log('开始获取动作视频结果');
    const endpoint = API_ENDPOINTS.GET_ACTION_VIDEO_RESULT(current, size);
    const headers = {
      'Authorization': `Bearer ${access_token}`
    };
    return await apiService.get(endpoint, headers);
  },

  async deleteActionVideo(access_token: string, model_id: Long): Promise<ApiResponse> {
    console.log('开始删除动作视频，动作视频ID:', model_id.toString());
    const endpoint = API_ENDPOINTS.DELETE_ACTION_VIDEO(model_id.toString());
    const headers = {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    console.log('删除动作视频请求端点:', endpoint);
    return await apiService.delete(endpoint, headers);
  },

  async getAiVideoResult(access_token: string, current: number, size: number): Promise<ApiResponse> {
    //update by chao 2025.09.27
    // FUNCA. 分享

    // 关键：向小程序发送消息（小程序会在onWebviewMessage中接收）
    // const shareData = {
    //   coCreateID: '123'
    // };
    // wx.miniProgram.postMessage({ data: shareData });
    // alert('已向小程序发送数据，请返回小程序查看效果');
    

    console.log('开始获取ai视频结果');
    const endpoint = API_ENDPOINTS.GET_AI_VIDEO_RESULT_LIST(current, size);
    const headers = {
      'Authorization': `Bearer ${access_token}`
    };
    return await apiService.get(endpoint, headers);
  },
};
