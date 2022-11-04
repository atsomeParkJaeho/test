import React, {useEffect, useState} from "react";
import {Link, Route} from 'react-router-dom';
import PropTypes from "prop-types";
import './Search.css';
import axios from "axios";
import search from "../routes/Search";

function TodayBoxoffice({rank,openDt,audiAcc,movieNm,overview}) {

  const [poster, setpotser] = useState([]);

  // =========================== 포스터 추출 ==========================//
  useEffect(()=>{
    axios.get('/atnode/api/UTIL_main.php',{
      params:{
        act_type  : "poster",
        search    : movieNm
      }
    }).then((res)=>{
      if(res) {
        setpotser(res.data);
      }
    });
  },[]);

  const {results} = poster;

  if(results) {
    // ===========================오류가 없는 항목만 추출==========================//
    if(results[0] !== undefined) {
      const img_url = results[0].poster_path;
      // =========================== setpotser에 저장==========================//
      setpotser(img_url);
    }
  }

  // 단위 변경

  return (
    <>
      <div className="col-md-6 col-lg-4 mb-5">
          <div className="hover-top card shadow-only-hover">
              <div className="img_box position-relative">
                  <img className="rounded" src={`http://image.tmdb.org/t/p/w500/${poster}`} title="" alt=""/>
              </div>
              <div className="card-body p-3">
                  <label className="small mb-2">예매순위 {rank}</label>
                  <h5 className="mb-3">
                      <Link className="text-dark stretched-link d-block text-truncate" to="#">
                          {movieNm}
                      </Link>
                  </h5>
                  <p></p>
                  <div className="nav small border-top pt-3">
                      <Link className="me-2 text-body" to="#"><i className="bi-calendar me-1"></i>개봉일 : {openDt}</Link>
                      <Link className="text-body ms-2" to="#"><i className="bi bi-person me-1"></i>누적 관객수 : {Math.floor(audiAcc / 10000)} 만명</Link>
                      <Link className="text-body fw-600 ms-auto" to="#">더보기<i className="bi-chevron-right"></i></Link>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
};

export default TodayBoxoffice;
