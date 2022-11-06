import React from 'react';
import { setOpenSignUp } from '../../redux/slices/menuSlice';

import { useAppDispatch } from '../../redux/store';

const ButtonBlock: React.FC = () => {
    const dispatch = useAppDispatch();
    return (
        <>
        <button className="btn" onClick={() => dispatch(setOpenSignUp(true))}>Sign up</button>
        </>
    );
};

export default ButtonBlock;