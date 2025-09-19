#!/bin/bash

echo "开始部署 Simple Tryon React应用到nginx..."

# 1. 安装依赖
echo "安装依赖..."
npm install

# 2. 构建项目
echo "构建项目..."
npm run build

# 3. 检查构建是否成功
if [ ! -d "build" ]; then
    echo "构建失败，build目录不存在"
    exit 1
fi

# 检查关键文件是否存在
if [ ! -f "build/index.html" ]; then
    echo "构建失败，index.html文件不存在"
    exit 1
fi

if [ ! -d "build/static" ]; then
    echo "构建失败，static目录不存在"
    exit 1
fi

echo "构建成功！"

# 4. 启动 Simple Tryon 服务
echo "启动 Simple Tryon 服务..."
# 检查服务是否已经在运行
if pgrep -f "node.*server.js.*9998" > /dev/null; then
    echo "Simple Tryon 服务已经在运行，重启服务..."
    pkill -f "node.*server.js.*9998"
    sleep 2
fi

# 启动服务
nohup node server.js > simple_tryon.log 2>&1 &
echo "Simple Tryon 服务已启动，端口: 9998"

# 5. 备份当前nginx配置
echo "备份当前nginx配置..."
sudo cp /etc/nginx/sites-available/tryon /etc/nginx/sites-available/tryon.backup.$(date +%Y%m%d_%H%M%S)

# 6. 复制nginx配置到系统目录（需要sudo权限）
echo "配置nginx..."
sudo cp ../nginx.conf /etc/nginx/sites-available/tryon

# 6.1 删除冲突的配置文件
echo "删除冲突的nginx配置文件..."
sudo rm -f /etc/nginx/conf.d/tryon.conf

# 6. 测试nginx配置
echo "测试nginx配置..."
sudo nginx -t

if [ $? -eq 0 ]; then
    echo "nginx配置测试通过"
    # 7. 重新加载nginx配置（不重启，更安全）
    echo "重新加载nginx配置..."
    sudo nginx -s reload
    
    if [ $? -eq 0 ]; then
        echo "nginx配置重新加载成功"
        echo "部署完成！"
    else
        echo "nginx配置重新加载失败，尝试使用systemctl reload"
        sudo systemctl reload nginx
        if [ $? -eq 0 ]; then
            echo "nginx配置重新加载成功"
            echo "部署完成！"
        else
            echo "nginx配置重新加载失败，请检查配置"
            # 恢复备份配置
            echo "恢复备份配置..."
            sudo cp /etc/nginx/sites-available/tryon.backup.* /etc/nginx/sites-available/tryon
            sudo nginx -s reload
            exit 1
        fi
    fi
else
    echo "nginx配置测试失败，请检查配置文件"
    # 恢复备份配置
    echo "恢复备份配置..."
    sudo cp /etc/nginx/sites-available/tryon.backup.* /etc/nginx/sites-available/tryon
    exit 1
fi 