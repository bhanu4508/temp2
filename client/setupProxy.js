const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://keep-app-61yt.onrender.com/',
      changeOrigin: true,
    })
  );
};
