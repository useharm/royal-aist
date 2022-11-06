import React from 'react';
import { Swiper as SwiperType } from "swiper";
import { inputTypes } from '../../../redux/slices/registerChildSlice';



type propsType = {
    swiperRef: React.MutableRefObject<SwiperType | undefined>;
    value: inputTypes;
    setValue: React.Dispatch<React.SetStateAction<inputTypes>>;
}

const ModalAistTwo: React.FC<propsType> = ({swiperRef, value, setValue}) => {
    function modalNext() {
        swiperRef.current?.slideNext();
    }
    return (
        <div>
                <div className="modal-sing__numb">
                    <strong>Sign up at the Aist center</strong>
                    <span>2/3</span>
                </div>
                <div className="modal-enroll">
                    <span>What age is the baby(s)?</span>
                    <div className="block-checked">
                        <label className="checkcontainer">
                            1.5 - 3.5 (Junior group)
                            <input type="checkbox" 
                            checked={value.junior}
                            onChange={e => setValue({
                                junior: e.target.checked,
                                middle: value.middle,
                                senior: value.senior,
                            })}
                            />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="block-checked">
                        <label className="checkcontainer">
                            3.5 - 4.5 (Middle group)
                            <input type="checkbox" 
                            checked={value.middle}
                            onChange={e => setValue({
                                junior: value.junior,
                                middle: e.target.checked,
                                senior: value.senior,
                            })}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="block-checked">
                        <label className="checkcontainer">
                            4,5 - 6 (Senior group)
                            <input type="checkbox" 
                            checked={value.senior}
                            onChange={e => setValue({
                                junior: value.junior,
                                middle: value.middle,
                                senior: e.target.checked,
                            })}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div className="modal__button">
                    <button className="btn__liner" onClick={() => swiperRef.current?.slidePrev()}>Back</button>
                    <button className="btn" onClick={() => modalNext()}>Next</button>
                </div>
    </div>
    );
};

export default ModalAistTwo;