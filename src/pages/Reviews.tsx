import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import ModalReview from '../components/modals/ModalReview';
import { setOpenReview } from '../redux/slices/menuSlice';
import { useAppDispatch } from '../redux/store';
import SignUpBlock from '../components/SignUpBlock';
import { useSelector } from 'react-redux';
import { reviewSelector } from '../redux/slices/reviewSlice';

const Reviews: React.FC = () => {
    const dispatch = useAppDispatch();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const { reviews } = useSelector(reviewSelector);
    return (
        <div>
            <ModalReview buttonRef={buttonRef}/>
            <section className="all__marg">
    <div className="container">
        <div className="reviews__main">
            <h2>what parents say
                about us</h2>
            <div className="swiper reviews__slider">
                <Swiper pagination={{ clickable: true }} modules={[Pagination]}>
                    {reviews.map((item, index) => (<SwiperSlide key={index}>
                        <div className="reviews__info">
                            <p>
                                {item.title}
                            </p>
                            <span>{item.name}</span>
                        </div>
                        </SwiperSlide>))}
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            <div className="reviews__btn">
                <button ref={buttonRef} className="btn" onClick={() => dispatch(setOpenReview(true))}>Leave a review</button>
            </div>
        </div>
    </div>
</section>


<SignUpBlock />
        </div>
    );
};

export default Reviews;