import React, {useEffect} from "react";
import Header from "../components/Header";
import {useState} from "react";
import axios from "axios";
import FGrossItems from "./FGrossItems";
import {Link} from "react-router-dom";
import KGrossItems from "./KGrossItems";

function Gross() {


    const country = sessionStorage.getItem('search_uid');
    const goSearch = (uid) => {
        sessionStorage.setItem('search_uid',uid);
        window.location.reload();
        return;
    }

    console.log('수익별');
    const [Gross, setGross] = useState([]);  // 리스트 출력



    useEffect(()=>{
        axios.get('/api/UTIL_movie_gross.php',{
            params:{
                act_type:"movie_gross",
                country :country,
            }
        }).then((res)=>{
            if(res) {
                setGross(res.data);
            }
        });
    },[]);

    console.log(Gross);

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
                                <h3 className="h1 bg-primary-after after-50px pb-3 mb-3">수익별</h3>
                                <div className="lead">전날 기준입니다.
                                </div>
                            </div>
                        </div>
                        <div className="row gy-4">
                            {/*===============반복문 구간===================*/}
                            <div>
                                {(Gross) ? (
                                    <>
                                        {Gross.map(val=>(
                                            <FGrossItems
                                                movie_rank           ={val.movie_rank}         // 순위
                                                movie_year           ={val.movie_year}         // 개봉년도
                                                movie_release_group  ={val.movie_release_group}        // 영화제목
                                                movie_domestic       ={val.movie_domestic}        // 북미수익
                                                movie_foreign        ={val.movie_foreign}        // 해외수익
                                                movie_world_wide     ={val.movie_world_wide}
                                            />
                                        ))}
                                    </>
                                ):(
                                    <>
                                        {Gross.map(val=>(
                                            <KGrossItems
                                                movie_rank={}
                                                movie_title={}
                                                movie_open_date={}
                                                movie_gross={}
                                                movie_audience={}
                                            />
                                        ))}
                                    </>
                                )}

                            </div>
                            {/*=============반복문 구간 끝=====================*/}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
} export default Gross;