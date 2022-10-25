import React from 'react';
import { svgs } from '../assets/svgs';

const Contacts: React.FC = () => {
    return (
        <div>
            <section className="all__marg">
    <div className="container">
        <div className="contact__main">
            <div className="contact__flex">
                <div className="contact__cnt">
                    <div className="contact__photo">
                        <img src={svgs['./eniml.png']} alt="" />
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
                                <span>8:00 am to 6:00 pm</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="contact__info">
                    <h2>CONTACT US!</h2>
                    <form>
                        <div className="contact__inp">
                            <label>
                                <input type="text" placeholder="Name" />
                            </label>
                        </div>
                        <div className="contact__inp">
                            <label>
                                <input type="text" placeholder="E-mail" />
                            </label>
                        </div>
                        <div className="contact__inp">
                            <label>
                                <textarea placeholder="Comments"></textarea>
                            </label>
                        </div>
                        <button className="btn">Send</button>
                    </form>
                </div>
            </div>
            <div className="contact__map">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A671fa3fce0a3a0f918e0adf4aa0f1c4bb5431b3633960aa3dc76038259f21d9d&amp;source=constructor" width="100%" height="100%" frameBorder="0"></iframe>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default Contacts;