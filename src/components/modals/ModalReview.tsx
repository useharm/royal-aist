import React from 'react';
import { useSelector } from 'react-redux';
import { menuSelector, setOpenReview } from '../../redux/slices/menuSlice';
import { useAppDispatch } from '../../redux/store';

const ModalReview: React.FC = () => {
    const { isOpenReview } = useSelector(menuSelector);
    const dispatch = useAppDispatch();
    return (
    <div id="modal" className={isOpenReview ? 'modal modal-active' : 'modal'} /* style={isOpenReview ? {display: 'block'} : {display: 'none'}} */>
        <div className={isOpenReview ? 'modal-content modal-content-active' : 'modal-content'}>
            <div className="modal-registration">
                <div className="close" onClick={() => dispatch(setOpenReview(false))}></div>
                <h3>Leave a review</h3>
                <div className="entrance__cnt">
                    <div className="contact__inp">
                        <label>
                            <input type="text" placeholder="Name and surname" />
                        </label>
                    </div>
                    <div className="contact__inp">
                        <label>
                            <input type="text" placeholder="Comments" />
                        </label>
                    </div>
                    <div className="modal__btn">
                        <button className="btn">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ModalReview;