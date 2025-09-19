import { SCHEDULE_CONFIG, API_ENDPOINTS } from '../config/config';

// 浏览器环境中使用 Web Crypto API

export interface ScheduleRequest {
  user_id: string;
  room_id: string;
  priority_ips?: string[];
  latitude?: number;
  longitude?: number;
  poi?: string | null;
}

export interface ScheduleResponse {
  data: {
    inst_acc_info: {
      token: string;
      ws_url: string;
    };
  };
}


export class ScheduleService {
  private baseUrl = API_ENDPOINTS.SCHEDULE();  // 使用配置文件中的端点
  private secretKey = SCHEDULE_CONFIG.SECRET_KEY;

  // 使用 Web Crypto API 生成SHA256签名
  private async makeSha256Signature(rand: number, ts: number, secretKey: string): Promise<string> {
    // 修复：使用与Python代码一致的签名格式
    const message = `rand=${rand}&secretkey=${secretKey}&ts=${ts}`;
    
    console.log('🔐 签名生成详情:');
    console.log('  - rand:', rand);
    console.log('  - ts:', ts);
    console.log('  - secretKey:', secretKey);
    console.log('  - 签名字符串:', message);
    
    // 检查 crypto.subtle 是否可用
    if (typeof crypto !== 'undefined' && crypto.subtle) {
      try {
        const encoder = new TextEncoder();
        const data = encoder.encode(message);
        
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        
        console.log('  - 生成的签名 (Web Crypto):', hashHex);
        return hashHex;
      } catch (error) {
        console.warn('Web Crypto API 失败，使用简单哈希:', error);
      }
    }
    
    // 后备方案：简单的字符串哈希函数
    console.warn('⚠️  Web Crypto API 不可用，使用简单哈希函数');
    const simpleHash = this.simpleHash(message);
    console.log('  - 生成的签名 (简单哈希):', simpleHash);
    return simpleHash;
  }

  // 简单的哈希函数作为后备方案
  private simpleHash(str: string): string {
    let hash = 0;
    if (str.length === 0) return hash.toString(16);
    
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // 转换为32位整数
    }
    
    // 转换为16进制字符串，确保长度为64位（模拟SHA256长度）
    const hashHex = Math.abs(hash).toString(16);
    return hashHex.padEnd(64, '0').substring(0, 64);
  }

  // 调度请求
  async schedule(request: ScheduleRequest): Promise<ScheduleResponse> {
    console.log('📡 开始调度分配实例...');
    console.log('调度请求参数:', request);
    
    // 🚀 测试：使用配置文件中的固定参数
    const rand = SCHEDULE_CONFIG.TEST_PARAMS.RAND;
    const ts = SCHEDULE_CONFIG.TEST_PARAMS.TS;
    const signature = SCHEDULE_CONFIG.TEST_PARAMS.SIGNATURE;
    
    const url = `${this.baseUrl}?rand=${rand}&ts=${ts}`;
    console.log(`调度请求URL: ${url}`);
    console.log(`使用固定签名: ${signature}`);
    
    // 修复：设置必要的请求头，与Python requests库保持一致
    const headers = {
      'Content-Type': 'application/json',
      'X-SHA-Signature': signature
    };
    
    const requestData = {
      user_id: request.user_id,
      priority_ips: request.priority_ips || SCHEDULE_CONFIG.DEFAULT_PRIORITY_IPS,
      latitude: request.latitude || 0.0,
      longitude: request.longitude || 0.0,
      poi: request.poi || null,
      room_id: request.room_id
    };
    
    console.log('📤 完整请求信息:');
    console.log('  - URL:', url);
    console.log('  - Method: POST');
    console.log('  - Headers:', headers);
    console.log('  - Body:', JSON.stringify(requestData, null, 2));
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestData)
      });
      
      console.log(`📥 调度响应状态: ${response.status}`);
      console.log('📥 响应头:', Object.fromEntries(response.headers.entries()));
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('📥 错误响应内容:', errorText);
        
        // 检查响应数据中是否包含code 424
        try {
          const errorData = JSON.parse(errorText);
          if (errorData.code === 424) {
            console.log('🚨 调度请求时检测到登录过期 (code: 424)');
            // 触发登录过期处理
            this.handleLoginExpired();
            throw new Error('登录已过期');
          }
        } catch (parseError) {
          console.log('解析错误响应数据失败:', parseError);
        }
        
        throw new Error(`调度请求失败: ${response.status} ${response.statusText}`);
      }
      
      const responseData = await response.json();
      console.log('📥 调度响应数据:', responseData);
      
      // 检查ws_url是否为空，如果为空则使用配置文件中的默认值
      if (!responseData.data.inst_acc_info.ws_url) {
        responseData.data.inst_acc_info.ws_url = SCHEDULE_CONFIG.DEFAULT_WS_URL;
        console.log('ws_url为空，使用默认URL:', responseData.data.inst_acc_info.ws_url);
      }
      
      return responseData;
    } catch (error) {
      alert('服务器已满，请稍后再试');
      console.error('调度请求失败:', error);
      throw error;
    }
  }

  // 处理登录过期
  private handleLoginExpired(): void {
    console.log('🚨 处理登录过期...');
    
    // 显示登录过期提示
    alert('登录已过期，请重新登录');
    
    // 跳转到登录页面
    window.location.href = '/login';
  }
}

// 导出单例实例
export const scheduleService = new ScheduleService(); 