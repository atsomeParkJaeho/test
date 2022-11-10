import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";
import TopRating from "./TopRating";


function Rating() {

   console.log('평점순');

    // 로컬 스토리지 저장
    const histtory = useHistory();
    const inputValue = histtory.location.state;

    if(inputValue) {
        localStorage.setItem("Rating",JSON.stringify(inputValue));
    }

    //================ 저장된 로컬스토리지 출력 ================
    const saved = JSON.parse(localStorage.getItem("Rating"));
    const {lanMovie} = saved;


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
   

   if(lanMovie == 'K') {
       return(
           <>
               {/*검색창*/}

               <div className="input_div bg-primary py-10">
                   <div className="container">
                       <div className="px-3 d-flex justify-content-between align-items-center">
                           <h1 className='h35 search_title mb-0 pb-0'>KMP MOVIE DB</h1>
                           <div className='search_box'>
                               <div className='input-group'>
                                   <input className="form-control" type="text" placeholder="영화를 검색해 보세요."/>
                                   <a href="src/rating/rating" className='btn btn-dark'>검색</a>
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
                               <h3 className="h1 bg-primary-after after-50px pb-3 mb-3">평점순위 (국내영화)</h3>
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
           </>
       );
   } else if(lanMovie == 'F') {
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
                                   <a href="src/rating/rating" className='btn btn-dark'>검색</a>
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
                               <h3 className="h1 bg-primary-after after-50px pb-3 mb-3">평점순위 순위 (해외영화)</h3>
                               <div className="lead">전날 기준입니다.
                               </div>
                           </div>
                       </div>
                       <div className="row gy-4">
                           {/*===============반복문 구간===================*/}
                           {ViewRating.map(list=>(
                               <TopRating key={list.id} title={list.title} poster={list.poster_path} date={list.release_date} rating={list.vote_average}  />
                           ))}
                           {/*=============반복문 구간 끝=====================*/}
                       </div>
                   </div>
               </section>
           </>
       );
   }

} export default  Rating;