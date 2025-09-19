// API配置文件
// 从综合配置文件中导入配置
import { API_CONFIG, API_ENDPOINTS } from './config';

// 重新导出API配置，保持向后兼容
export { API_CONFIG, API_ENDPOINTS };

// 为了向后兼容，保留原有的导出方式
export const API_CONFIG_LEGACY = {
  // API基础地址 - 使用相对路径，配合代理设置
  BASE_URL: '', // 空字符串表示使用当前域名，配合package.json中的proxy配置
  
  // 通用请求头
  COMMON_HEADERS: {
    'Content-Type': 'application/json',
  },
  
  // 登录相关请求头
  LOGIN_HEADERS: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'isToken': 'false',
    'TENANT-ID': '1',
    'Authorization': 'Basic cGlnOnBpZw=='
  }
};

// API端点（保持向后兼容）
export const API_ENDPOINTS_LEGACY = {
  // 获取验证码
  GET_VERIFY_CODE: (phone: string) => `/admin/mobile/${phone}`,
  
  // 登录
  LOGIN: (phone: string, code: string) => 
    `/admin/oauth/token?mobile=SMS@${phone}&code=${code}&grant_type=mobile`,
  
  // 获取房间信息
  GET_SYSROOMSHARE: (co_creation_id: number) => `/admin/sysroomshare/${co_creation_id}`,
  
  // 创建房间
  CREATE_ROOM: () => `/admin/room/create`,
  
  // 加入房间
  JOIN_ROOM: () => `/admin/roomUser/join`,
  
  // 获取衣服尺寸
  GET_CLOTHE_SIZE: (clothe_id: string) => `/admin/sysclotheextra/getSize/${clothe_id}`
}; 