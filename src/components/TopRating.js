import React from "react";
import {Link} from "react-router-dom";

function TopRating({title, poster, date, rating, id, overview, genre}) {
    return(
        <>
            <div className="col-md-6 col-lg-3 col-6 mb-5">
                <div className="position-relative">
                    <div className="img_box position-relative">
                        <img className="rounded" src={`http://image.tmdb.org/t/p/w500/${poster}`} title="" alt=""/>
                    </div>
                    <div className="pt-4">
                        <span className="small d-block">개봉일 : {date}</span>
                        <span className="small d-block">평점 : {rating}</span>
                        <span className="small d-none">줄거리 : {overview}</span>
                        <span className="small d-none">장르 : {genre}</span>
                        <span className="small d-none">아이디 : {id}</span>
                        <h5 className="pt-2">
                            <Link className="text-dark" to="">제목 : {title}</Link>
                        </h5>
                        <p className="text-truncate"></p>
                        <Link to={{pathname:`/view/${title}`, state:{title, poster, date, rating, id, overview, genre}}} className="btn btn-sm btn-primary stretched-link" >더보기</Link>
                    </div>
                </div>
            </div>
        </>
    );
} export default TopRating;