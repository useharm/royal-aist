import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Swiper as SwiperType, Pagination } from "swiper";
import { menuSelector, setOpenSignUp } from '../../redux/slices/menuSlice';
import { useAppDispatch } from '../../redux/store';
import ModalAistOne from './modalcomponents/ModalAistOne';
import ModalAistTwo from './modalcomponents/ModalAistTwo';
import ModalAistThree from './modalcomponents/ModalAistThree';
import SwiperClass from 'swiper'

const ModalAist: React.FC = () => {
    const { isOpenSignUp } = useSelector(menuSelector);
    const dispatch = useAppDispatch();
    const swiperRef = useRef<SwiperType>();
    return (
        <div id="modal-aist" className={isOpenSignUp ? 'modal modal-active' : 'modal'}>
        <div className={isOpenSignUp ? 'modal-content modal-content-active' : 'modal-content'}>
        <div className="modal-registration modal-sing">
        <div className="close" onClick={() => dispatch(setOpenSignUp(false))}></div>
                <Swiper modules={[Pagination]} spaceBetween={30} onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}>
                    <SwiperSlide><ModalAistOne swiperRef={swiperRef}/></SwiperSlide>
                    <SwiperSlide><ModalAistTwo swiperRef={swiperRef}/></SwiperSlide>
                    <SwiperSlide><ModalAistThree swiperRef={swiperRef}/></SwiperSlide>
                </Swiper>
        </div>
        </div>
        </div>
    );
};

export default ModalAist;