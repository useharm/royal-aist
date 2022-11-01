import React from 'react';

const ModalAistThree: React.FC<any> = ({swiperRef}) => {
    return (
        <div>
        {/* <div id="modal-aist-tree" className="modal">
        <div className="modal-content">
            <div className="modal-registration modal-sing">
                <div className="close"></div> */}
                <div className="modal-sing__numb">
                    <strong>Sign up at the Aist center</strong>
                    <span>3/3</span>
                </div>
                <div className="entrance__cnt">
                    <div className="contact__inp">
                        <label>
                            <input type="text" placeholder="Name and surname" />
                        </label>
                    </div>
                    <div className="contact__inp">
                        <label>
                            <input type="text" placeholder="Phone number" />
                        </label>
                    </div>
                </div>
                <div className="modal__button">
                    <button className="btn__liner" onClick={() => swiperRef.current?.slidePrev()}>Back</button>
                    <button className="btn">Next</button>
                </div>
            {/* </div>
        </div>
    </div> */}
    </div>
    );
};

export default ModalAistThree;