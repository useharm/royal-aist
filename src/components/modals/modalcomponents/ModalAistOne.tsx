import React from 'react';
import { Swiper as SwiperType } from "swiper";

type propsType = {
    swiperRef: React.MutableRefObject<SwiperType | undefined>;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}
const ModalAistOne: React.FC<propsType> = ({swiperRef, count, setCount}) => {
    return (
            <div>
                <div className="modal-sing__numb">
                    <strong>Sign up at the Aist center</strong>
                    <span>1/3</span>
                </div>
                <div className="modal-enroll">
                    <span>How many children do you want to enroll?</span>
                    <div className="add-catalog-for-shop">
                        <div className="add-catalog-val-count">
                            <div className={(count <= 1 ? 'decrement decrement-inactive' : 'decrement')}>
                                <span onClick={() => (count > 1 ? setCount(count - 1) : null)}>-</span>
                            </div>
                            <label>
                                <input type="text" className="catalog-count-value"
                                       data-mane="16689" value={count} readOnly/>
                            </label>
                            <div className="increment">
                                <span onClick={() => setCount(count + 1)}>+</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal__button modal__button-first">
                    <button className="btn__liner" style={{display: 'none'}}>Back</button>
                    <button className="btn" onClick={() => swiperRef.current?.slideNext()}>Next</button>
                </div>
    </div>
    );
};

export default ModalAistOne;