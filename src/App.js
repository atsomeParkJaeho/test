import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import BoardMain from "./routes/board/BoardMain";
import BoardView from "./routes/board/BoardView";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Search from "./routes/Search"
import View from "./components/View";
import Navigation from "./components/Navigation";
import Header from './components/Header';

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
      {/*<Route path="/" exact={true} component={Home}></Route>*/}
      {/*<Route path="/board" component={BoardMain}></Route>*/}
      {/*<Route path="/board/view/:id" component={BoardView}></Route>*/}
      {/*<Route path="/movie/detail/:id" component={Detail}></Route>*/}
      <Route path="/" exact={true} component={Search}></Route>
      <Route path="/view/:title" exact={true} component={View}></Route>
    </div>
  </HashRouter>

  );
}

export default App;
