import React from 'react';
import { svgs } from '../assets/svgs';

const Footer: React.FC = () => {
    return (
        <footer>
    <div className="container">
        <div className="footer__main">
            <div className="footer__logo">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 280 348">
                        <image id="Слой_1" data-name="Слой 1" width="100%" height="100%" />
                    </svg>
                </a>
            </div>
            <div className="footer__menu">
                <ul>
                    <li><a href="#">Аbout</a></li>
                    <li><a href="#">Lessons</a></li>
                    <li><a href="#">Groups</a></li>
                </ul>
            </div>
            <div className="footer__menu">
                <ul>
                    <li><a href="#">Teachers</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Reviews</a></li>
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