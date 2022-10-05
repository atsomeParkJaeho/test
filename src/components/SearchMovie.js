import React from "react";
import {Link, Route} from 'react-router-dom';
import PropTypes from "prop-types";
import './Search.css';
import axios from "axios";
import search from "../routes/Search";

function SearchMovie({id,release_date,title,poster_path,popularity}) {


  return (
    <div className="movie col-12 col-md-6 movie_tab">
       <Link to={{pathname:`/view/${title}`, state:{id,release_date,title,poster_path,popularity}}} >
          <div className='row'>

            <div className='col-12 col-md-4 pb-10'>
              <img src={`http://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} titlt={title}></img>
            </div>

            <div className='col-12 col-md-8'>
              <div className="movie__data">
                <h3 className="movie__title pb-5">{title}</h3>
                <p className="movie__rating h16">
                  <span>평점 : </span> {popularity}
                </p>
                <p className="movie__year h16">
                  <span>개봉일 : </span> {release_date}
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
