import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import TodayBoxoffice from "./TodayBoxoffice";

function Boxoffice() {

    console.log('박스오피스 페이지');

    // 로컬 스토리지 저장
    const histtory = useHistory();
    const inputValue = histtory.location.state;

    if(inputValue) {
        localStorage.setItem("Boxoffice",JSON.stringify(inputValue));
    }

    //================ 저장된 로컬스토리지 출력 ================
    const saved = JSON.parse(localStorage.getItem("Boxoffice"));
    const {lanMovie} = saved;

    const [MovieList, setMovieList] = useState([]);

    useEffect(()=>{
       axios.get('/api/UTIL_boxoffice.php',{
           params:{
               act_type     :'movie_boxoffice',
               repNationCd  :lanMovie, // 국적 선택
           }
       }).then((res)=>{
           if(res) {
               console.log('데이터 추출 / '+ res);
               const {boxOfficeResult:{dailyBoxOfficeList}} = res.data;
               setMovieList(dailyBoxOfficeList);
           }
       });
    },[]);

    console.log(MovieList);


    if(lanMovie == 'K') {
        //한국영화 출력
        console.log('한국영화 출력');
        return (
            <>
                {/*검색창*/}

                    <div className="input_div bg-primary py-10">
                        <div className="container">
                            <div className="px-3 d-flex justify-content-between align-items-center">
                                <h1 className='h35 search_title mb-0 pb-0'>KMP MOVIE DB</h1>
                                <div className='search_box'>
                                    <div className='input-group'>
                                        <input className="form-control" type="text" placeholder="영화를 검색해 보세요."/>
                                        <a href="" className='btn btn-dark'>검색</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {/*검색창끝*/}
                <section className="section">
                    <div className="container">
                        <div className="row section-heading justify-content-center text-center  wow fadeInUp">
                            <div className="col-lg-8 col-xl-6">
                                <h3 className="h1 bg-primary-after after-50px pb-3 mb-3">현재상영작 순위 (국내영화)</h3>
                                <div className="lead">전날 기준입니다.
                                </div>
                            </div>
                        </div>
                        <div className="row gy-4">
                            {/*===============반복문 구간===================*/}
                            {MovieList.map(list=>(
                                <TodayBoxoffice key={list.movieNm} rank={list.rank} openDt={list.openDt} audiAcc={list.audiAcc} movieNm={list.movieNm}/>
                            ))}
                            {/*=============반복문 구간 끝=====================*/}
                        </div>
                    </div>
                </section>
            </>
        );
    } else if(lanMovie == 'F') {
        // 외국영화 출력
        console.log('외국영화 출력');
        return (
            <>
                {/*검색창*/}

                <div className="input_div bg-primary py-10">
                    <div className="container">
                        <div className="px-3 d-flex justify-content-between align-items-center">
                            <h1 className='h35 search_title mb-0 pb-0'>KMP MOVIE DB</h1>
                            <div className='search_box'>
                                <div className='input-group'>
                                    <input className="form-control" type="text" placeholder="영화를 검색해 보세요."/>
                                    <a href="" className='btn btn-dark'>검색</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*검색창끝*/}
                <section className="section">
                    <div className="container">
                        <div className="row section-heading justify-content-center text-center  wow fadeInUp">
                            <div className="col-lg-8 col-xl-6">
                                <h3 className="h1 bg-primary-after after-50px pb-3 mb-3">현재상영작 순위 (외국영화)</h3>
                                <div className="lead">전날 기준입니다.
                                </div>
                            </div>
                        </div>
                        <div className="row gy-4">
                            {/*===============반복문 구간===================*/}
                            {MovieList.map(list=>(
                                <TodayBoxoffice key={list.movieNm} rank={list.rank} openDt={list.openDt} audiAcc={list.audiAcc} movieNm={list.movieNm}/>
                            ))}
                            {/*=============반복문 구간 끝=====================*/}
                        </div>
                    </div>
                </section>
            </>
        );
    }
} export default Boxoffice;