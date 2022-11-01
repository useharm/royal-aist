import React from 'react';
import { svgs } from '../assets/svgs';
import { setOpenSignUp } from '../redux/slices/menuSlice';
import { useAppDispatch } from '../redux/store';
import ModalAist from './modals/ModalAist';

const SignUpBlock: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <ModalAist />
    <div className="container">
        <div className="trial-child">
            <div className="trial-child__name">
                <h3>sign up your child for a trial DAY</h3>
                <button className="btn" onClick={() => dispatch(setOpenSignUp(true))}>Sign up</button>
            </div>
            <div className="trial-child__photo">
                <img src={svgs['./eniml.png']} alt="" />
            </div>
        </div>
    </div>
        </div>
    );
};

export default SignUpBlock;