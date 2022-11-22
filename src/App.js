import React from 'react';
import {BrowserRouter, HashRouter, Route} from 'react-router-dom';
import Search from "./routes/Search"
import Header from './components/Header';

/* 이동페이지  */
import View from        "./components/View";               // 상세 정보
import Rating from "./rating/rating";                      // 평점순
import Genre from "./genre/genre";                          // 장르별
import Boxoffice from "./boxoffice/boxoffice";          // 흥행순
import Gross  from  './gross/Gross';                    // 수익별
import Kmp    from  './kmp/Kmp.js';                     // kmp  
import Ranking from './ranking/Ranking'                 // 랭킹별


import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/theme.css';

// 유료부트스트랩 테마
import './css/font_size.css';
import './css/style.css';




function App(){

  // 모바일 디바이스 체크
  const UserAgent = navigator.userAgent;
  const isMobileOs = UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i);
  const isMobileHw = UserAgent.match(/LG|SAMSUNG|Samsung/);


  if(isMobileOs || isMobileHw) {
    return (
        <>
          <BrowserRouter>
            <div className="wrapper">
              {/*<Header/>*/}
              <Route path="/"             exact={true} component={Search}></Route>
              {/*=================현재상영작 순위==================*/}
              <Route path="/boxoffice"    exact={true} component={Boxoffice}></Route>
              <Route path="/boxoffice/K"  exact={true} component={Boxoffice}></Route>
              <Route path="/boxoffice/F"  exact={true} component={Boxoffice}></Route>
              {/*=================평점순==================*/}
              <Route path="/rating"       exact={true} component={Rating}></Route>
              <Route path="/rating/K"     exact={true} component={Rating}></Route>
              <Route path="/rating/F"     exact={true} component={Rating}></Route>
              {/*=================장르별==================*/}
              <Route path="/genre"        exact={true} component={Genre}></Route>
              {/*=================수익별==================*/}
              <Route path="/gross"        exact={true} component={Gross}></Route>
              {/*=================KMP평점==================*/}
              <Route path="/kmp"          exact={true} component={Kmp}></Route>
              {/*=================랭킹별==================*/}
              <Route path="/ranking"      exact={true} component={Ranking}></Route>
              {/*=================상세페이지==================*/}
              <Route path="/view/:title"  exact={true} component={View}></Route>
            </div>
          </BrowserRouter>
        </>
    );
  } else {
    return(
        <>
        </>
    );
  }

}

export default App;
