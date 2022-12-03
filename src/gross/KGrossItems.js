import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

function KGrossItems({movie_gross,movie_audience,movie_title,movie_rank,movie_open_date}) {
    const [Poster, setPoster] = useState([]);
    useEffect(()=>{
        axios.get('/api/UTIL_movie_gross.php',{
            params:{
                act_type:"poster",
                search:movie_title,
            }
        }).then((res)=>{
            if(res) {
                const {results} = res.data;
                setPoster(results[0]);
            }
        });
    },[]);

    //console.log(Poster.title);

    return(
        <>
            <div className="col-md-6 col-lg-4 mb-5">
                <div className="hover-top card shadow-only-hover">
                    <div className="img_box position-relative">
                        <img className="rounded" src={`http://image.tmdb.org/t/p/w500/${Poster.poster_path}`} title="" alt=""/>
                    </div>
                    <div className="card-body p-3">
                        <label className="small mb-2">개봉일 :  {movie_open_date}</label>
                        <h5 className="mb-3">
                            <Link className="text-dark stretched-link d-block text-truncate" to="#">
                                {movie_title}
                            </Link>
                        </h5>
                        <p></p>
                        <div className="nav small border-top pt-3 d-block">
                            <Link className="me-2 text-body d-block" to="#">순위 : {movie_rank}</Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} export default KGrossItems;