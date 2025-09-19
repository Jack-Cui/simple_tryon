// 认证相关工具函数

// 检查用户是否已登录
export const isLoggedIn = (): boolean => {
  const token = localStorage.getItem('access_token');
  console.log('🔍 检查登录状态 - access_token:', token ? '存在' : '不存在');
  
  // 如果token存在但为空字符串，也认为未登录
  if (!token || token.trim() === '') {
    console.log('❌ 用户未登录 - token为空或不存在');
    return false;
  }
  
  console.log('✅ 用户已登录');
  return true;
};

// 获取访问token
export const getAccessToken = (): string | null => {
  return localStorage.getItem('access_token');
};

// 获取刷新token
export const getRefreshToken = (): string | null => {
  return localStorage.getItem('refresh_token');
};

// 保存token
export const saveTokens = (accessToken: string, refreshToken?: string): void => {
  localStorage.setItem('access_token', accessToken);
  if (refreshToken) {
    localStorage.setItem('refresh_token', refreshToken);
  }
  console.log('💾 Token已保存到localStorage');
};

// 清除token
export const clearTokens = (): void => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  console.log('🗑️ Token已从localStorage清除');
};

// 强制清除所有认证信息（用于测试）
export const forceLogout = (): void => {
  clearTokens();
  console.log('🚪 强制登出完成');
};

// 登出
export const logout = (): void => {
  clearTokens();
  window.location.href = '/login';
}; 