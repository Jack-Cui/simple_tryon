# RTC视频观看功能使用指南

## 概述

本项目集成了火山引擎RTC SDK，提供了简化的视频观看功能。用户可以通过配置参数连接到RTC房间，观看其他用户发布的视频流。

## 功能特点

- ✅ 只观看视频，不发布本地音视频流
- ✅ 自动订阅房间内的视频流
- ✅ 支持多用户视频流同时观看
- ✅ 实时显示用户加入/离开状态
- ✅ 错误处理和重连机制
- ✅ 简洁的React组件接口

## 快速开始

### 1. 安装依赖

项目已包含火山引擎RTC SDK：
```bash
npm install @volcengine/rtc
```

### 2. 基本使用

```tsx
import React from 'react';
import RTCVideoViewer from './components/RTCVideoViewer';
import { RTCVideoConfig } from './services/rtcVideoService';

const App: React.FC = () => {
  const rtcConfig: RTCVideoConfig = {
    appId: 'your_app_id',
    appKey: 'your_app_key', 
    roomId: 'your_room_id',
    userId: 'your_user_id'
  };

  return (
    <RTCVideoViewer
      config={rtcConfig}
      onError={(error) => console.error('RTC错误:', error)}
      onUserJoin={(userId) => console.log('用户加入:', userId)}
      onUserLeave={(userId) => console.log('用户离开:', userId)}
      onStreamUpdate={(streams) => console.log('流更新:', streams)}
    />
  );
};
```

### 3. 使用示例组件

项目提供了完整的示例组件 `RTCVideoExample`，包含配置界面和视频观看功能：

```tsx
import RTCVideoExample from './components/RTCVideoExample';

// 在你的应用中使用
<RTCVideoExample />
```

## 配置参数说明

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| appId | string | ✅ | 火山引擎应用ID |
| appKey | string | ✅ | 火山引擎应用密钥 |
| roomId | string | ✅ | RTC房间ID |
| userId | string | ✅ | 用户ID |

## 事件回调

| 事件 | 参数 | 说明 |
|------|------|------|
| onError | error: any | RTC连接或操作错误 |
| onUserJoin | userId: string | 用户加入房间 |
| onUserLeave | userId: string | 用户离开房间 |
| onStreamUpdate | streams: RemoteStream[] | 远程流列表更新 |

## 服务接口

### RTCVideoService

主要的RTC服务类，提供以下方法：

```tsx
import { rtcVideoService } from './services/rtcVideoService';

// 初始化
await rtcVideoService.initialize(config);

// 跳过加入房间（用户已在API中加入）
// await rtcVideoService.joinRoom();

// 设置远程视频播放器
await rtcVideoService.setRemoteVideoPlayer(userId, domId);

// 获取远程流列表
const streams = rtcVideoService.getRemoteStreams();

// 离开房间
await rtcVideoService.leaveRoom();

// 销毁引擎
rtcVideoService.destroy();
```

## 获取火山引擎配置

### 1. 创建火山引擎应用

1. 登录火山引擎控制台
2. 创建RTC应用
3. 获取App ID和App Key

### 2. 用户已在API中加入房间

用户已经在API中加入了房间，RTC服务会自动跳过加入房间步骤，直接开始订阅视频流。

## 注意事项

1. **房间状态**: 确保用户已在API中成功加入房间
2. **网络环境**: 确保网络连接稳定，支持WebRTC
3. **浏览器兼容**: 支持现代浏览器（Chrome、Firefox、Safari、Edge）
4. **HTTPS要求**: 生产环境需要使用HTTPS协议
5. **设备权限**: 观看模式不需要摄像头和麦克风权限

## 故障排除

### 常见问题

1. **连接失败**
   - 检查App ID是否正确
   - 确认网络连接正常
   - 查看浏览器控制台错误信息

2. **看不到视频**
   - 确认房间内有其他用户发布视频流
   - 检查浏览器是否支持WebRTC
   - 查看自动播放权限设置

3. **音频问题**
   - 检查浏览器音频权限
   - 确认系统音量设置

### 调试信息

组件会在控制台输出详细的调试信息，包括：
- 连接状态
- 用户加入/离开事件
- 流发布/取消发布事件
- 错误信息

## 扩展功能

### 自定义视频播放器

你可以自定义视频播放器的样式和行为：

```tsx
// 自定义DOM ID
const customDomId = 'my-custom-video-player';

// 设置远程视频播放器
await rtcVideoService.setRemoteVideoPlayer(userId, customDomId);
```

### 多房间支持

可以创建多个RTCVideoService实例来支持多房间：

```tsx
import { RTCVideoService } from './services/rtcVideoService';

const room1Service = new RTCVideoService();
const room2Service = new RTCVideoService();

// 分别初始化不同房间
await room1Service.initialize(config1);
await room2Service.initialize(config2);
```

## 更新日志

- v1.0.0: 初始版本，支持基本的视频观看功能
- 支持自动订阅远程流
- 提供完整的错误处理
- 包含React组件和示例代码 