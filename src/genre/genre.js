import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import {Genre_ids} from "../codeset/genrecode";
import Header from "../components/Header";


function Genre() {

    console.log('장르별 검색');

    const genre_id = sessionStorage.getItem('search_uid');


    const goSearch = (uid) => {
        sessionStorage.setItem('search_uid',uid);
        window.location.reload();
        return;
    }
    // 장르 불러오기
    const [Genre, setGenre] = useState([]);
    useEffect(()=>{
        axios.get('/api/UTIL_genres.php',{
            params:{
                act_type    :"genres",      // 장르별로 가져오기
                genres_ids  :genre_id           // 해당장르 아이디를 넣는다
            }
        }).then((res)=>{
            if(res) {
                console.log('데이터 추출 / '+ res);
                const {results} = res.data;
                setGenre(results);
            }
        });
    },[]);

    return(
        <>
            <Header/>
            {/*=================모바일=================*/}
            <div className="wrapper">
                <div className="d-md-none">
                    <div className="overflow-auto">
                        <ul className="d-flex">
                            {Genre_ids.map(cate=>(
                                <li>
                                    <button to="/genre" onClick={()=>goSearch(cate.id)} className="d-block text-nowrap bg-white border text-dark px-3 py-2">{cate.name}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/*==================영화 출력 리스트============*/}
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
                                            <label className="small mb-2">예매순위 {}</label>
                                            <h5 className="mb-3">
                                                <Link className="text-dark stretched-link d-block text-truncate" to="#">
                                                    {items.title}
                                                </Link>
                                            </h5>
                                            <p></p>
                                            <div className="nav small border-top pt-3">
                                                <Link className="me-2 text-body" to="#"><i className="bi-calendar me-1"></i>개봉일 : {}</Link>
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
            </div>
        </>
    );
} export default Genre;