import React from 'react';
import { Link } from 'react-router-dom';
import { svgs } from '../assets/svgs';

const Footer: React.FC = () => {
    function smoothScroll() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }
    return (
        <footer>
    <div className="container">
        <div className="footer__main">
            <div className="footer__logo">
            <Link to="/" onClick={() => smoothScroll()}>
                        <img src={svgs['./logo.png']}/>
                </Link>
            </div>
            <div className="footer__menu">
                <ul>
                    <li><Link to="/" onClick={() => smoothScroll()}>Аbout</Link></li>
                    <li><Link to="lessons" onClick={() => smoothScroll()}>Lessons</Link></li>
                    <li><Link to="groups" onClick={() => smoothScroll()}>Groups</Link></li>
                </ul>
            </div>
            <div className="footer__menu">
                <ul>
                    <li><Link to="teachers" onClick={() => smoothScroll()}>Teachers</Link></li>
                    <li><Link to="gallery" onClick={() => smoothScroll()}>Gallery</Link></li>
                    <li><Link to="reviews" onClick={() => smoothScroll()}>Reviews</Link></li>
            </ul>
            </div>
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
    </footer>
    );
};

export default Footer;