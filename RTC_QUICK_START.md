# 🎥 RTC视频观看功能 - 快速开始

## 功能概述

基于火山引擎RTC SDK，实现了简化的视频观看功能。用户可以通过配置参数连接到RTC房间，观看其他用户发布的视频流，**不发布本地音视频**。

## 快速使用

### 1. 访问测试页面

在开发环境中，访问：`http://localhost:3000/rtc-video-test`

或者在页面右上角的测试链接面板中点击 "🎥 RTC视频测试"

### 2. 配置参数

填写以下参数：
- **App ID**: 火山引擎应用的App ID
- **App Key**: 火山引擎应用的App Key  
- **房间ID**: RTC房间ID
- **用户ID**: 当前用户ID

**注意**: 不需要填写Token，因为用户已经在API中加入了房间，RTC服务会自动跳过加入房间步骤。

### 3. 连接房间

点击"连接RTC房间"按钮，系统会自动：
- 初始化RTC引擎
- 跳过加入房间步骤（用户已在API中加入）
- 开始监听远程视频流

### 4. 观看视频

连接成功后，当房间内有其他用户发布视频流时，会自动显示在界面上。

## 核心文件

### 服务层
- `src/services/rtcVideoService.ts` - RTC视频服务核心逻辑
- 提供初始化、连接、订阅、播放等功能

### 组件层  
- `src/components/RTCVideoViewer.tsx` - 视频观看组件
- `src/components/RTCVideoExample.tsx` - 完整示例组件
- `src/pages/RTCVideoTest.tsx` - 测试页面

### 文档
- `RTC_VIDEO_GUIDE.md` - 详细使用指南
- `RTC_QUICK_START.md` - 快速开始指南

## 主要特性

✅ **只观看模式** - 不发布本地音视频流  
✅ **自动订阅** - 自动订阅房间内的视频流  
✅ **多用户支持** - 同时观看多个用户的视频  
✅ **实时状态** - 显示连接状态和用户变化  
✅ **错误处理** - 完整的错误处理和提示  
✅ **React集成** - 完整的React组件封装  

## 配置要求

### 火山引擎配置
1. 创建RTC应用，获取App ID和App Key
2. 用户已在API中加入房间，RTC服务会自动跳过加入房间步骤

### 浏览器要求
- 现代浏览器（Chrome、Firefox、Safari、Edge）
- 支持WebRTC
- 生产环境需要HTTPS

## 使用示例

```tsx
import RTCVideoViewer from './components/RTCVideoViewer';

const rtcConfig = {
  appId: 'your_app_id',
  appKey: 'your_app_key',
  roomId: 'your_room_id', 
  userId: 'your_user_id'
};

<RTCVideoViewer
  config={rtcConfig}
  onError={(error) => console.error('RTC错误:', error)}
  onUserJoin={(userId) => console.log('用户加入:', userId)}
  onUserLeave={(userId) => console.log('用户离开:', userId)}
  onStreamUpdate={(streams) => console.log('流更新:', streams)}
/>
```

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

3. **权限问题**
   - 检查浏览器是否允许WebRTC访问
   - 确认用户已在API中成功加入房间

### 调试信息

组件会在控制台输出详细的调试信息：
- 连接状态变化
- 用户加入/离开事件
- 流发布/取消发布事件
- 错误信息

## 下一步

1. 根据你的具体需求调整配置参数
2. 集成到你的应用中
3. 自定义UI样式和交互
4. 添加更多功能（如录制、截图等）

---

**注意**: 这是一个观看模式的RTC实现，不会发布本地音视频流。用户已在API中加入房间，RTC服务会自动跳过加入房间步骤。如果需要双向通话功能，需要修改配置中的 `isAutoPublish` 参数。 