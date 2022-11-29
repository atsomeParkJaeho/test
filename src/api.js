import axios from 'axios';

const ID_KEY = 'Zi9WpguyJ8KQZYl98axI';
const SECRET_KEY = 'Hagnu1SX8I';
//
// const ID_KEY = '';
// const SECRET_KEY = '';

const datToday = new Date();
const year = datToday.getFullYear();
const month = ('0' + (datToday.getMonth()+1)).slice(-2);
const day =   ('0' + (datToday.getDate()-1)).slice(-2);
const today = year + '' + month  + '' + day;

console.log(today);


const api = axios.create({
  baseURL: '/api',
  headers: {
    'X-Naver-Client-Id': ID_KEY,
    'X-Naver-Client-Secret': SECRET_KEY,
    'Access-Control-Allow-Origin': '*'
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

// 더무비 api
const api2 = axios.create({
  baseURL: '/themovie'
});

// 더 무비 영화 검색 목록 출력
export const theMovieApi = {
  search:word => api2.get('/3/search/movie',{
    params: {
      query       : word,
      api_key     : 'a5d1d820e06a9d4f3f6454da6e078d9d',
      language    : 'ko-KR'
    }
  })
}

// 영화진흥위원회 api

const kofic = axios.create({
  baseURL: '/kofic'
});

// 영화 진흥위원회 일별 박스오피스 출력 목록
export const koficApi = {
  today:kofic.get('/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json', {
    params: {
      targetDt: '' + today + '',
      key: '0aee6581103f5f0450c80174b42fcf6b',
    }
  })
}

console.log(koficApi);
console.log(theMovieApi);


// 테스트

axios.get('/atnode/api/UTIL_movie_gross.php',{
  params:{
    act_type:"movie_gross",
  }
}).then((res)=>{
  if(res) {
    console.log(res.data);
  }
});



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
