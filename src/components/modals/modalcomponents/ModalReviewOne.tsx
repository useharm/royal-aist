import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { menuSelector, setOpenReview } from '../../../redux/slices/menuSlice';
import { setReview } from '../../../redux/slices/reviewSlice';
import { useAppDispatch } from '../../../redux/store';

type valueType = {
    title: string;
    name: string;
}

const ModalReviewOne: React.FC<any> = ({swiperRef}) => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState<valueType>({
        title: '',
        name: '',
    });
    const { isOpenReview } = useSelector(menuSelector);
    const timeoutRef: { current: NodeJS.Timeout | null } = useRef(null);
    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }, [isOpenReview])
    function send() {
        swiperRef.current?.slideNext();
        timeoutRef.current = setTimeout(() => {
                 dispatch(setOpenReview(false));
             setTimeout(() => {
                 swiperRef.current?.slideTo(0, false);
             }, 300)
         }, 2500);
         dispatch(setReview(value));
         setValue({
            title: '',
            name: '',
         })
     }
    return (
        <div>
                <h3>Leave a review</h3>
                <div className="entrance__cnt">
                    <div className="contact__inp">
                        <label>
                            <input type="text" placeholder="Name and surname" 
                            value={value.name}
                            onChange={(e) => setValue({title: value.title, name: e.target.value})}
                            />
                        </label>
                    </div>
                    <div className="contact__inp">
                        <label>
                            <input type="text" placeholder="Comments" maxLength={160}
                            value={value.title}
                            onChange={(e) => setValue({title: e.target.value, name: value.name})}
                            />
                        </label>
                    </div>
                    <div className="modal__btn">
                        <button className="btn" onClick={() => send()}>Send</button>
                    </div>
                </div>
        </div>
    );
};

export default ModalReviewOne;