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
    // 모바일 메뉴
    const [menuShow, menuClose] = useState(false);
    // 서브 메뉴
    const [subShow1, subClose1]   = useState(false);
    const [subShow2, subClose2]   = useState(false);
    const [subShow3, subClose3]   = useState(false);
    const [subShow4, subClose4]   = useState(false);
    const [subShow5, subClose5]   = useState(false);
    const [subShow6, subClose6]   = useState(false);

    const Kmovie = 'K';
    const Fmovie = 'F';

    return (
        <header className="main-header">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link to="/" className="navbar-brand header-navbar-brand">
                        <strong>KMP MOVIE DB</strong>
                    </Link>

                    <button className="navbar-toggler" onClick={()=> menuClose(!menuShow)} aria-controls="navbarSupportedContent" aria-expanded={menuShow}>
                        <span className="toggler-icon"></span>
                    </button>

                    <Collapse in={menuShow}>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link">현재상영작</a>
                                <label onClick={()=> subClose1(!subShow1)} aria-controls="navbarSupportedContent" aria-expanded={subShow1} className="px-dropdown-toggle mob-menu bi bi-chevron-down open"></label>
                                <Collapse in={subShow1}>
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
                                </Collapse>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/rating" className="nav-link">평점순</Link>
                                <label onClick={()=> subClose2(!subShow2)} aria-controls="navbarSupportedContent" aria-expanded={subShow2} className="px-dropdown-toggle mob-menu bi bi-chevron-down open"></label>
                                <Collapse in={subShow2}>
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
                                </Collapse>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/types" className="nav-link">장르별</Link>
                                <label onClick={()=> subClose3(!subShow3)} aria-controls="navbarSupportedContent" aria-expanded={subShow3} className="px-dropdown-toggle mob-menu bi bi-chevron-down open"></label>
                                <Collapse in={subShow3}>
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
                                </Collapse>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/boxoffice" className="nav-link">수익별</Link>
                                <label onClick={()=> subClose4(!subShow4)} aria-controls="navbarSupportedContent" aria-expanded={subShow4} className="px-dropdown-toggle mob-menu bi bi-chevron-down open"></label>
                                <Collapse in={subShow4}>
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
                                </Collapse>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/board" className="nav-link">KMP평점</Link>
                                <label onClick={()=> subClose5(!subShow5)} aria-controls="navbarSupportedContent" aria-expanded={subShow5} className="px-dropdown-toggle mob-menu bi bi-chevron-down open"></label>
                                <Collapse in={subShow5}>
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
                                </Collapse>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/board" className="nav-link">랭킹별</Link>
                                <label onClick={()=> subClose6(!subShow6)} aria-controls="navbarSupportedContent" aria-expanded={subShow6} className="px-dropdown-toggle mob-menu bi bi-chevron-down open"></label>
                                <Collapse in={subShow6}>
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
                                </Collapse>
                            </li>
                        </ul>
                    </div>
                    </Collapse>
                </div>
            </nav>
        </header>
    );
}


export default Header;