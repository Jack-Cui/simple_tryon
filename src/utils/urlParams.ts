// URL参数解析工具

// 解析URL查询参数
export const parseUrlParams = (): Record<string, string> => {
  const urlParams = new URLSearchParams(window.location.search);
  const params: Record<string, string> = {};
  
  Array.from(urlParams.entries()).forEach(([key, value]) => {
    params[key] = value;
  });
  
  return params;
};

// 获取特定的URL参数
export const getUrlParam = (key: string): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
};

// 获取co_creation_id参数
export const getCoCreationId = (): string | null => {
  return getUrlParam('co_creation_id');
};

// 构建带参数的URL
export const buildUrlWithParams = (baseUrl: string, params: Record<string, string>): string => {
  const url = new URL(baseUrl, window.location.origin);
  
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value);
    }
  });
  
  return url.pathname + url.search;
}; 