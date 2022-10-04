import React, {useEffect, useState, useRef} from 'react';
import 'chart.js/auto';
import {useHistory} from "react-router-dom";


function View() {


    //================ 로컬스토리지 저장 ================


    const histtory = useHistory();
    const inputValue = histtory.location.state;

    //================ state가 있을경우 로컬스토리지에 저장 ================

    if(inputValue) {
        localStorage.setItem("movie_info",JSON.stringify(inputValue));
    }

    //================ 저장된 로컬스토리지 출력 ================
    const saved = JSON.parse(localStorage.getItem("movie_info"));
    const {
        id,
        year,
        title,
        poster,
        rating,
        director,
        actor
    } = saved;

    return(
        <div className="contents_wrap">
            <div className="row view_wrap">
                <div className="col-md-6">
                    <img src={poster} alt={title} style={{width:"100%"}}/>
                </div>
                <div className="col-md-6">
                    <div className="tit">
                        <p className="h25 fw-bold">
                            {title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")}
                        </p>
                        <p className="h17">
                            <span>개봉연도 </span>
                            {year}
                        </p>
                        <p className="h17">
                            <span>감독</span>
                            {director.replace(/\|/gi,", ")}
                        </p>
                        <p className="h17">
                            <span>배우</span>
                            {actor.replace(/\|/gi,", ")}
                        </p>
                        <p className="h17">
                            <span>전세계 수익</span>

                        </p>
                        <p className="h17">
                            <span>국내 관객수</span>

                        </p>
                        <div className="rating mt-5">
                            <p className="h17">
                                <span>네이버</span>
                                {rating} 점
                            </p>
                            <p className="h17">
                                <span>CGV</span>

                            </p>
                            <p className="h17">
                                <span>로튼토마토</span>

                            </p>
                            <p className="h21 fw-bold">
                                <span>평균</span>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detail_info mt-5">
                <div>
                    <div className="tbody_div text-center">
                        <div className="row">
                            <div className="col-6 h17">성별별 평점</div>
                            <div className="col-6 h17">연령별 평점</div>
                        </div>
                        <div className="row">
                            <div className="col-6">

                            </div>
                            <div className="col-6">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default View;