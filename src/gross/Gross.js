import React, {useEffect} from "react";
import Header from "../components/Header";
import {Genre_ids} from "../codeset/genrecode";
import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Gross() {

    console.log('수익별');

    const goSearch = (uid) => {
        sessionStorage.setItem('search_uid',uid);
        window.location.href = '/gross/'+uid;
        return;
    }
    const lanMovie =  sessionStorage.getItem('search_uid');
    const [MovieList, setMovieList] = useState([]);
    useEffect(()=> {
        axios.get('/api/UTIL_movie_gross.php',{
            params:{
                act_type:'movie_gross',
                country :lanMovie,
            }
        }).then((res)=>{
            if(res) {
                const result = res.data;
                setMovieList(result);
            }
        });
    },[]);

    const tit = (lanMovie === 'K') ? '국내영화':'해외영화';

    console.log(MovieList);

    return(
        <>
            <Header/>
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
                {/*==================영화 출력 리스트============*/}
                <section className="section">
                    <div className="container">
                        <div className="row section-heading justify-content-center text-center  wow fadeInUp">
                            <div className="col-lg-8 col-xl-6">
                                <h3 className="h1 bg-primary-after after-50px pb-3 mb-3">{tit} 수익별</h3>
                                <div className="lead">전날 기준입니다.
                                </div>
                            </div>
                        </div>
                        <div className="row gy-4">
                            {/*===============반복문 구간===================*/}
                            {MovieList.map(items=>(
                                <div className="col-md-6 col-lg-4 mb-5">
                                    <div className="hover-top card shadow-only-hover">
                                        <div className="img_box position-relative">
                                            <img className="rounded" src="" title="" alt=""/>
                                        </div>
                                        <div className="card-body p-3">
                                            <label className="small mb-2">예매순위 {}</label>
                                            <h5 className="mb-3">
                                                <Link className="text-dark stretched-link d-block text-truncate" to="#">
                                                    {items.movie_release_group}
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
} export default Gross;