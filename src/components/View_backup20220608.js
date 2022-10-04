import React, {useEffect, useState, useRef} from 'react';
import 'chart.js/auto';
import { Bar, Line } from 'react-chartjs-2';





function View() {

    const dateSet1 = {
        labels: ['남성', '여성'],
        datasets: [
            {
                id: 1,
                label: '',
                data: [5,10],
            },
            // {
            //     id: 2,
            //     label: '',
            //     data: [3],
            // },
        ],
    }

    const dataSet2 = {
        labels: ['10대','20대','30대','40대','50대'],
        datasets: [
            {
                id: 1,
                label: '',
                data: [5,10,8,9,5],
            },
        ],
    }

    return(
     <div className="contents_wrap">
         <div className="row view_wrap">
            <div className="col-md-6">
                <img src="https://movie-phinf.pstatic.net/20160427_273/1461725031863moaJw_JPEG/movie_image.jpg" alt="" />
            </div>
            <div className="col-md-6">
                <div className="tit">
                    <p className="h25 fw-bold">캡틴 아메리카: 시빌 워 </p>
                    <p className="h17"><span>개봉연도 </span>2016 .04.27</p>
                    <p className="h17"><span>감독</span>감독안소니 루소, 조 루소</p>
                    <p className="h17"><span>배우</span>크리스 에반스(스티브 로저스 / 캡틴 아메리카), 로버트 다우니 주니어(토니 스타크 / 아이언맨), 스칼릿 조핸슨(나타샤 로마노프/ 블랙위도우)</p>
                    <p className="h17"><span>전세계 수익</span>1,153,337,496 $</p>
                    <p className="h17"><span>국내 관객수</span>867만명</p>
                    <div className="rating mt-5">
                        <p className="h17"><span>네이버</span>8.85점</p>
                        <p className="h17"><span>CGV</span>93%</p>
                        <p className="h17"><span>로튼토마토</span>90%</p>
                        <p className="h21 fw-bold"><span>평균</span>90.33%</p>
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
                            <Bar datasetIdKey='id' data={dateSet1}/>
                        </div>
                        <div className="col-6">
                            <Line datasetIdKey='id' data={dataSet2}/>
                        </div>
                    </div>
                </div>
             </div>
         </div>
     </div>
    );
}



export default View;