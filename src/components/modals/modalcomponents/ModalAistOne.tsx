import React from 'react';
import { setOpenSignUp } from '../../../redux/slices/menuSlice';
import { useAppDispatch } from '../../../redux/store';
import { Swiper as SwiperType } from "swiper";

type PropsType = {
    swiperRef: SwiperType
}

const ModalAistOne: React.FC<any> = ({swiperRef}) => {
    const dispatch = useAppDispatch();
    return (
            <div>
            {/* <div id="modal-aist" className='modal modal-active'>
        <div className='modal-content modal-content-active'>
            <div className="modal-registration modal-sing">
                <div className="close" onClick={() => dispatch(setOpenSignUp(false))}></div> */}
                <div className="modal-sing__numb">
                    <strong>Sign up at the Aist center</strong>
                    <span>1/3</span>
                </div>
                <div className="modal-enroll">
                    <span>How many children do you want to enroll?</span>
                    <div className="add-catalog-for-shop">
                        <div className="add-catalog-val-count">
                            <div className="decrement">
                                <span>-</span>
                            </div>
                            <label>
                                <input type="text" className="catalog-count-value"
                                       data-mane="16689" value="1" />
                            </label>
                            <div className="increment">
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal__button modal__button-first">
                    <button className="btn__liner" style={{display: 'none'}}>Back</button>
                    <button className="btn" onClick={() => swiperRef.current?.slideNext()}>Next</button>
                </div>
            {/* </div>
        </div>
    </div> */}
    </div>
    );
};

export default ModalAistOne;