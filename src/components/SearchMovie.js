import React from "react";
import {Link, Route} from 'react-router-dom';
import PropTypes from "prop-types";
import './Search.css';
import axios from "axios";
import search from "../routes/Search";

function SearchMovie({id, year, title, poster, rating, director, actor}) {
  let fix_director = director.replace('|','');
  console.log(fix_director); // 확인

    // const getThemovieApi = (e) => {
    //
    // // ==============더무비 api 실행=====================
    //     axios.get('/themovie/3/search/movie',{
    //         params:{
    //             query:e,
    //             api_key:'a5d1d820e06a9d4f3f6454da6e078d9d',
    //             language:'ko-KR'
    //         }
    //     }).then((theMovie,err)=>{
    //         if(theMovie){
    //             console.log(theMovie.data);
    //             const {data:{results}} = theMovie;
    //             console.log(results[0]);
    //
    //         }
    //     });
        console.log('더무비, 영화진흥위원회 api 연결용 / '+e);
        return;
    // ==============영화진흥위원회 api 실행=====================
    //     axios.get('',{
    //         query:e
    //     }).then((korMovie)=>{
    //         if(korMovie) {
    //             console.log('영화 진흥위원회 / '+ korMovie.data);
    //         }
    //     });

    //alert(e);


    }




  return (
    <div className="movie col-12 col-md-6 movie_tab">
       <Link to={{pathname:`/view/${title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")}`, state:{id, year, title, poster, rating, director, actor}}} >
         <div className='row'>
            <div className='col-12 col-md-4'>

              <img src={poster} alt={title} titlt={title}></img>
            </div>
            <div className='col-12 col-md-8'>
              <div className="movie__data">
                <h3 className="movie__title">{
                    title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")
                  }
                </h3>
                <p className="movie__rating h16">
                  <span>평점 : </span> {rating.replace(/\|/gi,", ")} / 10
                </p>
                <p className="movie__year h16">
                  <span>개봉일 : </span> {year.replace(/\|/gi,", ")}
                </p>
              <p className="movie__director h16">
                <span>감독 : </span> {director.replace(/\|/gi,", ")}
              </p>
              <p className="movie__actor h16">
                <span>배우 : </span> {actor.replace(/\|/gi,", ")}
              </p>
              </div>
            </div>
         </div>
        </Link>
    </div>
  )
};

SearchMovie.propTypes = {
  id: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  actor: PropTypes.string.isRequired

};

export default SearchMovie;
