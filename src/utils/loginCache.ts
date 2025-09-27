import { ClothesItem } from '../types/api';

// 登录缓存工具
export interface LoginCacheData {
  token: string;
  userId: string;
  // phone: string;
  coCreationId: string;
  tenantId: string;
  roomId: string; // 房间ID，可选
  roomName?: string; // 房间名称，可选
  clothesList?: ClothesItem[]; // 服饰列表，可选
  clothesDetails?: { [key: string]: any }; // 衣服详情缓存，可选
  scenesList?: { [key: string]: { name: string; code: string; bgm?: string } }; // 场景列表映射，可选
  defaultSceneName?: string; // 默认场景名称，可选
  timestamp: number; // 缓存时间戳
}

const CACHE_KEY = 'loginCache';
const DEFAULT_CACHE_DURATION = 24 * 60 * 60 * 1000; // 24小时，单位毫秒

/**
 * 保存登录信息到缓存
 * @param loginData 登录信息
 * @param duration 缓存时长（毫秒），可选，默认24小时
 */
export const saveLoginCache = (loginData: Omit<LoginCacheData, 'timestamp'>, duration?: number): void => {
  try {
    const cacheData: LoginCacheData = {
      ...loginData,
      timestamp: Date.now()
    };
    
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
    localStorage.setItem(CACHE_KEY + '_duration', (duration || DEFAULT_CACHE_DURATION).toString());
    console.log('✅ 登录信息已保存到缓存');
  } catch (error) {
    console.error('❌ 保存登录缓存失败:', error);
  }
};

/**
 * 从缓存读取登录信息
 * @returns 登录信息，如果没有缓存或已过期则返回null
 */
export const getLoginCache = (): LoginCacheData | null => {
  try {
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (!cachedData) {
      console.log('📝 没有找到登录缓存');
      return null;
    }

    const loginData: LoginCacheData = JSON.parse(cachedData);
    const now = Date.now();
    const cacheAge = now - loginData.timestamp;

    // 获取缓存时长
    const cacheDurationStr = localStorage.getItem(CACHE_KEY + '_duration');
    const cacheDuration = cacheDurationStr ? parseInt(cacheDurationStr) : DEFAULT_CACHE_DURATION;

    // 检查是否过期
    if (cacheAge > cacheDuration) {
      console.log('⏰ 登录缓存已过期，自动清理');
      clearLoginCache();
      return null;
    }

    const remainingTime = cacheDuration - cacheAge;
    const remainingHours = Math.floor(remainingTime / (60 * 60 * 1000));
    const remainingMinutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
    
    // console.log(`✅ 读取登录缓存成功，剩余有效时间: ${remainingHours}小时${remainingMinutes}分钟`);
    return loginData;
  } catch (error) {
    console.error('❌ 读取登录缓存失败:', error);
    clearLoginCache();
    return null;
  }
};

/**
 * 清除登录缓存
 */
export const clearLoginCache = (): void => {
  try {
    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(CACHE_KEY + '_duration');
    console.log('🗑️ 登录缓存已清理');
  } catch (error) {
    console.error('❌ 清理登录缓存失败:', error);
  }
};

/**
 * 检查登录缓存是否有效
 * @returns 是否有效的登录缓存
 */
export const isLoginCacheValid = (): boolean => {
  return getLoginCache() !== null;
};

/**
 * 获取缓存剩余时间（毫秒）
 * @returns 剩余时间，如果没有缓存则返回0
 */
export const getCacheRemainingTime = (): number => {
  const loginData = getLoginCache();
  if (!loginData) return 0;
  
  const now = Date.now();
  const cacheAge = now - loginData.timestamp;
  
  // 获取缓存时长
  const cacheDurationStr = localStorage.getItem(CACHE_KEY + '_duration');
  const cacheDuration = cacheDurationStr ? parseInt(cacheDurationStr) : DEFAULT_CACHE_DURATION;
  
  return Math.max(0, cacheDuration - cacheAge);
};

/**
 * 更新缓存中的房间名称
 * @param roomName 房间名称
 */
export const updateRoomNameInCache = (roomName: string): void => {
  try {
    const cachedData = getLoginCache();
    if (cachedData) {
      const updatedData = { ...cachedData, roomName };
      const cacheDurationStr = localStorage.getItem(CACHE_KEY + '_duration');
      const cacheDuration = cacheDurationStr ? parseInt(cacheDurationStr) : DEFAULT_CACHE_DURATION;
      
      localStorage.setItem(CACHE_KEY, JSON.stringify(updatedData));
      console.log('✅ 房间名称已更新到缓存:', roomName);
    }
  } catch (error) {
    console.error('❌ 更新缓存中的房间名称失败:', error);
  }
};

