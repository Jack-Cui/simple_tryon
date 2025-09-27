// 项目配置文件
// 包含所有硬编码参数的统一管理

// 环境配置
export const ENV_CONFIG = {
  // 开发环境
  DEVELOPMENT: {
    API_BASE_URL: 'http://dev_gw.ai1010.cn',
    WS_BASE_URL: 'dev_wss.ai1010.cn',
    PROXY_TARGET: 'http://dev_gw.ai1010.cn',
    DEFAULT_WS_URL: 'dev_wss.ai1010.cn/w8'
  },
  // 生产环境
  PRODUCTION: {
    API_BASE_URL: 'https://prod_gw.ai1010.cn',
    WS_BASE_URL: 'prod_wss.ai1010.cn',
    PROXY_TARGET: 'https://prod_gw.ai1010.cn',
    DEFAULT_WS_URL: 'prod_wss.ai1010.cn/w8'
  },
  // 测试环境
  TEST: {
    API_BASE_URL: 'http://test_gw.ai1010.cn',
    WS_BASE_URL: 'test_wss.ai1010.cn',
    PROXY_TARGET: 'http://test_gw.ai1010.cn',
    DEFAULT_WS_URL: 'test_wss.ai1010.cn/w8'
  }
};

// 当前环境（可通过环境变量或构建时配置）
const CURRENT_ENV = process.env.REACT_APP_ENV || 'DEVELOPMENT';
export const CURRENT_ENV_CONFIG = ENV_CONFIG[CURRENT_ENV as keyof typeof ENV_CONFIG];

