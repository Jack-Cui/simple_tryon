# Nginx部署说明

## 概述
这个配置让你可以通过域名直接访问React应用的Home页面。

## 配置步骤

### 1. 修改域名
编辑 `nginx.conf` 文件，将 `your-domain.com` 替换为你的实际域名：

```bash
sed -i 's/your-domain.com/你的实际域名/g' nginx.conf
```

### 2. 自动部署
运行部署脚本：
```bash
./deploy.sh
```

### 3. 手动部署（如果自动部署失败）

#### 步骤1：构建项目
```bash
npm install
npm run build
```

#### 步骤2：配置nginx
```bash
# 复制配置文件
sudo cp nginx.conf /etc/nginx/sites-available/tryon

# 创建软链接
sudo ln -sf /etc/nginx/sites-available/tryon /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启nginx
sudo systemctl reload nginx
```

## 配置说明

### nginx.conf 主要配置项：

1. **根目录**：`root /data/project/tryon/build;`
   - 指向React构建后的静态文件目录

2. **路由处理**：`try_files $uri $uri/ /index.html;`
   - 支持React Router的客户端路由
   - 所有不存在的路由都返回index.html

3. **静态资源缓存**：
   - JS、CSS、图片等静态资源缓存1年
   - 提高访问速度

4. **Gzip压缩**：
   - 启用gzip压缩减少传输大小

## 访问测试

配置完成后，访问你的域名应该直接显示Home页面内容。

## 故障排除

1. **权限问题**：
   ```bash
   sudo chown -R www-data:www-data /data/project/tryon/build
   ```

2. **nginx配置测试**：
   ```bash
   sudo nginx -t
   ```

3. **查看nginx错误日志**：
   ```bash
   sudo tail -f /var/log/nginx/error.log
   ```

4. **检查nginx状态**：
   ```bash
   sudo systemctl status nginx
   ``` 