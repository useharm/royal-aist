import React from 'react';
import { svgs } from '../assets/svgs';
import SignUpBlock from '../components/SignUpBlock';

const Groups: React.FC = () => {
    return (
        <div>
            <section className="all__marg">
    <div className="container">
        <div className="groups__main">
            <h2>groups FOR CHILDREN OF YOUR AGE</h2>
            <div className="groups__flex">
                <div className="groups__box">
                    <div className="groups__info">
                        <strong>junior group</strong>
                        <div className="groups__photo">
                            <img src={svgs['./image1199.jpg']} alt="" />
                        </div>
                        <ul>
                            <li>Age: 1.5 to 3.5 years</li>
                            <li>Amount of children: 5-7</li>
                            <li>Teacher: 20 years of experience</li>
                            <li>
                                Activities: game activities, speech development, mathematics for kids,
                                drawing, development of fine motor
                                skills, music, construction, a walk
                                on the playground.
                            </li>
                        </ul>
                        <div className="groups__login">
                            <a href="#" className="btn">Sign up</a>
                            <div className="groups__price">
                                <span>1100$ </span>
                                <p>
                                    per month
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="groups__box">
                    <div className="groups__info">
                        <strong>middle group</strong>
                        <div className="groups__photo">
                            <img src={svgs['./image11952.jpg']} alt="" />
                        </div>
                        <ul>
                            <li>Age: 3.5 to 4.5 years</li>
                            <li>Amount of children: 8-10</li>
                            <li>Teacher: 10 years of experience</li>
                            <li>
                                Activities: play activity, speech development,
                                mathematics, music, logic development, theater art, literature, walks on the playground.
                            </li>
                        </ul>
                        <div className="groups__login">
                            <a href="#" className="btn">Sign up</a>
                            <div className="groups__price">
                                <span>980$</span>
                                <p>per month</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="groups__box">
                    <div className="groups__info">
                        <strong>senior group</strong>
                        <div className="groups__photo">
                            <img src={svgs['./pexels12.jpg']} alt="" />
                        </div>
                        <ul>
                            <li>Age: 4.5 to 6 years</li>
                            <li>Amount of children: 10-12</li>
                            <li>Teacher: 15 years of experience</li>
                            <li>
                                Activities: game activities, preparation for school: literacy, reading, logic
                                and mathematics, preparing a hand for writing, art, walking on the playground.
                            </li>
                        </ul>
                        <div className="groups__login">
                            <a href="#" className="btn">Sign up</a>
                            <div className="groups__price">
                                <span>900$</span>
                                <p>per month</p>
                            </div>
                        </div>
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

export default Groups;