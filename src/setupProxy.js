const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // 代理调度服务请求
  app.use(
    '/api/schedule',
    createProxyMiddleware({
      target: 'http://dev_gw.ai1010.cn',
      changeOrigin: true,
      pathRewrite: {
        '^/api/schedule': '/alloc/room_inst'
      },
      onProxyReq: (proxyReq, req, res) => {
        console.log('[代理] 调度请求:', req.method, req.url);
      },
      onProxyRes: (proxyRes, req, res) => {
        console.log('[代理] 调度响应:', proxyRes.statusCode);
      },
      onError: (err, req, res) => {
        console.error('[代理] 调度服务错误:', err.message);
      }
    })
  );
}; 