import React, { useState } from 'react';
import { svgs } from '../assets/svgs';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { menuSelector, setOpenMobile } from '../redux/slices/menuSlice';
import { useSelector } from 'react-redux';

const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const { isOpenMobile } = useSelector(menuSelector);
    return (
        <header>
    <div className="container">
        <div className="header__main">
            <div className="header__logo">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 280 348">
                        <image id="Слой_1" data-name="Слой 1" width="100%" height="100%" />
                    </svg>
                </a>
            </div>
            <div onClick={() => isOpenMobile ? dispatch(setOpenMobile(false)) : dispatch(setOpenMobile(true))} className={isOpenMobile ? 'open-menu close-menu' : 'open-menu'}> {/* close-menu */}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="for-mobile-bg"></div>
            <div className={isOpenMobile ? 'menu-cnt mobile-bg-1 transition-menu' : 'menu-cnt mobile-bg-1'}>
                <div className="sidenav">
                    <ul>
                        <li><Link to="/">Аbout</Link></li>
                        <li><Link to="/lessons">Lessons</Link></li>
                        <li><Link to="/groups">Groups</Link></li>
                        <li><Link to="/teachers">Teachers</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/reviews">Reviews</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>
                    <a href="#" className="btn__liner">Sign up</a>
                    <div className="footer__soc">
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/aist_royal/ " target="_blank">
                                    <div className="href__links">
                                        <img src={svgs['./instagram.svg']} alt="" />
                                    </div>
                                    <span>@aist_ecc</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel: +971 43 839188" target="_blank">
                                    <div className="href__links">
                                        <img src={svgs['./phone.svg']} alt="" />
                                    </div>
                                    <span>+971 43 839188</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="href__links">
                                        <img src={svgs['./street.svg']} alt="" />
                                    </div>
                                    <span>Dubai, UAE <br /> umm suqeim 3, villa 25</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </header>
    );
};

export default Header;