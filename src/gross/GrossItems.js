import React, {useEffect, useState} from "react";
import axios from "axios";

function GrossItems({movie_domestic,movie_foreign,movie_rank,movie_year,movie_world_wide,movie_release_group}) {
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

    console.log(Poster.title);

    return(
        <>
            <div className="pb-10">
                <img className="rounded" src={`http://image.tmdb.org/t/p/w500/${Poster.poster_path}`} title="" alt=""/>
                <p className="mb-0">영화제목 : {Poster.title}</p>
                <p className="mb-0">개봉년도 : {movie_year}</p>
                <p className="mb-0">북미수익 : {movie_domestic}</p>
                <p className="mb-0">해외수익 : {movie_foreign}</p>
                <p className="mb-0">전세계합산 : {movie_world_wide}</p>
            </div>
        </>
    );
} export default GrossItems;