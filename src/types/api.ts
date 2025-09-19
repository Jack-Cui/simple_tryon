// API响应类型定义
export interface ApiResponse {
  status: number;
  data: string;
  ok: boolean;
}

// 登录响应类型
export interface LoginResponse {
  access_token?: string;
  token_type?: string;
  refresh_token?: string;
  expires_in?: number;
  scope?: string;
  user_id?: string;
  co_creation_id?: string;
  [key: string]: any;
}

// 验证码响应类型 - 匹配服务器实际返回格式
export interface VerifyCodeResponse {
  code?: number;
  msg?: string;
  data?: boolean | any;
  success?: boolean;
  message?: string;
  [key: string]: any;
}

// 房间信息响应类型
export interface RoomInfoResponse {
  data: {
    roomId: string;
    userId: string;
    clothId: string;
    scenarioId: string;
    actionId: string;
    [key: string]: any;
  };
  [key: string]: any;
}

// 衣服尺寸响应类型
export interface ClotheSizeResponse {
  code: number;
  data: number;
  message: string;
}

// 衣服详情响应类型
export interface ClotheDetailResponse {
  code: number;
  data: {
    id: string;
    name: string;
    classifyId: number;
    suitIds: string;
    [key: string]: any;
  };
  message: string;
}

// 服饰分类类型
export interface ClothesItem {
  classifyName: string;
  [key: string]: any;
}

// 创建房间响应类型
export interface CreateRoomResponse {
  data: {
    id: number;
    roomName?: string; // 添加房间名称字段
    clothesList?: ClothesItem[]; // 添加服饰列表字段
    [key: string]: any;
  };
  [key: string]: any;
}

// 加入房间响应类型
export interface JoinRoomResponse {
  data: any;
  [key: string]: any;
}

// 创建分享请求类型
export interface CreateSysRoomShareRequest {
  roomId: string;
  userId: string;
  extra1: string;
  extra2: string;
  clothId: string;
  actionId: string;
  scenarioId: string;
  user2Id: string | null;
  cloth2Id: string | null;
  action2Id: string | null;
  startT: number | null;
  endT: number | null;
  state: string;
  startT2: number | null;
  endT2: number | null;
  extra3: string | null;
  createTime: string | null;
  createBy: string;
  updateTime: string | null;
  updateBy: string;
  tenantId: string | null;
}

// 创建分享响应类型
export interface CreateSysRoomShareResponse {
  data: any;
  [key: string]: any;
}

// 进入舞台信息类型
export interface EnterStageInfo {
  AvatarId: number;
  UserId: string;
  MapName: string;
  Garments: {
    Garment1Id?: string;
    Garment1Size?: string;
    Garment2Id?: string;
    Garment2Size?: string;
    Garment3Id?: string;
    Garment3Size?: string;
  };
  // Animation: {
  //   animId: string;
  //   playRate: number;
  //   isLoop: boolean;
  // };
  Animation: null;
  Camera: boolean;
  Voice: boolean;
  isControl: boolean;
  startTime: number;
  endTime: number;
  Size: number;
  CustomModelUrl: string;
} 