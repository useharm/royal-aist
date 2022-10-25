import React from 'react';
import { svgs } from '../assets/svgs';

const Reviews: React.FC = () => {
    return (
        <div>
            <section className="all__marg">
    <div className="container">
        <div className="reviews__main">
            <h2>what parents say
                about us</h2>
            <div className="swiper reviews__slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="reviews__info">
                            <p>
                                I want to express my gratitude to you once again! You have
                                a wonderful kindergarten and an amazing teaching staff!
                                Ilyasik has such positive changes, the whole family can't stop admiring you all!
                            </p>
                            <span>Maria Sofarova</span>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="reviews__info">
                            <p>
                                My daughter Maryam started going to Stork Academy every day for 3 months.
                                My original goal was at least adapted to understand the command in Russian,
                                but how happy I was even now at home.
                            </p>
                            <span>Irina Maksimova</span>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="reviews__info">
                            <p>
                                I think that for children who go to English-speaking kindergartens, the Russian-speaking
                                winter camp in Aist
                                is a great opportunity to keep their 2nd language. The center is located in its own
                                separate villa with a good area
                            </p>
                            <span>Anna Bobrenko</span>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
            <div className="reviews__btn">
                <a href="#" className="btn">Leave a review</a>
            </div>
        </div>
    </div>
</section>


<section>
    <div className="container">
        <div className="trial-child">
            <div className="trial-child__name">
                <h3>sign up your child for a trial DAY</h3>
                <a href="#" className="btn">Sign up</a>
            </div>
            <div className="trial-child__photo">
                <img src={svgs['./eniml.png']} alt="" />
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default Reviews;