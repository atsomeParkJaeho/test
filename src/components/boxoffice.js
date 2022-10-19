import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

function Boxoffice() {

    console.log('박스오피스 페이지');

    // 로컬 스토리지 저장
    const histtory = useHistory();
    const inputValue = histtory.location.state;

    if(inputValue) {
        localStorage.setItem("Boxoffice",JSON.stringify(inputValue));
    }

    //================ 저장된 로컬스토리지 출력 ================
    const saved = JSON.parse(localStorage.getItem("Boxoffice"));
    const {lanMovie} = saved;

    const [MovieList, setMovieList] = useState([]);

    useEffect(()=>{
       axios.get('/atnode/api/UTIL_boxoffice.php',{
           params:{
               act_type     :'movie_boxoffice',
               repNationCd  :lanMovie, // 국적 선택
           }
       }).then((res)=>{
           if(res) {
               console.log('데이터 추출 / '+ res);
               const {boxOfficeResult:{dailyBoxOfficeList}} = res.data;
               setMovieList(dailyBoxOfficeList);
           }
       });
    },[]);

    console.log(MovieList);


    if(lanMovie == 'K') {
        //한국영화 출력
        console.log('한국영화 출력');
        return (
            <>
            </>
        );
    } else if(lanMovie == 'F') {
        // 외국영화 출력
        console.log('외국영화 출력');
        return (
            <>
            </>
        );
    }
} export default Boxoffice;