// API配置
export const API_CONFIG = {
  // API基础地址 - 使用相对路径，通过nginx代理访问
  BASE_URL: '', // 空字符串表示使用当前域名，配合nginx代理
  
  // 代理配置
  PROXY_TARGET: CURRENT_ENV_CONFIG.PROXY_TARGET,
  
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

// API端点
export const API_ENDPOINTS = {
  // 获取验证码
  GET_VERIFY_CODE: (phone: string) => `/admin/mobile/${phone}`,
  
  // 登录
  // LOGIN: (phone: string, code: string) => 
  //   `/admin/oauth/token?mobile=SMS@${phone}&code=${code}&grant_type=mobile`,
  
  LOGIN: (user_id: string, tenant_id: string) => 
    `/admin/oauth/token?mobile=OCL@${user_id}&id_token=AUTHMINIAPP@${tenant_id}&grant_type=mobile`,

  SHARE_LOGIN: (user_id: string, tenant_id: string, register_time: string, inviteUserId: string) => 
    `/admin/oauth/token?mobile=OCL@${user_id}:${register_time}&id_token=AUTHMINIAPP@${tenant_id}&grant_type=mobile&inviteUserId=${inviteUserId}`,

  // 获取房间信息
  GET_SYSROOMSHARE: (co_creation_id: string) => `/admin/sysroomshare/${co_creation_id}`,

  // 获取房间信息
  GET_ROOM_INFO_BY_ROOM_ID: (room_id: string) => `/admin/room/query?id=${room_id}`,
  
  GET_MODEL_LIST: (user_id: string) => `/admin/model/list?user_id=${user_id}`,

  // 创建房间
  CREATE_ROOM: () => `/admin/room/create`,
  
  // 加入房间
  JOIN_ROOM: () => `/admin/roomUser/join`,
  
  // 获取衣服尺寸
  GET_CLOTHE_SIZE: (clothe_id: string) => `/admin/sysclotheextra/getSize/${clothe_id}`,
  
  // 获取衣服详情
  GET_CLOTHE_DETAIL: (clothe_id: string) => `/admin/clothe/detail?clotheId=${clothe_id}`,
  
  // 获取场景列表
  GET_SCENE_LIST: () => `/admin/sysscenario/listScenairo`,
  
  // 调度服务
  SCHEDULE: () => '/alloc/room_inst',

  // 检查token重复登录
  CHECK_LOGIN: (access_token: string) => `/admin/oauth/check_token?token=${access_token}`,
  
  // 创建分享
  CREATE_SYSROOMSHARE: () => `/admin/sysroomshare`,


  // 获取⽕⼭上传视频临时token
  GET_UPLOAD_VEDIO_TOKEN: () => `/admin/sys-file/uploadSt`,

  // 获取⽕⼭上传图片临时token
  GET_UPLOAD_IMAGE_TOKEN: () => `/admin/sys-file/uploadVodSt`,

  // 创建模型
  CREATE_MODEL: () => `/admin/model/createOrUpdate`,

  // 删除模型
  DELETE_MODEL: (model_id: string) => `/admin/model/delete/${model_id}`,

  // 上传动作视频
  UPLOAD_ACTION_VIDEO: () => `/admin/sysactions`,

  // 获取⽤⼾的⽣成动作列表（也就是历史）
  GET_ACTION_VIDEO_RESULT: (current: number, size: number) => `/admin/sysactions/pageByUser?current=${current}&size=${size}`,

  // 删除动作视频
  DELETE_ACTION_VIDEO: (action_id: string) => `/admin/sysactions/${action_id}`,

  // 生成AI视频
  GENERATE_AI_VIDEO: () => `/admin/sysaivideo/saveByUser`,

  // 获取AI视频
  GET_AI_VIDEO_RESULT: (id: string) => `/admin/sysaivideo/${id}`,

  // 获取AI视频列表（也就是历史）
  GET_AI_VIDEO_RESULT_LIST: (current: number, size: number) => `/admin/sysaivideo/pageByUser?current=${current}&size=${size}`,

  // 删除aigc视频
  DELETE_AI_VIDEO: (id: string) => `/admin/sysaivideo/removeUserVideoById/${id}`,
};

// RTC配置
export const RTC_CONFIG = {
  // RTC应用ID
  APP_ID: '643e46acb15c24012c963951',
  
  // RTC应用密钥
  APP_KEY: 'b329b39ca8df4b5185078f29d8d8025f',
  
  // RTC Token（可选，通常由服务器生成）
  DEFAULT_TOKEN: '001643e46acb15c24012c963951VgCfyhUFZyVuaHczbmgTADE5Mzk2MTM0MDM3NjIyNTM4MjUTADE3NTQwOTI4MDUzODk4MTk5MDYFAAAAdzNuaAEAdzNuaAIAdzNuaAMAdzNuaAQAAAAAACAACpiRwGwh6scuTIaSHiD5L/4/UVCPvs4bvNFWXLzg0w8='
};

// 调度服务配置
export const SCHEDULE_CONFIG = {
  // 签名密钥
  SECRET_KEY: 'nDQ5EVbQUiDSYpOz',
  
  // 默认优先级IP列表
  DEFAULT_PRIORITY_IPS: ["14.103.136.236", "120.245.126.162"],
  
  // 默认WebSocket URL
  DEFAULT_WS_URL: CURRENT_ENV_CONFIG.DEFAULT_WS_URL,
  
  // 测试用的固定参数（仅用于测试）
  TEST_PARAMS: {
    RAND: 21731296,
    TS: 1751856205,
    SIGNATURE: '389a7927b97b71374e7d264f529460f2b6b5f989459ad512818fe57fccddf74a'
  }
};

// 默认测试数据
export const DEFAULT_TEST_DATA = {
  // 默认手机号
  DEFAULT_PHONE: '13500000805',
  
  // 默认用户ID
  DEFAULT_USER_ID: '1754092805389819906',
  
  // 默认共创ID
  DEFAULT_CO_CREATION_ID: '2',
  
  // 默认房间ID
  DEFAULT_ROOM_ID: '1939613403762253825'
};

// 服务器配置
export const SERVER_CONFIG = {
  // 服务器端口
  PORT: process.env.PORT || 3000,
  
  // 健康检查端点
  HEALTH_CHECK_ENDPOINT: '/health',
  
  // 日志端点
  LOG_ENDPOINT: '/api/log',
  LOGS_ENDPOINT: '/api/logs'
};

// 代理配置
export const PROXY_CONFIG = {
  // 调度服务代理
  SCHEDULE: {
    TARGET: CURRENT_ENV_CONFIG.PROXY_TARGET,
    PATH_REWRITE: {
      '^/api/schedule': '/alloc/room_inst'
    }
  }
};

// 微信分享配置
export const WECHAT_CONFIG = {
  // 微信应用ID - 参考FixedDownloadPrompt.tsx中的配置
  APP_ID: 'wx57548bb90330c93e', // 使用FixedDownloadPrompt.tsx中的AppID
  
  // 微信应用密钥 - 用于获取access_token
  APP_SECRET: '07592fe655621b11af45dd30abea309e',
  
  // 默认分享配置
  DEFAULT_SHARE: {
    title: 'airU-3D试衣间',
    desc: '快来和我一起共创动画',
    link: 'https://dev-h5.ai1010.cn/home', // 使用固定的分享链接
    imgUrl: 'https://dev-h5.ai1010.cn/logo.png' // 使用项目logo作为分享图片
  }
};

// 导出默认配置
export default {
  ENV_CONFIG,
  CURRENT_ENV_CONFIG,
  API_CONFIG,
  API_ENDPOINTS,
  RTC_CONFIG,
  SCHEDULE_CONFIG,
  DEFAULT_TEST_DATA,
  SERVER_CONFIG,
  PROXY_CONFIG
}; 