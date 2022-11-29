import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import TodayBoxoffice from "./TodayBoxoffice";
import {Genre_ids} from "../codeset/genrecode";
import Header from "../components/Header";

function Boxoffice() {

    const nowUrl = window.location.pathname;
    if(nowUrl == '/boxoffice/K') {
        sessionStorage.setItem('search_uid','K');
    }
    if(nowUrl == '/boxoffice/F') {
        sessionStorage.setItem('search_uid','F');
    }
    console.log('박스오피스 페이지');
    const lanMovie =  sessionStorage.getItem('search_uid');
    const [MovieList, setMovieList] = useState([]);
    // 2. 해당 평점 사이트로 이동
    const goSearch = (uid) => {
        sessionStorage.setItem('search_uid',uid);
        window.location.href = '/boxoffice/'+uid;
        return;
    }

    /*1. 최초 접속시 노출 화면*/
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

    // 국내 해외영화 제목 구분
    const tit = (lanMovie === 'K') ? '국내영화':'해외영화';

    return(
        <>
            {/*===================1차 카테고리=======================*/}
            <Header/>
            {/*===================2차 카테고리=======================*/}

            {/*===================컨텐츠 시작=======================*/}
            <div className="wrapper">
                <div className="d-md-none">
                    <div className="overflow-auto">
                        <ul className="d-flex">
                            <li>
                                <button onClick={()=>goSearch(`K`)} className="d-block text-nowrap bg-white border text-dark px-3 py-2">국내영화</button>
                            </li>
                            <li>
                                <button onClick={()=>goSearch(`F`)} className="d-block text-nowrap bg-white border text-dark px-3 py-2">해외영화</button>
                            </li>
                        </ul>
                    </div>
                </div>

                <section className="section">
                    <div className="container">
                        <div className="row section-heading justify-content-center text-center  wow fadeInUp">
                            <div className="col-lg-8 col-xl-6">
                                <h3 className="h1 bg-primary-after after-50px pb-3 mb-3">현재상영작 순위 ({tit})</h3>
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
            </div>
        </>
    );


    // if(lanMovie == 'K') {
    //     //한국영화 출력
    //     console.log('한국영화 출력');
    //     return (
    //         <>
    //             {/*=================1차 카테고리===================*/}
    //             <Header/>
    //             {/*=================2차 카테고리=================*/}
    //             <div>
    //
    //             </div>
    //             <div className="wrapper">
    //
    //             </div>
    //             <div className="d-md-none">
    //                 <div className="overflow-auto">
    //                     <ul className="d-flex">
    //                         <li>
    //                             <button className="d-block text-nowrap bg-white border text-dark px-3 py-2">국내영화</button>
    //                         </li>
    //                         <li>
    //                             <button className="d-block text-nowrap bg-white border text-dark px-3 py-2">해외영화</button>
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //             {/*검색창*/}
    //             <div className="input_div bg-primary py-10">
    //                 <div className="container">
    //                     <div className="px-3 d-flex justify-content-between align-items-center">
    //                         <h1 className='h35 search_title mb-0 pb-0'>KMP MOVIE DB</h1>
    //                         <div className='search_box'>
    //                             <div className='input-group'>
    //                                 <input className="form-control" type="text" placeholder="영화를 검색해 보세요."/>
    //                                 <a href="src/boxoffice/boxoffice" className='btn btn-dark'>검색</a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             {/*검색창끝*/}
    //             <section className="section">
    //                 <div className="container">
    //                     <div className="row section-heading justify-content-center text-center  wow fadeInUp">
    //                         <div className="col-lg-8 col-xl-6">
    //                             <h3 className="h1 bg-primary-after after-50px pb-3 mb-3">현재상영작 순위 (국내영화)</h3>
    //                             <div className="lead">전날 기준입니다.
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className="row gy-4">
    //                         {/*===============반복문 구간===================*/}
    //                         {MovieList.map(list=>(
    //                             <TodayBoxoffice key={list.movieNm} rank={list.rank} openDt={list.openDt} audiAcc={list.audiAcc} movieNm={list.movieNm}/>
    //                         ))}
    //                         {/*=============반복문 구간 끝=====================*/}
    //                     </div>
    //                 </div>
    //             </section>
    //         </>
    //     );
    // } else if(lanMovie == 'F') {
    //     // 외국영화 출력
    //     console.log('외국영화 출력');
    //     return (
    //         <>
    //             {/*검색창*/}
    //
    //             <div className="input_div bg-primary py-10">
    //                 <div className="container">
    //                     <div className="px-3 d-flex justify-content-between align-items-center">
    //                         <h1 className='h35 search_title mb-0 pb-0'>KMP MOVIE DB</h1>
    //                         <div className='search_box'>
    //                             <div className='input-group'>
    //                                 <input className="form-control" type="text" placeholder="영화를 검색해 보세요."/>
    //                                 <a href="src/boxoffice/boxoffice" className='btn btn-dark'>검색</a>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //
    //             {/*검색창끝*/}
    //             <section className="section">
    //                 <div className="container">
    //                     <div className="row section-heading justify-content-center text-center  wow fadeInUp">
    //                         <div className="col-lg-8 col-xl-6">
    //                             <h3 className="h1 bg-primary-after after-50px pb-3 mb-3">현재상영작 순위 (외국영화)</h3>
    //                             <div className="lead">전날 기준입니다.
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className="row gy-4">
    //                         {/*===============반복문 구간===================*/}
    //                         {MovieList.map(list=>(
    //                             <TodayBoxoffice key={list.movieNm} rank={list.rank} openDt={list.openDt} audiAcc={list.audiAcc} movieNm={list.movieNm}/>
    //                         ))}
    //                         {/*=============반복문 구간 끝=====================*/}
    //                     </div>
    //                 </div>
    //             </section>
    //         </>
    //     );
    // }
} export default Boxoffice;