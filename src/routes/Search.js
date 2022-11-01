import React from 'react';
import axios from 'axios';
import SearchMovie from '../components/SearchMovie';
import "./Home.css";
import "./Search.css";
import {Link} from "react-router-dom";
import {koficApi, theMovieApi} from "../api";
import TodayBoxoffice from "../components/TodayBoxoffice";

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
                          {todayBoxoffic.map(list => (
                              <TodayBoxoffice
                                  key={list.movieNm}
                                  audiAcc={list.audiAcc}        /* 관객수 */
                                  rank={list.rank}              /* 순위 */
                                  openDt={list.openDt}        /* 개봉일 */
                                  movieNm={list.movieNm}      /* 영화명 */
                              />
                              )
                            )
                          }
                        </div>
                      ) : (
                        <div className="row">
                        {/*// 검색 결과가 있을 경우*/}
                        {movies.map(movie=>(
                          <div className="col-md-6 col-lg-3 col-6 mb-5">
                            <div className="position-relative">
                              <div className="img_box position-relative">
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
