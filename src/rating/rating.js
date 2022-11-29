import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";
import TopRating from "./TopRating";
import Header from "../components/Header";


function Rating() {
    const nowUrl = window.location.pathname;
    if(nowUrl == '/rating/K') {
        sessionStorage.setItem('search_uid','K');
    }
    if(nowUrl == '/rating/F') {
        sessionStorage.setItem('search_uid','F');
    }
   console.log('평점순');
   const lanMovie =  sessionStorage.getItem('search_uid');
    // 2. 해당 평점 사이트로 이동
    const goSearch = (uid) => {
        sessionStorage.setItem('search_uid',uid);
        window.location.href = '/rating/'+uid;
        return;
    }


   const [ViewRating, setViewRating] = useState([]);
   useEffect(()=>{
       axios.get('/api/UTIL_rating.php',{
           params:{
               act_type:"rating", // 평점순 출력
               country:lanMovie      // 나라별 출력
           }
       }).then((res)=>{
           if(res) {
               if(res) {
                   console.log('데이터 추출 / '+ res);
                   const {results} = res.data;
                   setViewRating(results);
               }
           }
       });
   },[]);

   const tit = (lanMovie === 'K') ? '국내영화':'해외영화';
   return(
       <>

           <Header/>
           {/*검색창*/}

           {/*<div className="input_div bg-primary py-10">*/}
           {/*    <div className="container">*/}
           {/*        <div className="px-3 d-flex justify-content-between align-items-center">*/}
           {/*            <h1 className='h35 search_title mb-0 pb-0'>KMP MOVIE DB</h1>*/}
           {/*            <div className='search_box'>*/}
           {/*                <div className='input-group'>*/}
           {/*                    <input className="form-control" type="text" placeholder="영화를 검색해 보세요."/>*/}
           {/*                    <a href="src/rating/rating" className='btn btn-dark'>검색</a>*/}
           {/*                </div>*/}
           {/*            </div>*/}
           {/*        </div>*/}
           {/*    </div>*/}
           {/*</div>*/}

           {/*검색창끝*/}
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
                               <h3 className="h1 bg-primary-after after-50px pb-3 mb-3">평점순위 ({tit})</h3>
                               <div className="lead">전날 기준입니다.
                               </div>
                           </div>
                       </div>
                       <div className="row gy-4">
                           {/*===============반복문 구간===================*/}
                           {ViewRating.map(list=>(
                               <TopRating
                                   key={list.id}                    // 키
                                   title={list.title}               // 타이틀
                                   poster={list.poster_path}        // 포스터
                                   overview={list.overview}         // 설명
                                   genre={list.genre_ids}           // 장르
                                   date={list.release_date}         // 개봉일
                                   rating={list.vote_average}  />
                           ))}
                           {/*=============반복문 구간 끝=====================*/}
                       </div>
                   </div>
               </section>
           </div>

       </>
   );


} export default  Rating;