/**
 * 更新缓存中的服饰列表
 * @param clothesList 服饰列表
 */
export const updateClothesListInCache = (clothesList: ClothesItem[]): void => {
  try {
    const cachedData = getLoginCache();
    if (cachedData) {
      const updatedData = { ...cachedData, clothesList };
      const cacheDurationStr = localStorage.getItem(CACHE_KEY + '_duration');
      const cacheDuration = cacheDurationStr ? parseInt(cacheDurationStr) : DEFAULT_CACHE_DURATION;
      
      localStorage.setItem(CACHE_KEY, JSON.stringify(updatedData));
      console.log('✅ 服饰列表已更新到缓存:', clothesList);
    }
  } catch (error) {
    console.error('❌ 更新缓存中的服饰列表失败:', error);
  }
}; 

/**
 * 更新缓存中的房间ID
 * @param roomId 房间ID
 */
export const updateRoomIdInCache = (roomId: string): void => {
  try {
    const cachedData = getLoginCache();
    if (cachedData) {
      const updatedData = { ...cachedData, roomId };
      const cacheDurationStr = localStorage.getItem(CACHE_KEY + '_duration');
      const cacheDuration = cacheDurationStr ? parseInt(cacheDurationStr) : DEFAULT_CACHE_DURATION;
      
      localStorage.setItem(CACHE_KEY, JSON.stringify(updatedData));
      console.log('✅ 房间ID已更新到缓存:', roomId);
    }
  } catch (error) {
    console.error('❌ 更新缓存中的房间ID失败:', error);
  }
}; 

/**
 * 更新缓存中的场景列表
 * @param scenesList 场景列表映射
 */
export const updateScenesListInCache = (scenesList: { [key: string]: { name: string; code: string; bgm?: string } }): void => {
  try {
    const cachedData = getLoginCache();
    if (cachedData) {
      const updatedData = { ...cachedData, scenesList };
      const cacheDurationStr = localStorage.getItem(CACHE_KEY + '_duration');
      const cacheDuration = cacheDurationStr ? parseInt(cacheDurationStr) : DEFAULT_CACHE_DURATION;
      
      localStorage.setItem(CACHE_KEY, JSON.stringify(updatedData));
      console.log('✅ 场景列表已更新到缓存:', scenesList);
    }
  } catch (error) {
    console.error('❌ 更新缓存中的场景列表失败:', error);
  }
};

/**
 * 更新缓存中的默认场景名称
 * @param sceneName 场景名称
 */
export const updateDefaultSceneNameInCache = (sceneName: string): void => {
  try {
    const cachedData = getLoginCache();
    if (cachedData) {
      const updatedData = { ...cachedData, defaultSceneName: sceneName };
      const cacheDurationStr = localStorage.getItem(CACHE_KEY + '_duration');
      const cacheDuration = cacheDurationStr ? parseInt(cacheDurationStr) : DEFAULT_CACHE_DURATION;
      
      localStorage.setItem(CACHE_KEY, JSON.stringify(updatedData));
      console.log('✅ 默认场景名称已更新到缓存:', sceneName);
    }
  } catch (error) {
    console.error('❌ 更新默认场景名称缓存失败:', error);
  }
}; 

/**
 * 更新缓存中的衣服详情
 * @param clothesDetails 衣服详情映射
 */
export const updateClothesDetailsInCache = (clothesDetails: { [key: string]: any }): void => {
  try {
    const cachedData = getLoginCache();
    if (cachedData) {
      const updatedData = { ...cachedData, clothesDetails };
      const cacheDurationStr = localStorage.getItem(CACHE_KEY + '_duration');
      const cacheDuration = cacheDurationStr ? parseInt(cacheDurationStr) : DEFAULT_CACHE_DURATION;
      
      localStorage.setItem(CACHE_KEY, JSON.stringify(updatedData));
      console.log('✅ 衣服详情已更新到缓存:', clothesDetails);
    }
  } catch (error) {
    console.error('❌ 更新衣服详情缓存失败:', error);
  }
};

/**
 * 获取缓存中的衣服详情
 * @param clotheId 衣服ID
 * @returns 衣服详情，如果没有则返回null
 */
export const getClothesDetailFromCache = (clotheId: string): any | null => {
  try {
    const cachedData = getLoginCache();
    if (cachedData?.clothesDetails && cachedData.clothesDetails[clotheId]) {
      return cachedData.clothesDetails[clotheId];
    }
    return null;
  } catch (error) {
    console.error('❌ 从缓存获取衣服详情失败:', error);
    return null;
  }
}; 