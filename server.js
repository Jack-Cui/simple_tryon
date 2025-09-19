const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 9998; // 使用新端口，避免与 tryon 项目冲突

// 中间件
app.use(cors());
app.use(express.json());

// 存储日志的数组
let logs = [];

// 日志接收端点
app.post('/api/log', (req, res) => {
  const logData = req.body;
  const timestamp = new Date().toLocaleString('zh-CN');
  
  // 格式化日志输出
  const logMessage = `[${timestamp}] [${logData.level.toUpperCase()}] ${logData.message}`;
  
  // 控制台输出
  console.log('\n' + '='.repeat(80));
  console.log(logMessage);
  
  if (logData.data) {
    console.log('数据:', JSON.stringify(logData.data, null, 2));
  }
  
  if (logData.url) {
    console.log('URL:', logData.url);
  }
  
  if (logData.params && Object.keys(logData.params).length > 0) {
    console.log('URL参数:', logData.params);
  }
  
  // 特别标记co_creation_id
  if (logData.params && logData.params.co_creation_id) {
    console.log('🎯 检测到co_creation_id:', logData.params.co_creation_id);
  }
  
  console.log('='.repeat(80));
  
  // 存储日志
  logs.push({
    ...logData,
    serverTimestamp: timestamp
  });
  
  // 限制日志数量，避免内存溢出
  if (logs.length > 1000) {
    logs = logs.slice(-500);
  }
  
  res.status(200).json({ success: true, message: '日志已记录' });
});

// 获取所有日志的端点
app.get('/api/logs', (req, res) => {
  res.json(logs);
});

// 清除日志的端点
app.delete('/api/logs', (req, res) => {
  logs = [];
  console.log('🗑️ 所有日志已清除');
  res.json({ success: true, message: '日志已清除' });
});

// 健康检查端点
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    logCount: logs.length 
  });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`🚀 Simple Tryon 日志服务器已启动，端口: ${PORT}`);
  console.log(`📝 日志接收端点: http://localhost:${PORT}/api/log`);
  console.log(`📋 日志查看端点: http://localhost:${PORT}/api/logs`);
  console.log(`💚 健康检查端点: http://localhost:${PORT}/health`);
  console.log('='.repeat(80));
});

// 优雅关闭
process.on('SIGINT', () => {
  console.log('\n🛑 正在关闭日志服务器...');
  process.exit(0);
}); 