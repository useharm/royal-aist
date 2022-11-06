import React from 'react';
import { svgs } from '../assets/svgs';
import ButtonBlock from './ButtonBlock/ButtonBlock';
import ModalAist from './modals/ModalAist';

const SignUpBlock: React.FC = () => {
    return (
        <div>
            <ModalAist />
    <div className="container">
        <div className="trial-child">
            <div className="trial-child__name">
                <h3>sign up your child for a trial DAY</h3>
                <ButtonBlock />
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