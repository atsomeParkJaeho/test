import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import '../css/style.css'
import {Collapse} from "react-bootstrap";

function Header() {
    let [scrollPosition, setScrollPosition] = useState(0); // 스크롤 0 설정
    let updateScroll = () => { // 스크롤 상태 불러오기
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(()=> {
        window.addEventListener('scroll',updateScroll);
    });

    const Kmovie = 'K';
    const Fmovie = 'F';

    return (
        <header className="main-header">
            {/*모바일*/}
            <div className="mo_header d-md-none">
                <div className="text-center border-bottom p-3">
                    <p className="h25 fw-bold m-0">KMP MOVIE DB</p>
                </div>
                {/*1차 카테고리*/}
                <div className="overflow-auto">
                    <ul className="d-flex">
                        <li><Link to="" className="d-block text-dark px-3 py-2">현재상영작</Link></li>
                        <li><Link to="" className="d-block text-dark px-3 py-2">평점순</Link></li>
                        <li><Link to="" className="d-block text-dark px-3 py-2">장르별</Link></li>
                        <li><Link to="" className="d-block text-dark px-3 py-2">수익별</Link></li>
                        <li><Link to="" className="d-block text-dark px-3 py-2">KMP평점</Link></li>
                        <li><Link to="" className="d-block text-dark px-3 py-2">랭킹별</Link></li>
                    </ul>
                </div>
                {/*2차 카테고리*/}
            </div>
            {/*pc*/}
            <nav className="navbar navbar-expand-lg d-md-block d-none">
                <div className="container">
                    <Link to="/" className="navbar-brand header-navbar-brand">
                        <strong>KMP MOVIE DB</strong>
                    </Link>

                    <button className="navbar-toggler">
                        <span className="toggler-icon"></span>
                    </button>


                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link">현재상영작</a>
                                <label className="px-dropdown-toggle mob-menu bi bi-chevron-down open"></label>

                                <div className="dropdown-menu dropdown-menu">
                                    <div className="">
                                        <div className="">
                                            <ul className="list-unstyled">
                                                <li><Link to={{pathname:`/boxoffice/${Kmovie}`, state:{lanMovie:Kmovie}}} class="dropdown-item">국내영화</Link></li>
                                                <li><Link to={{pathname:`/boxoffice/${Fmovie}`, state:{lanMovie:Fmovie}}} class="dropdown-item">해외영화</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/rating" className="nav-link">평점순</Link>
                                <label className="px-dropdown-toggle mob-menu bi bi-chevron-down open"></label>

                                <div className="dropdown-menu dropdown-menu">
                                    <div className="">
                                        <div className="">
                                            <ul className="list-unstyled">
                                                <li><Link to={{pathname:`/rating/${Kmovie}`, state:{lanMovie:Kmovie}}} class="dropdown-item">국내영화</Link></li>
                                                <li><Link to={{pathname:`/rating/${Fmovie}`, state:{lanMovie:Fmovie}}} class="dropdown-item">해외영화</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/types" className="nav-link">장르별</Link>
                                <label className="px-dropdown-toggle mob-menu bi bi-chevron-down open"></label>

                                <div className="dropdown-menu dropdown-menu">
                                    <div className="">
                                        <div className="">
                                            <ul className="list-unstyled">
                                                <li><Link to="" class="dropdown-item">SF</Link></li>
                                                <li><Link to="" class="dropdown-item">로맨스</Link></li>
                                                <li><Link to="" class="dropdown-item">코미디</Link></li>
                                                <li><Link to="" class="dropdown-item">멜로</Link></li>
                                                <li><Link to="" class="dropdown-item">스릴러</Link></li>
                                                <li><Link to="" class="dropdown-item">공포</Link></li>
                                                <li><Link to="" class="dropdown-item">전쟁</Link></li>
                                                <li><Link to="" class="dropdown-item">스포츠</Link></li>
                                                <li><Link to="" class="dropdown-item">판타지</Link></li>
                                                <li><Link to="" class="dropdown-item">음악</Link></li>
                                                <li><Link to="" class="dropdown-item">뮤지컬</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/boxoffice" className="nav-link">수익별</Link>
                                <label className="px-dropdown-toggle mob-menu bi bi-chevron-down open"></label>

                                <div className="dropdown-menu dropdown-menu">
                                    <div className="">
                                        <div className="">
                                            <ul className="list-unstyled">
                                                <li><Link to="" class="dropdown-item">국내영화</Link></li>
                                                <li><Link to="" class="dropdown-item">해외영화</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/board" className="nav-link">KMP평점</Link>
                                <label className="px-dropdown-toggle mob-menu bi bi-chevron-down open"></label>

                                <div className="dropdown-menu dropdown-menu">
                                    <div className="">
                                        <div className="">
                                            <ul className="list-unstyled">
                                                <li><Link to="" class="dropdown-item">국내영화</Link></li>
                                                <li><Link to="" class="dropdown-item">해외영화</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/board" className="nav-link">랭킹별</Link>
                                <label className="px-dropdown-toggle mob-menu bi bi-chevron-down open"></label>

                                <div className="dropdown-menu dropdown-menu">
                                    <div className="">
                                        <div className="">
                                            <ul className="list-unstyled">
                                                <li><Link to="" class="dropdown-item">평점랭킹</Link></li>
                                                <li><Link to="" class="dropdown-item">수익랭킹</Link></li>
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