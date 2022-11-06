import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { menuSelector, setOpenSignUp } from '../../../redux/slices/menuSlice';
import { contactsType, inputTypes, setNewChild } from '../../../redux/slices/registerChildSlice';
import { useAppDispatch } from '../../../redux/store';
import { Swiper as SwiperType } from "swiper";



type propsType = {
    swiperRef: React.MutableRefObject<SwiperType | undefined>;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    group: inputTypes;
    setGroup: React.Dispatch<React.SetStateAction<inputTypes>>;
}

const ModalAistThree: React.FC<propsType> = ({swiperRef, count, setCount, group, setGroup}) => {
    const dispatch = useAppDispatch();
    const { isOpenSignUp } = useSelector(menuSelector);
    const timeoutRef: { current: NodeJS.Timeout | null } = useRef(null);
    const [value, setValue] = useState<contactsType>({
        name: '',
        phone: '',
    })
    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }, [isOpenSignUp])
    function send() {
       swiperRef.current?.slideNext();
       timeoutRef.current = setTimeout(() => {
                dispatch(setOpenSignUp(false));
            setTimeout(() => {
                swiperRef.current?.slideTo(0);
            }, 300)
        }, 2500)
        dispatch(setNewChild({
            count: count,
            groups: group,
            contacts: value,
        }));
        setCount(1);
        setValue({
            name: '',
            phone: '',
        });
        setGroup({
            junior: false,
            middle: false,
            senior: false,
        });
    }
    
    return (
        <div>
                <div className="modal-sing__numb">
                    <strong>Sign up at the Aist center</strong>
                    <span>3/3</span>
                </div>
                <div className="entrance__cnt">
                    <div className="contact__inp">
                        <label>
                            <input type="text" placeholder="Name and surname" 
                            value={value.name}
                            onChange={e => setValue({name: e.target.value, phone: value.phone})}
                            />
                        </label>
                    </div>
                    <div className="contact__inp">
                        <label>
                            <input type="tel" placeholder="Phone number" 
                            value={value.phone}
                            onChange={e => setValue({name: value.name, phone: e.target.value})}
                            />
                        </label>
                    </div>
                </div>
                <div className="modal__button">
                    <button className="btn__liner" onClick={() => swiperRef.current?.slidePrev()}>Back</button>
                    <button className="btn" onClick={() => send()}>Send</button>
                </div>
    </div>
    );
};

export default ModalAistThree;