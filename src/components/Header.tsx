import React, { useEffect, useRef } from 'react';
import { svgs } from '../assets/svgs';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { menuSelector, setOpenMobile, setOpenSignUp } from '../redux/slices/menuSlice';
import { useSelector } from 'react-redux';

type PopupWindow = MouseEvent & {
    path: Node[]
  }

const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const { isOpenMobile } = useSelector(menuSelector);
    const modalRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);
    function bodyClick(e: MouseEvent) {
        const _e = e as PopupWindow;
        if (modalRef.current && buttonRef.current && !_e.path.includes(modalRef.current) && !_e.path.includes(buttonRef.current)) {
          dispatch(setOpenMobile(false));
        }
      }
    useEffect(() => {
      document.body.addEventListener('click', bodyClick);
      return () => document.body.removeEventListener('click', bodyClick)
      }, [])
    return (
        <header>
    <div className="container">
        <div className="header__main">
            <div className="header__logo">
            <Link to="/">
                        <img src={svgs['./logo.png']}/>
                </Link>
            </div>
            <div ref={buttonRef} onClick={() => isOpenMobile ? dispatch(setOpenMobile(false)) : dispatch(setOpenMobile(true))} className={isOpenMobile ? 'open-menu close-menu' : 'open-menu'}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="for-mobile-bg"></div>
            <div ref={modalRef} className={isOpenMobile ? 'menu-cnt  transition-menu' : 'menu-cnt '}>
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
                    <button onClick={() => dispatch(setOpenSignUp(true))} className="btn__liner">Sign up</button>
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