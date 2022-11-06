import React from 'react';
import { svgs } from '../../../assets/svgs';

const ModalDone: React.FC = () => {
    return (
        <div>
                <div className="mod__done">
                    <div className="mod__done__tit">
                        <strong>done</strong>
                        <img src={svgs['./Vec21.png']} alt="" />
                    </div>
                </div>
            </div>
    );
};

export default ModalDone;