const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  console.log("proxy");
  app.use(
      createProxyMiddleware( '/api', {
          target: 'https://openapi.naver.com',
          changeOrigin: true,
          // 하단 처리는 필수로 해주어야 한다. 아래의 내용이 없으면 url 경로에
          // api가 추가되어 경로를 찾을 수 없어진다.
          pathRewrite:{
            '^/api/':'/'
          }
      }),

      createProxyMiddleware( '/php', {
          target: 'http://127.0.0.1:80',
          changeOrigin: true,
          // 하단 처리는 필수로 해주어야 한다. 아래의 내용이 없으면 url 경로에
          // api가 추가되어 경로를 찾을 수 없어진다.
          pathRewrite:{
              '^/php/':'/'
          }
      }),

      createProxyMiddleware( '/themovie', {
          target: 'https://api.themoviedb.org',
          changeOrigin: true,
          // 하단 처리는 필수로 해주어야 한다. 아래의 내용이 없으면 url 경로에
          // api가 추가되어 경로를 찾을 수 없어진다.
          pathRewrite:{
              '^/themovie/':'/'
          }
      }),

      // createProxyMiddleware( '/board/**', {
      //     target: 'http://ec2-15-164-100-174.ap-northeast-2.compute.amazonaws.com:3100/',
      //     changeOrigin: true
      // })
      // createProxyMiddleware( '/search', {
      //     target: 'http://localhost:3001/',
      //     changeOrigin: true
      // })
  )
};
