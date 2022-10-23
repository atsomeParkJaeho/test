const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  console.log("proxy");
  app.use(

      // 네이버 api
      createProxyMiddleware( '/api', {
          target: 'https://openapi.naver.com',
          changeOrigin: true,
          // 하단 처리는 필수로 해주어야 한다. 아래의 내용이 없으면 url 경로에
          // api가 추가되어 경로를 찾을 수 없어진다.
          pathRewrite:{
            '^/api/':'/'
          }
      }),
      // 더 무비 api
      createProxyMiddleware( '/themovie', {
          target: 'https://api.themoviedb.org',
          changeOrigin: true,
          // 하단 처리는 필수로 해주어야 한다. 아래의 내용이 없으면 url 경로에
          // api가 추가되어 경로를 찾을 수 없어진다.
          pathRewrite:{
              '^/themovie/':'/'
          }
      }),
      // 영화 진흥위원회 api
      createProxyMiddleware( '/kofic', {
          target: 'http://www.kobis.or.kr',
          changeOrigin: true,
          // 하단 처리는 필수로 해주어야 한다. 아래의 내용이 없으면 url 경로에
          // api가 추가되어 경로를 찾을 수 없어진다.
          pathRewrite:{
              '^/kofic/':'/'
          }
      }),

      // 로컬 배포용 api
      createProxyMiddleware( '/atnode', {
          target: 'http://atnode.atsomedemo.com',
          changeOrigin: true,
          // 하단 처리는 필수로 해주어야 한다. 아래의 내용이 없으면 url 경로에
          // api가 추가되어 경로를 찾을 수 없어진다.
          pathRewrite:{
              '^/atnode/':'/'
          }
      }),

  )
};
