import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import '../css/style.css'

function Header() {
    let [scrollPosition, setScrollPosition] = useState(0); // 스크롤 0 설정
    let updateScroll = () => { // 스크롤 상태 불러오기
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(()=> {
        window.addEventListener('scroll',updateScroll);
    });
    

    return (
        <header className="main-header">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link to="/" className="navbar-brand header-navbar-brand">
                        <strong>KMP MOVIE DB</strong>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">현재상영작</a>
                                <div className="dropdown-menu dropdown-menu">
                                    <div className="">
                                        <div className="">
                                            <ul className="list-unstyled">
                                                <li><a href="" class="dropdown-item">국내영화</a></li>
                                                <li><a href="" class="dropdown-item">해외영화</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">평점순</a>
                                <div className="dropdown-menu dropdown-menu">
                                    <div className="">
                                        <div className="">
                                            <ul className="list-unstyled">
                                                <li><a href="" class="dropdown-item">국내영화</a></li>
                                                <li><a href="" class="dropdown-item">해외영화</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">장르별</a>
                                <div className="dropdown-menu dropdown-menu">
                                    <div className="">
                                        <div className="">
                                            <ul className="list-unstyled">
                                                <li><a href="" class="dropdown-item">SF</a></li>
                                                <li><a href="" class="dropdown-item">로맨스</a></li>
                                                <li><a href="" class="dropdown-item">코미디</a></li>
                                                <li><a href="" class="dropdown-item">멜로</a></li>
                                                <li><a href="" class="dropdown-item">스릴러</a></li>
                                                <li><a href="" class="dropdown-item">공포</a></li>
                                                <li><a href="" class="dropdown-item">전쟁</a></li>
                                                <li><a href="" class="dropdown-item">스포츠</a></li>
                                                <li><a href="" class="dropdown-item">판타지</a></li>
                                                <li><a href="" class="dropdown-item">음악</a></li>
                                                <li><a href="" class="dropdown-item">뮤지컬</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">수익별</a>
                                <div className="dropdown-menu dropdown-menu">
                                    <div className="">
                                        <div className="">
                                            <ul className="list-unstyled">
                                                <li><a href="" class="dropdown-item">국내영화</a></li>
                                                <li><a href="" class="dropdown-item">해외영화</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">KMP평점</a>
                                <div className="dropdown-menu dropdown-menu">
                                    <div className="">
                                        <div className="">
                                            <ul className="list-unstyled">
                                                <li><a href="" class="dropdown-item">국내영화</a></li>
                                                <li><a href="" class="dropdown-item">해외영화</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">랭킹별</a>
                                <div className="dropdown-menu dropdown-menu">
                                    <div className="">
                                        <div className="">
                                            <ul className="list-unstyled">
                                                <li><a href="" class="dropdown-item">평점랭킹</a></li>
                                                <li><a href="" class="dropdown-item">수익랭킹</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}


export default Header;