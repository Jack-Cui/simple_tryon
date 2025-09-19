# API架构说明

## 项目结构

```
src/
├── config/
│   └── api.ts          # API配置文件，包含endpoint和请求头配置
├── services/
│   └── api.ts          # API服务层，封装HTTP请求方法
├── types/
│   └── api.ts          # TypeScript类型定义
└── pages/
    └── Login/
        ├── index.tsx   # 登录页面组件
        └── index.css   # 登录页面样式
```

## 架构设计

### 1. 配置层 (config/api.ts)
- 集中管理API基础地址和请求头配置
- 定义API端点，支持参数化
- 便于环境切换和配置管理

### 2. 服务层 (services/api.ts)
- 封装通用的HTTP请求方法
- 提供业务相关的API方法
- 统一的错误处理和响应解析

### 3. 类型层 (types/api.ts)
- 定义API响应的TypeScript类型
- 提供类型安全的开发体验
- 便于代码维护和重构

## 使用方法

### 获取验证码
```typescript
import { authAPI } from '../services/api';

const response = await authAPI.getVerifyCode('13800138000');
if (response.ok) {
  console.log('验证码发送成功');
}
```

### 用户登录
```typescript
import { authAPI } from '../services/api';

const response = await authAPI.login('13800138000', '123456');
if (response.ok) {
  const loginData = authAPI.parseLoginResponse(response);
  if (loginData?.access_token) {
    localStorage.setItem('access_token', loginData.access_token);
  }
}
```

## API端点

- **获取验证码**: `GET /admin/mobile/{phone}`
- **用户登录**: `POST /admin/oauth/token?mobile=SMS@{phone}&code={code}&grant_type=mobile`

## 特性

- ✅ 统一的错误处理
- ✅ 类型安全的API调用
- ✅ 可复用的服务层
- ✅ 集中的配置管理
- ✅ 响应数据解析
- ✅ 加载状态管理
- ✅ 用户友好的错误提示 