/**
 * 共创ID获取工具函数
 * 支持从多个URL路径获取coCreationId参数
 */

/**
 * 从多个URL路径获取coCreationId
 * 支持以下路径格式：
 * - http://dev_h5.ai1010.cn/home?co_creation_id=2
 * - http://dev_h5.ai1010.cn?co_creation_id=2
 * - http://dev_h5.ai1010.cn/login?co_creation_id=2
 * 
 * @returns coCreationId 如果获取到则返回字符串，否则返回null
 */
export const getCoCreationIdFromURL = (): string | null => {
  try {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    
    // 方法1: 从查询参数获取 co_creation_id
    const coCreationIdParam = url.searchParams.get('co_creation_id');
    if (coCreationIdParam) {
      // 直接返回字符串，不进行数字转换
      if (coCreationIdParam.trim() !== '') {
        console.log('✅ 从URL查询参数获取到coCreationId:', coCreationIdParam);
        return coCreationIdParam;
      } else {
        console.log('❌ 从URL查询参数获取到coCreationId为空:', coCreationIdParam);
      }
    }
    
    // 方法2: 从路径中解析 (处理类似 /home?co_creation_id=2 的情况)
    const pathWithQuery = url.pathname + url.search;
    const pathMatch = pathWithQuery.match(/co_creation_id=([^&]+)/);
    if (pathMatch && pathMatch[1]) {
      const coCreationId = pathMatch[1];
      if (coCreationId.trim() !== '') {
        return coCreationId;
      }
    }
    
    // 方法3: 从window.location.search中获取 (兼容旧版本)
    if (window.location.search) {
      const searchMatch = window.location.search.match(/co_creation_id=([^&]+)/);
      if (searchMatch && searchMatch[1]) {
        const coCreationId = searchMatch[1];
        if (coCreationId.trim() !== '') {
          return coCreationId;
        }
      }
    }
    
    return null;
    
  } catch (error) {
    console.error('❌ 解析URL获取coCreationId时出错:', error);
    return null;
  }
};

/**
 * 获取coCreationId的完整流程
 * 优先级：URL参数 > 缓存 > 默认值
 * 
 * @param fallbackToCache 是否在URL中获取不到时尝试从缓存获取
 * @param forceUrlPriority 是否强制URL参数优先级（忽略缓存）
 * @returns coCreationId 如果获取到则返回字符串，否则返回null
 */
export const getCoCreationId = (fallbackToCache: boolean = true, forceUrlPriority: boolean = false): string | null => {
  // 首先尝试从URL获取
  const urlCoCreationId = getCoCreationIdFromURL();
  if (urlCoCreationId !== null) {
    // 如果强制URL优先级，直接返回URL中的值，不执行缓存更新逻辑
    if (forceUrlPriority) {
      return urlCoCreationId;
    }
    
    // 只在非强制模式下执行缓存更新逻辑
    try {
      const cachedData = localStorage.getItem('loginCache');
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        if (parsedData.coCreationId && 
            typeof parsedData.coCreationId === 'string' && 
            parsedData.coCreationId !== urlCoCreationId) {
          console.log('🔄 检测到URL参数与缓存值不同，更新缓存:', 
            `缓存值: ${parsedData.coCreationId} -> URL值: ${urlCoCreationId}`);
          
          // 更新缓存中的coCreationId
          const updatedData = { ...parsedData, coCreationId: urlCoCreationId };
          localStorage.setItem('loginCache', JSON.stringify(updatedData));
          console.log('✅ 缓存已更新');
        }
      }
    } catch (error) {
      console.error('❌ 更新缓存时出错:', error);
    }
    
    return urlCoCreationId;
  }
  
  // 如果URL中没有，且允许从缓存获取，则尝试缓存
  if (fallbackToCache) {
    try {
      const cachedData = localStorage.getItem('loginCache');
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        if (parsedData.coCreationId && typeof parsedData.coCreationId === 'string') {
          console.log('✅ 从缓存获取到coCreationId:', parsedData.coCreationId);
          return parsedData.coCreationId;
        }
      }
    } catch (error) {
      console.error('❌ 从缓存获取coCreationId时出错:', error);
    }
  }
  
  console.log('❌ 无法获取到有效的coCreationId');
  return null;
};

/**
 * 验证coCreationId是否有效
 * 
 * @param coCreationId 要验证的共创ID
 * @returns 是否有效
 */
export const isValidCoCreationId = (coCreationId: any): boolean => {
  return coCreationId !== null && 
         coCreationId !== undefined && 
         typeof coCreationId === 'string' && 
         coCreationId.trim() !== '';
};

/**
 * 获取coCreationId，URL参数优先（会覆盖缓存中的值）
 * 这个函数专门用于需要强制使用URL参数的场景
 * 
 * @returns coCreationId 如果获取到则返回字符串，否则返回null
 */
export const getCoCreationIdWithUrlPriority = (): string | null => {
  // 直接调用getCoCreationIdFromURL，不经过缓存逻辑
  return getCoCreationIdFromURL();
};

/**
 * 清除缓存中的coCreationId，强制重新获取
 */
export const clearCoCreationIdCache = (): void => {
  try {
    const cachedData = localStorage.getItem('loginCache');
    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      if (parsedData.coCreationId) {
        delete parsedData.coCreationId;
        localStorage.setItem('loginCache', JSON.stringify(parsedData));
        console.log('🗑️ 已清除缓存中的coCreationId');
      }
    }
  } catch (error) {
    console.error('❌ 清除缓存中的coCreationId时出错:', error);
  }
};

/**
 * 显示coCreationId不存在的错误弹窗
 */
export const showCoCreationIdError = (): void => {
  const message = '共创ID不存在，请检查URL参数或联系管理员';
  console.error('❌', message);
  
  // 使用浏览器原生alert作为备选方案
  if (typeof window !== 'undefined' && window.alert) {
    window.alert(message);
  }
  
  // 如果有自定义的toast或modal组件，可以在这里调用
  // 例如：showToast(message, 'error');
}; 