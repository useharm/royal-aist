import React from 'react';
import { svgs } from '../assets/svgs';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from "swiper";
import ModalReview from '../components/modals/ModalReview';
import { setOpenReview } from '../redux/slices/menuSlice';
import { useAppDispatch } from '../redux/store';
import SignUpBlock from '../components/SignUpBlock';

const Reviews: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <div>
            {/* {isOpenReview ? <ModalReview /> : null} */}
            <ModalReview />
            <section className="all__marg">
    <div className="container">
        <div className="reviews__main">
            <h2>what parents say
                about us</h2>
            <div className="swiper reviews__slider">
                <Swiper pagination={{ clickable: true }} modules={[Pagination]}>
                    <SwiperSlide>
                        <div className="reviews__info">
                            <p>
                                I want to express my gratitude to you once again! You have
                                a wonderful kindergarten and an amazing teaching staff!
                                Ilyasik has such positive changes, the whole family can't stop admiring you all!
                            </p>
                            <span>Maria Sofarova</span>
                        </div>
                        </SwiperSlide>
                    <SwiperSlide>
                        <div className="reviews__info">
                            <p>
                                My daughter Maryam started going to Stork Academy every day for 3 months.
                                My original goal was at least adapted to understand the command in Russian,
                                but how happy I was even now at home.
                            </p>
                            <span>Irina Maksimova</span>
                        </div>
                        </SwiperSlide>
                    <SwiperSlide>
                        <div className="reviews__info">
                            <p>
                                I think that for children who go to English-speaking kindergartens, the Russian-speaking
                                winter camp in Aist
                                is a great opportunity to keep their 2nd language. The center is located in its own
                                separate villa with a good area
                            </p>
                            <span>Anna Bobrenko</span>
                        </div>
                        </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            <div className="reviews__btn">
                <button className="btn" onClick={() => dispatch(setOpenReview(true))}>Leave a review</button>
            </div>
        </div>
    </div>
</section>


<SignUpBlock />
        </div>
    );
};

export default Reviews;