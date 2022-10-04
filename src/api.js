import axios from 'axios';

const ID_KEY = 'Zi9WpguyJ8KQZYl98axI';
const SECRET_KEY = 'Hagnu1SX8I';
//
// const ID_KEY = '';
// const SECRET_KEY = '';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'X-Naver-Client-Id': ID_KEY,
    'X-Naver-Client-Secret': SECRET_KEY,
    'Access-Control-Allow-Origin': '*'
  }
});

// 더무비 api

const api2 = axios.create({
  baseURL: '/themovie',
  headers:{
    'api_key':'a5d1d820e06a9d4f3f6454da6e078d9d',
    'language':'ko-KR'
  }
});

// 네이버 api
export const naverMoviesApi = {
  search: word => api.get('/v1/search/movie.json', {
    params: {
      query: word,
      display: 20
    }
  })
};



export const theMovieApi = {
  search:word => api2.get('/3/search/movie',{
    params: {
      query:word
    }
  })
}




// newApi = async()=> {
//
//   try {
//     console.log("연결성공");
//     const n_api = axios.create({
//       baseURL: 'https://openapi.naver.com',
//       headers: {
//         'X-Naver-Client-Id': 'Zi9WpguyJ8KQZYl98axI',  // 네이버 api 계정
//         'X-Naver-Client-Secret': 'Hagnu1SX8I', // 네이버 api 패스워드
//         'Access-Control-Allow-Origin': '*'
//       }
//     });
//
//     const movieApi = {
//     search: word => n_api.get('/v1/search/movie.json', {
//       params: {
//         query: word,
//         display: 20
//       }
//     })
//   }
//
//   } catch(error) {
//     console.log('에러출력'+error);
//   }
// }
