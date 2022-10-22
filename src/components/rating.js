import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";


function Rating() {

   console.log('평점순');

    // 로컬 스토리지 저장
    const histtory = useHistory();
    const inputValue = histtory.location.state;

    if(inputValue) {
        localStorage.setItem("Rating",JSON.stringify(inputValue));
    }

    //================ 저장된 로컬스토리지 출력 ================
    const saved = JSON.parse(localStorage.getItem("Rating"));
    const {lanMovie} = saved;


   const [ViewRating, setViewRating] = useState([]);
   useEffect(()=>{
       axios.get('',{
           params:{
               act_type:"rating", // 평점순 출력
               repNationCd:lanMovie      // 나라별 출력
           }
       }).then((res)=>{
           if(res) {
               
           }
       });
   });
   
    /*
   if() {
       return(
           <>
           </>
       );
   } else if() {
       return (
           <>
           </>
       );
   }
    */
} export default  Rating;