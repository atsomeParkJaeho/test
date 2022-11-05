import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {Genre_ids} from "../codeset/genrecode";
import TodayBoxoffice from "./TodayBoxoffice";

function Genre() {

    console.log('장르별 검색 페이지');
    // 1. 클릭시 장르 아이디 저장
    const goGenre = Ids => {
        setgenIds(Ids);
    };
    // 2. 장르값 저장
    const [genIds, setgenIds] = useState([]);

    console.log('장르값 아이디 / '+ genIds);
    // 3. 클릭한 장르 아이디로 출력
    const [Genre, setGenre] = useState([]);
    
    // 2. 장르 영화 불러오기
    useEffect(()=>{
        axios.get('/api/UTIL_rating.php',{
            params:{
                act_type:"genre",       // 평점순 출력
                genre_ids:genIds      // 나라별 출력
            }
        }).then((res)=>{
            if(res) {
                if(res) {
                    console.log('데이터 추출 / '+ res);
                    const {results} = res.data;
                    setGenre(results);
                }
            }
        });
    },[]);

    // 데이터 확인
    console.log(Genre);

    return(
        <>
            {/*모바일*/}
            <div className="d-md-none">
                <div className="overflow-auto">
                    <ul className="d-flex">
                        {Genre_ids.map(cate=>(
                        <li><Link to="/genre" onClick={()=>goGenre(cate.id)} className="d-block text-dark px-3 py-2">{cate.name}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
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
            {/*영화 출력 리스트*/}
            <section className="section">
                <div className="container">
                    <div className="row section-heading justify-content-center text-center  wow fadeInUp">
                        <div className="col-lg-8 col-xl-6">
                            <h3 className="h1 bg-primary-after after-50px pb-3 mb-3">장르별 영화</h3>
                            <div className="lead">전날 기준입니다.
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4">
                        {/*===============반복문 구간===================*/}
                        {Genre.map(items=>(
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="hover-top card shadow-only-hover">
                                    <div className="img_box position-relative">
                                        <img className="rounded" src={`http://image.tmdb.org/t/p/w500/${items.poster_path}`} title="" alt=""/>
                                    </div>
                                    <div className="card-body p-3">
                                        <label className="small mb-2"></label>
                                        <h5 className="mb-3">
                                            <Link className="text-dark stretched-link d-block text-truncate" to="#">
                                                {items.title}
                                            </Link>
                                        </h5>
                                        <p></p>
                                        <div className="nav small border-top pt-3">
                                            <Link className="me-2 text-body" to="#"><i className="bi-calendar me-1"></i>개봉일 : {items.release_date}</Link>
                                            <Link className="text-body fw-600 ms-auto" to="#">더보기<i className="bi-chevron-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/*=============반복문 구간 끝=====================*/}
                    </div>
                </div>
            </section>

        </>
    );
} export default Genre;