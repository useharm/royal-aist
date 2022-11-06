import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Swiper as SwiperType, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { menuSelector, setOpenReview } from '../../redux/slices/menuSlice';
import { useAppDispatch } from '../../redux/store';
import ModalDone from './modalcomponents/ModalDone';
import ModalReviewOne from './modalcomponents/ModalReviewOne';
type PopupWindow = MouseEvent & {
    path: Node[]
  }
const ModalReview: React.FC<any> = ({buttonRef}) => {
    const { isOpenReview } = useSelector(menuSelector);
    const swiperRef = useRef<SwiperType>();
    const dispatch = useAppDispatch();
    function closeModal() {
        dispatch(setOpenReview(false));
        setTimeout(() => {
            swiperRef.current?.slideTo(0, 0, false);
        }, 300)
    }
    const modalRef = useRef<HTMLDivElement>(null);
    function bodyClick(e: MouseEvent) {
        const _e = e as PopupWindow;
        if (modalRef.current && !_e.path.includes(modalRef.current) && !_e.path.includes(buttonRef.current)) {
          dispatch(setOpenReview(false));
          setTimeout(() => {
            swiperRef.current?.slideTo(0, 0, false);
        }, 300)
        }
      }
    useEffect(() => {
      document.body.addEventListener('click', bodyClick);
      return () => document.body.removeEventListener('click', bodyClick)
      }, [])
    return (
    <div id="modal" className={isOpenReview ? 'modal modal-active' : 'modal'}>
        <div className={isOpenReview ? 'modal-content modal-content-active' : 'modal-content'}>
            <div ref={modalRef} className="modal-registration modal-sing">
                <div className="close" onClick={() => closeModal()}></div>
                <Swiper modules={[Pagination]} spaceBetween={30} onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }} allowTouchMove={false}>
                    <SwiperSlide><ModalReviewOne swiperRef={swiperRef}/></SwiperSlide>
                    <SwiperSlide><ModalDone /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
    );
};

export default ModalReview;