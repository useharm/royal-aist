import React from 'react';
import { useSelector } from 'react-redux';
import { svgs } from '../assets/svgs';
import ModalAist from '../components/modals/ModalAist';
import ModalVideo from '../components/modals/ModalVideo';
import SignUpBlock from '../components/SignUpBlock';
import { menuSelector, setOpenSignUp, setOpenVideo } from '../redux/slices/menuSlice';
import { useAppDispatch } from '../redux/store';

const Main: React.FC = () => {
    const dispatch = useAppDispatch();
    const { isOpenVideo } = useSelector(menuSelector);
    return (
        <div>
            <ModalAist/>
            <ModalVideo />
<section className="all__marg">
    <div className="container">
        <div className="royal__main">
            <div className="royal__info">
                <h1>Welcome to AIST ROYAL ECC</h1>
                <p>
                    <span>First multilingual ECC in UAE</span>
                    Dubai, umm suqeim 3, villa 25
                    8:00 am – 6:00 pm
                </p>
                <div className="royal__btn">
                    <span>Register your child for one <b>free trial day!</b></span>
                    <button onClick={() => dispatch(setOpenSignUp(true))} className="btn">Sign up</button>
                </div>
            </div>
            <div className="royal__cnt">
                <div className="royal__photo">
                    <div onClick={() => dispatch(setOpenVideo(true))}>
                        <img src={svgs['./image2179.jpg']} alt="" />
                    </div>
                </div>
                <div className="royal__leng">
                    <a href="#">Russian</a>
                    <a href="#">Francais</a>
                    <a href="#">English</a>
                    <a href="#">Arabic</a>
                </div>
            </div>
        </div>
    </div>
</section>
<section>
    <div className="container">
        <div className="bilingual__cnt">
            <div className="swiper franchise-slide">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="bilingual__flex" style={{background: `url(${svgs["./aas1.png"]})`}}>
                            <div className="bilingual__photo">
                                <img src={svgs['./baby1.png']} alt="" />
                            </div>
                            <div className="bilingual__info">
                                <strong>OUR MISSION</strong>
                                <p>
                                    develop non-standard-minded modern children by creating for them such a bilingual
                                    environment in which children develop as individuals<br />
                                    and at the same time preserve the languages<br />
                                    of their parents without mixing them
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="bilingual__flex" style={{background: `url(${svgs["./aas2.png"]})`}}>
                            <div className="bilingual__photo">
                                <img src={svgs['./baby2.png']} alt="" />
                            </div>
                            <div className="bilingual__info">
                                <strong>OUR VISION</strong>
                                <p>
                                    to become the world's best educational platform for bilingual children,
                                    where they not only receive the most modern education in two or more
                                    languages, but preserve their family cultural<br />
                                    and linguistic identity
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="bilingual__flex" style={{background: `url(${svgs["./aas3.png"]})`}}>
                            <div className="bilingual__photo">
                                <img src={svgs['./baby3.png']} alt="" />
                            </div>
                            <div className="bilingual__info">
                                <strong>OUR GOAL</strong>
                                <p>
                                    to provide children aged 1.5-6 years the most innovative bilingual education,
                                    thanks to which children will fully develop as individuals, while preserving
                                    the languages of their parents, <br /> without mixing them
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    </div>
</section>
<SignUpBlock />
<section>
    <div className="our-approach">
        <div className="container">
            <div className="our-approach__flex">
                <h2>OUR APPROACH</h2>
                <div className="our-approach__block">
                    <ul>
                        <li>
                            <img src={svgs['./a.png']} alt="" />
                            <p>As communication and globalization brings the world
                                closer, a constant blending of cultures risks
                                overshadowing the heterogeneity of the many who
                                make up our society – where we end up with a bland mix.</p>
                        </li>
                        <li>
                            <img src={svgs['./b.png']} alt="" />
                            <p>As the English language further establishes itself as an 
                                international choice of communication, it begins to overshadow 
                                other languages. Education systems compete incontent and 
                                style, but they are based in English, which means the cultural
                                aspects of other subjects like math and science can be lost.
                                Moreover, the child's brain might be processing the information 
                                and having to translate it to a different language.</p>
                        </li>
                        <li>
                            <img src={svgs['./c.png']} alt="" />
                            <p>In many countries, including the UAE, English is taught
                                in a manner that displaces other languages and the cultures
                                attached to them. The AIST approach aims to safeguard
                                tradition while development global citizens.</p>
                        </li>
                        <li>
                            <img src={svgs['./d.png']} alt="" />
                            <p>An increasing number of intercultural marriages exacerbate
                                the issue by placing the child in a trilingual environment.
                                The mother's language, the father's language, and English 
                                between the parents. The social challenge must be addressed
                                at the earliest opportunity possible.</p>
                        </li>
                        <li>
                            <img src={svgs['./e.png']} alt="" />
                            <p>Children are very open and adaptive to unlimited new languages 
                                up to 5 years old, after which they enter a "stabilization" phase.
                                AIST ECC works with children from 18 months till 6 years old
                                to help promote the key language skills they need.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<section>
    <div className="container">
        <div className="future-nova">
            <div className="future-nova__flex">
                <div className="future-nova__photo">
                    <img src={svgs['./Aist_grey.png']} alt="" />
                </div>
                <div className="future-nova__title">
                    <h2>MAN OF THE FUTURE - NOVATOR</h2>
                    <p>Combining elements from different methodologies while 
                        ensuring they work as whole, gives way to create a fresh 
                        methodology that evolves with the needs of the world.</p>
                </div>
            </div>
            <div className="future-nova__fon">
                <div className="future-nova__img">
                    <div className="future-nova__name">
                        <ul>
                            <li>REENGINEERED METHODOLOGIES</li>
                            <li>INNOVATIVE TECHNIQUE</li>
                            <li>INDIVIDUAL APPROACH</li>
                            <li>COMPETENCE
                                BASED LEARNING PROCESS
                            </li>
                            <li>AN INNOVATIVE <br /> TEAM OF EDUCATORS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section>
    <div className="container">
        <div className="education__fon">
            <div className="education__through">
                <div className="education__title">
                    <h2>EDUCATION THROUGH INNOVATION</h2>
                </div>
                <div className="education__photo">
                    <img src={svgs['./ga535.png']} alt="" />
                </div>
            </div>
            <div className="education__flex">
                <div className="education__text">
                    <p>Our teachers work to consistently and 
                    purposefully to turn innovative ideas 
                    into practice, modifying them according 
                    to the needs of the students and their
                    environment to ensure high-quality 
                    results.
                    </p>
                    <p>An innovative teacher (methodologist) 
                    selects and evaluates the possibilities 
                    of applying new ideas and methods 
                    proposed by his colleagues and 
                    pedagogical modern science.
                    </p>
                </div>
                <div className="education__text">
                    <p>Teachers at AIST are students of their 
                    own students, they are researchers and 
                    promoters of the best, both old and 
                    new, technologies and concepts of the
                    pedagogical process.
                    </p>
                    <p>An innovative teacher is a professional 
                    who is ready for experiments and 
                    changes in the entire pedagogical process.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<section>
    <div className="container">
        <div className="business-kids">
            <div className="business-kids__box">
                <div className="business-kids__photo">
                    <img src={svgs['./img16.png']} alt="" />
                </div>
                <div className="business-kids__photo">
                    <div className="dancing-classNamees">
                        <strong>Music, Art
                            and dancing classNamees</strong>
                    </div>
                    <img src={svgs['./krukov-862.png']} alt="" />
                </div>
            </div>

            <div className="business-kids__box">
                <div className="business-kids__photo">
                    <img src={svgs['./pex22.png']} alt="" />
                    <div className="dancing-kids">
                        <strong>Business
                            FOX Kids
                            from 5 yrs</strong>
                    </div>
                </div>
                <div className="business-kids__photo">
                    <img src={svgs['./pexels862.png']} alt="" />
                    <div className="reading-writing">
                        <strong>Reading & writing
                            Mathematics
                            Educational classNamees for bilingual kids</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<SignUpBlock />
        </div>
    );
};

export default Main;