import React, {useEffect, useState} from "react";
import {Link, Route} from 'react-router-dom';
import PropTypes from "prop-types";
import '../components/Search.css';
import axios from "axios";
import search from "../routes/Search";

function TodayBoxoffice({rank,openDt,audiAcc,movieNm}) {

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
        <div className="col-md-6 col-lg-3 col-6 mb-5">
          <div className="position-relative">
            <div className="img_box position-relative">
              <img className="rounded" src={`http://image.tmdb.org/t/p/w500/${poster}`} title="" alt=""/>
            </div>
            <div className="pt-4">
              <span className="small d-block">예매순위 : {rank}</span>
              <span className="small d-block">개봉일 : {openDt}</span>
              <span className="small d-block">누적 관객수 : {Math.floor(audiAcc / 10000)} 만명</span>
              <h5 className="pt-2">
                <Link className="text-dark" to="">제목 : {movieNm}</Link>
              </h5>
              <p className="text-truncate"></p>
              <button className="btn btn-sm btn-primary stretched-link" >더보기</button>
            </div>
          </div>
        </div>
    </>
  )
};

export default TodayBoxoffice;
