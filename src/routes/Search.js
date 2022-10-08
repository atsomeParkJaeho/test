import React from 'react';
import axios from 'axios';
import SearchMovie from '../components/SearchMovie';
import "./Home.css";
import "./Search.css";
import {koficApi, naverMoviesApi, theMovieApi} from '../api';
import {Link} from "react-router-dom";

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
        // 일별 박스오피스
        const {data:{boxOfficeResult:{dailyBoxOfficeList}}} = await koficApi.today;
        this.setState({movies: dailyBoxOfficeList, isLoading: false});

      } else {
        // 더무비 api
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
                            <input className="form-control" type="text" onChange={this.handleChange} placeholder="영화를 검색해 보세요."/>
                            <a href="" className='btn btn-dark'>검색</a>
                          </div>
                      </div>
                  </div>
                </div>
                {/*반복문 구간*/}
                <section className="section bg-gray-100">
                    <div className="container">


                      {(this.state.value === '') ? (
                          <div className="row section-heading justify-content-center text-center">
                            <div className="col-lg-8 col-xl-7">
                              <label className="border-bottom border-2 h6 text-primary border-secondary">박스오피스</label>
                              <h3 className="h1 m-0">현재 상영작</h3>
                            </div>
                          </div>
                      ) : (
                          <div className="row section-heading justify-content-center text-center">
                            <div className="col-lg-8 col-xl-7">
                              <label className="border-bottom border-2 h6 text-primary border-secondary">검색 결과</label>
                              <h3 className="h1 m-0">"{movies.length}"개의 영화가 검색되었습니다.</h3>
                            </div>
                          </div>
                      )}



                      {/*===============================출력 구간===========================*/}

                      {(this.state.value === '') ? (
                          // 일별 박스오피스 출력
                        <div className="row">
                          {
                            movies.map(list => (
                              <div className="col-md-6 col-lg-3 mb-3">
                                <div className="position-relative">
                                  <div className="">
                                    <img className="rounded" src="" title="" alt=""/>
                                  </div>
                                  <div className="pt-4">
                                    <span className="small d-block">예매순위 : {list.rank}</span>
                                    <span className="small d-block">개봉일 : {list.openDt}</span>
                                    <span className="small d-block">관객수 : {list.audiAcc} 명</span>
                                    <h5 className="pt-2">
                                      <Link className="text-dark" to="">제목 : {list.movieNm}</Link>
                                    </h5>
                                    <p className="text-truncate"></p>
                                    <button className="btn btn-sm btn-primary stretched-link" >더보기</button>
                                  </div>
                                </div>
                              </div>
                          ))}
                        </div>
                      ) : (
                        <div className="row">
                        {/*// 검색 결과가 있을 경우*/}
                        {movies.map(movie=>(
                          <div className="col-md-6 col-lg-3 mb-3">
                            <div className="position-relative">
                              <div className="">
                                <img className="rounded" src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} title="" alt=""/>
                              </div>
                              <div className="pt-4">
                                <span className="small">개봉일 : {movie.release_date}</span>
                                <h5 className="pt-2">
                                  <Link className="text-dark" to="">제목 : {movie.title}</Link>
                                </h5>
                                <p className="text-truncate">{movie.overview}</p>
                                <button className="btn btn-sm btn-primary stretched-link" >더보기</button>
                              </div>
                            </div>
                          </div>
                          ))}
                      </div>
                      )}
                      {/*===============================출력 구간===========================*/}
                    </div>
                </section>

                {/*반복문 구간 끝*/}

            </div>
          </form>
            )
      }
    </section>);
  }
}

export default Search;
