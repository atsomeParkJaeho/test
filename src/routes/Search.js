import React from 'react';
import axios from 'axios';
import SearchMovie from '../components/SearchMovie';
import "./Home.css";
import "./Search.css";
import {Link} from "react-router-dom";
import {koficApi, theMovieApi} from "../api";
import TodayBoxoffice from "../boxoffice/TodayBoxoffice";

const datToday = new Date();
const year = datToday.getFullYear();
const month = ('0' + (datToday.getMonth()+1)).slice(-2);
const day =   ('0' + (datToday.getDate()-1)).slice(-2);
const today = year + '' + month  + '' + day;


class Search extends React.Component {
  state = {
    isLoading: true,
    movies: [],         // 검색영화 출력
    todayBoxoffic :[],  // 검색영화 없을시 일별 박스오피스 출력
    value: "",
    name: ""
  };

  getSearchMovie = async () => {
    // alert('영화검색');
    console.log("영화검색");
    const search = this.state.value;

    try {


      if(search === "") {
        // 영화 진흥위원회
        axios.get('/atnode/api/UTIL_main.php',{
          params:{
            act_type:"today",
          }
        }).then((res) =>{
          if(res) {
            const {data:{boxOfficeResult:{dailyBoxOfficeList}}} = res;
            this.setState({todayBoxoffic: dailyBoxOfficeList, isLoading: false});
          }
        });


      } else {

        axios.get('/atnode/api/UTIL_main.php',{
          params:{
            act_type:"search",
            search:search
          }
        }).then((res) =>{
          if(res) {
            console.log(res);
            const {data:{results}} = res;
            this.setState({movies: results, isLoading: false});
          }
        });

      }



    }


    // 배포시 사용소스
    catch (error) {

      if(search === "") {
        // 영화 진흥위원회
        axios.get('/api/UTIL_main.php',{
          params:{
            act_type:"today",
          }
        }).then((res) =>{
          if(res) {
            const {data:{boxOfficeResult:{dailyBoxOfficeList}}} = res;
            this.setState({todayBoxoffic: dailyBoxOfficeList, isLoading: false});
          }
        });


      } else {

        axios.get('/api/UTIL_main.php',{
          params:{
            act_type:"search",
            search:search
          }
        }).then((res) =>{
          if(res) {
            console.log(res);
            const {data:{results}} = res;
            this.setState({movies: results, isLoading: false});
          }
        });

      }

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
    const {movies, todayBoxoffic, isLoading, name} = this.state;

    return (<section className="">
      {
        isLoading
          ? (<div className="loader">
            <span className="loader__text">Loading..{this.state.name}</span>
          </div>)
          : (
          <div className="wrapper">
              <form onSubmit={this.handleSubmit}>
              <section className="bg-primary effect-section page-heading py-10">
                  <div className="mask bg-primary opacity-8"></div>
                  <div className="container position-relative">
                      <div className="row justify-content-center">
                          <div className="col-lg-8 text-center">
                              <h2 className="text-white h1 mb-4">KMP MOVIE DB</h2>

                              <div className='input-group'>
                                  <input className="form-control" type="text" onChange={this.handleChange} placeholder="영화를 검색해 보세요."/>
                                  <a href="" className='btn btn-dark'>검색</a>
                              </div>

                          </div>
                      </div>
                  </div>
              </section>
              <section className="section">

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

                      {/*반복문 구간*/}
                      {(this.state.value === '') ? (
                          <div className="row">
                            {todayBoxoffic.map(list=>(
                              <TodayBoxoffice
                                  key={list.movieNm}
                                  audiAcc={list.audiAcc}        /* 관객수 */
                                  rank={list.rank}              /* 순위 */
                                  openDt={list.openDt}        /* 개봉일 */
                                  movieNm={list.movieNm}      /* 영화명 */
                              />
                            ))}
                          </div>
                      ) : (
                          <div className="row">
                            {movies.map(movie=>(
                              <div className="col-md-6 col-lg-4 mb-5">
                                <div className="hover-top card shadow-only-hover">
                                  <div className="img_box position-relative">
                                    <img className="rounded" src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} title="" alt=""/>
                                  </div>
                                  <div className="card-body p-3">
                                    <h5 className="mb-3">
                                      <Link className="text-dark stretched-link" to="#">
                                        {movie.title}
                                      </Link>
                                    </h5>
                                    <p className="text-truncate">{movie.overview}</p>
                                    <div className="nav small border-top pt-3">
                                      <Link className="me-2 text-body" to="#"><i className="bi-calendar me-1"></i>개봉일 : {movie.release_date}</Link>
                                      <Link className="text-body fw-600 ms-auto" to="#">더보기<i className="bi-chevron-right"></i></Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                      )}
                      {/*반복문 구간 끝*/}

                  </div>
              </section>
              </form>
          </div>
            )
      }
    </section>);
  }
}

export default Search;
