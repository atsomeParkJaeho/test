import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Search from "./routes/Search"
import Header from './components/Header';

/* 이동페이지  */
import View from        "./components/View";               // 상세 정보
import Rating from      "./components/rating";             // 평점순
import Genre from "./components/genre";              // 장르별
import Boxoffice from   "./components/boxoffice";          // 흥행순
import ratingBoard from "./components/ranking";            // 랭킹순

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/theme.css';
// 유료부트스트랩 테마

import './css/font_size.css';
import './css/style.css';




function App(){
  return (

  <HashRouter>
    <div className="wrapper">
      <Header />
      <Route path="/"             exact={true} component={Search}></Route>
      <Route path="/view/:title"  exact={true} component={View}></Route>
      <Route path="/rating"       exact={true} component={Rating}></Route>
      <Route path="/rating/K"     exact={true} component={Rating}></Route>
      <Route path="/rating/F"     exact={true} component={Rating}></Route>
      <Route path="/genre"        exact={true} component={Genre}></Route>
      <Route path="/boxoffice"    exact={true} component={Boxoffice}></Route>

      <Route path="/boxoffice/K"  exact={true} component={Boxoffice}></Route>
      <Route path="/boxoffice/F"  exact={true} component={Boxoffice}></Route>

      <Route path="/board"        exact={true} component={ratingBoard}></Route>
    </div>
  </HashRouter>

  );
}

export default App;
