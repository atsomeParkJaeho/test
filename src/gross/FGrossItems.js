import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function FGrossItems({movie_domestic,movie_foreign,movie_rank,movie_year,movie_world_wide,movie_release_group}) {
    const [Poster, setPoster] = useState([]);
    useEffect(()=>{
        axios.get('/api/UTIL_movie_gross.php',{
            params:{
                act_type:"poster",
                search:movie_release_group,
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
                        <label className="small mb-2">개봉년도 :  {movie_year}</label>
                        <h5 className="mb-3">
                            <Link className="text-dark stretched-link d-block text-truncate" to="#">
                                {Poster.title}
                            </Link>
                        </h5>
                        <p></p>
                        <div className="nav small border-top pt-3 d-block">
                            <Link className="me-2 text-body d-block" to="#">순위 : {movie_rank}</Link>
                            <Link className="me-2 text-body d-block h16 text-black" to="#">전세계수익 : {movie_world_wide}</Link>
                            <Link className="me-2 text-body d-block" to="#">북미수익 : {movie_domestic}</Link>
                            <Link className="me-2 text-body d-block" to="#">해외수익 : {movie_foreign}</Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
} export default FGrossItems;