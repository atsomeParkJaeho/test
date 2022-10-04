import React from 'react';
import axios from 'axios';
import SearchMovie from '../components/SearchMovie';
import "./Home.css";
import "./Search.css";
import {naverMoviesApi} from '../api';

class Search extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    value: "",
    name: ""
  };

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



  // getSearchMovie = async () => {
  //   const ID_KEY = 'Zi9WpguyJ8KQZYl98axI';
  //   const SECRET_KEY = 'Hagnu1SX8I';
  //   const search = this.state.value;
  //   try {
  //     if (search === "") {
  //       this.setState({movies: [], isLoading: false})
  //     } else {
  //       const {data: {
  //         items
  //       }} = await axios.get('/api/v1/search/movie.json',{
  //         params:{
  //           query: search,
  //           display: 20
  //         },
  //         headers: {
  //           'X-Naver-Client-Id': ID_KEY,
  //           'X-Naver-Client-Secret': SECRET_KEY
  //         }
  //       });
  //
  //       this.setState({movies: items, isLoading: false});
  //     }
  //   } catch (error) {
  //     console.log('에러출력'+error);
  //   }
  // };

  getSearchMovie = async () => {
    // alert('영화검색');
    console.log("영화검색");
    const search = this.state.value;

    try {
      if (search === "") {
        this.setState({movies: [], isLoading: false})
      } else {
        const {data: {items}} = await naverMoviesApi.search(search);
        this.setState({movies: items, isLoading: false});
        // axios.post('http://127.0.0.1:80/api.php',{/*검색내용 넣기*/}).then((res)=>{
        //
        //   if(res) {
        //     alert("연결성공"+res);
        //   }
        //
        // });
      }
    } 
    // 배포시 사용소스
    catch (error) {
      console.log('에러코드 출력 : '+error);
      //const req = {re_search:search} // 검색어
      // ============네이버============//
      axios.post('http://127.0.0.1:80/api.php', {
        re_search:search
      }).then((res)=>{

        if(res) {
          alert("연결성공"+res.data.items);
          console.log(search);
          console.log(res.data);
        }
      });

      // ============더무비=================//


      // ============영화진흥위원회============//
      
    }
  };

  // node server Proxy setting
  // getTest = async () => {
  //   console.log('네이버 영화 검색');
  //   const search = this.state.value;
  //   try {
  //     if (search === "") {
  //       this.setState({movies: [], isLoading: false})
  //     } else {
  //       const {data: {
  //           items
  //         }} = await axios.get('http://localhost:3001/search',{
  //           params:{
  //             query: search
  //           }
  //         });
  //       console.log(items);
  //       this.setState({movies: items, isLoading: false});
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };



  componentDidMount() {
    this.getSearchMovie();
    // this.getTest();
    // this.Rotten();
    // this.newApi();
  };

  handleChange = (e : any) => {
    //console.log(e.type + ":", e.target.value);
    this.setState({value: e.target.value});
  };

  handleSubmit = (e : any) => {
    //console.log(e.type + ":", this.state.value);
    e.preventDefault();
    this.getSearchMovie();
    // this.getTest();
  };

  render() {
    const {movies, isLoading, name} = this.state;

    return (<section className="">
      {
        isLoading
          ? (<div className="loader">
            <span className="loader__text">Loading..{this.state.name}</span>
          </div>)
          : (

          <form onSubmit={this.handleSubmit}>
            <div className='content_wrap'>
                <div className="input_div bg-primary main_search">
                  <div>
                      <h1 className='h55 search_title'>KMP MOVIE DB</h1>
                      <div className='search_box'>
                          <div className='input-group'>
                            <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} placeholder="영화를 검색해 보세요."/>
                            <a href="" className='btn btn-dark'>검색</a>
                          </div>
                      </div>
                  </div>
                </div>
                <div className='search_wrap'>
                    <div className="movies row">
                      {movies.map(movie => (<SearchMovie key={movie.link} id={movie.link} year={movie.pubDate} title={movie.title} poster={movie.image} rating={movie.userRating} director={movie.director} actor={movie.actor}/>))}
                    </div>
                </div>
            </div>
          </form>
            )
      }
    </section>);
  }
}

export default Search;
