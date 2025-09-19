# Simple Tryon 项目

这是从 `tryon` 项目复制而来的简化版本，主要特点：

## 功能特点

1. **无登录界面**：直接通过URL参数自动登录
2. **独立端口**：使用端口9998，与原始tryon项目(端口9999)隔离
3. **相同域名**：使用 `dev-h5.ai1010.cn` 域名，但通过 `/simple` 路径访问

## URL格式

访问URL格式：
```
https://dev-h5.ai1010.cn/simple?co_creation_id=3&phone=13500003000&verfiy_code=8888
```

### 参数说明
- `co_creation_id`: 共创ID（必需）
- `phone`: 手机号（必需）
- `verfiy_code`: 验证码（必需，注意原URL中的拼写错误）

## 部署说明

### 1. 构建项目
```bash
cd /data/project/simple_tryon
npm install
npm run build
```

### 2. 启动服务
```bash
# 启动Simple Tryon服务（端口9998）
node server.js

# 或者使用部署脚本
./deploy.sh
```

### 3. 配置Nginx
nginx配置已更新，包含：
- `/simple` 路径映射到 simple_tryon 项目
- `/simple/api/` 代理到 localhost:9998
- 保持与原始tryon项目的兼容性

## 服务隔离

- **原始tryon项目**: 端口9999，路径 `/`
- **Simple Tryon项目**: 端口9998，路径 `/simple`
- **相同域名**: `dev-h5.ai1010.cn`

## 自动登录流程

1. 用户访问带有参数的URL
2. 应用自动解析URL参数（phone, verfiy_code, co_creation_id）
3. 自动调用登录API
4. 登录成功后直接进入主应用界面
5. 如果参数缺失或登录失败，显示错误信息

## 开发环境

```bash
# 启动开发服务器
npm start

# 访问地址
http://localhost:3000?co_creation_id=3&phone=13500003000&verfiy_code=8888
```

## 日志查看

Simple Tryon服务日志：
```bash
# 查看服务日志
tail -f simple_tryon.log

# 查看API日志
curl http://localhost:9998/api/logs
```

## 注意事项

1. 确保端口9998没有被其他服务占用
2. nginx配置需要重新加载才能生效
3. 如果登录失败，检查URL参数是否正确
4. 服务重启后需要重新访问URL进行登录
