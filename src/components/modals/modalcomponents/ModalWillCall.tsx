import React from 'react';
import { svgs } from '../../../assets/svgs';


const ModalWillCall: React.FC = () => {
    return (
                <div className="mod__done">
                    <div className="mod__done__tit">
                        <strong>done</strong>
                        <img src={svgs['./Vec21.png']} alt="" />
                    </div>
                    <span>WILL CALL YOU SOON :)</span>
                </div>

    );
};

export default ModalWillCall;
