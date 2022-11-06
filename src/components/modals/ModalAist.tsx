import React, { useRef, useState } from 'react';
import {  useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Pagination } from "swiper";
import { menuSelector, setOpenSignUp } from '../../redux/slices/menuSlice';
import { useAppDispatch } from '../../redux/store';
import ModalAistOne from './modalcomponents/ModalAistOne';
import ModalAistTwo from './modalcomponents/ModalAistTwo';
import ModalAistThree from './modalcomponents/ModalAistThree';
import ModalWillCall from './modalcomponents/ModalWillCall';
import { inputTypes } from '../../redux/slices/registerChildSlice';

const ModalAist: React.FC = () => {
    const { isOpenSignUp } = useSelector(menuSelector);
    const dispatch = useAppDispatch();
    const swiperRef = useRef<SwiperType>();
    const [count, setCount] = useState<number>(1);
    const [value, setValue] = useState<inputTypes>({
        junior: false,
        middle: false,
        senior: false,
    });
    function closeModal() {
        dispatch(setOpenSignUp(false));
        setTimeout(() => {
            swiperRef.current?.slideTo(0, 0, false);
        }, 300)
    }
    return (
        <div onClick={() => closeModal()} id="modal-aist" className={isOpenSignUp ? 'modal modal-active' : 'modal'}>
        <div className={isOpenSignUp ? 'modal-content modal-content-active' : 'modal-content'}>
        <div onClick={(e) => e.stopPropagation()} className="modal-registration modal-sing">
        <div className="close" onClick={() => closeModal()}></div>
                <Swiper modules={[Pagination]} spaceBetween={30} onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }} allowTouchMove={false} >
                    <SwiperSlide><ModalAistOne swiperRef={swiperRef} count={count} setCount={setCount}/></SwiperSlide>
                    <SwiperSlide><ModalAistTwo swiperRef={swiperRef} value={value} setValue={setValue}/></SwiperSlide>
                    <SwiperSlide><ModalAistThree swiperRef={swiperRef} count={count} setCount={setCount} group={value} setGroup={setValue}/></SwiperSlide>
                    <SwiperSlide><ModalWillCall/></SwiperSlide>
                </Swiper>
        </div>
        </div>
        </div>
    );
};

export default ModalAist;