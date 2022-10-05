import React from 'react';
import axios from 'axios';
import SearchMovie from '../components/SearchMovie';
import "./Home.css";
import "./Search.css";
import {naverMoviesApi, theMovieApi} from '../api';

class Search extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    value: "",
    name: ""
  };

  getSearchMovie = async () => {
    // alert('영화검색');
    console.log("영화검색");
    const search = this.state.value;

    try {
      if (search === "") {
        this.setState({movies: [], isLoading: false})
      } else {
        
        // // 네이버 검색 api
        // const {data: {items}} = await naverMoviesApi.search(search);
        // this.setState({movies: items, isLoading: false});
        
        // 더 무비 api 검색 api
        // const {data:{results}} = await theMovieApi.search(search);
        const {data:{results}} = await theMovieApi.search(search);
        console.log('데이터 / '+ results[0].title);

        this.setState({movies: results, isLoading: false});

        
        
      }
    } 
    // 배포시 사용소스
    catch (error) {
      console.log('에러코드 출력 : '+error);
      const req = {re_search:search} // 검색어
      // ============네이버============//
      axios.get('http://127.0.0.1:80/api.php', {
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

  componentDidMount() {
    this.getSearchMovie();
  };

  handleChange = (e : any) => {
    //console.log(e.type + ":", e.target.value);
    this.setState({value: e.target.value});
  };

  handleSubmit = (e : any) => {
    e.preventDefault();
    this.getSearchMovie();
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
                  <div className="px-3">
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
                      {movies.map(movie => (<SearchMovie key={movie.id} id={movie.id} release_date={movie.release_date} title={movie.title} poster_path={movie.poster_path} popularity={movie.popularity}/>))}
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
