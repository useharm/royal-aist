import React from 'react';

const ModalAistTwo: React.FC<any> = ({swiperRef}) => {
    return (
        <div>
        {/* <div id="modal-aist-two" className="modal">
        <div className="modal-content">
            <div className="modal-registration modal-sing">
                <div className="close"></div> */}
                <div className="modal-sing__numb">
                    <strong>Sign up at the Aist center</strong>
                    <span>2/3</span>
                </div>
                <div className="modal-enroll">
                    <span>What age is the baby(s)?</span>
                    <div className="block-checked">
                        <label className="checkcontainer">
                            1.5 - 3.5 (Junior group)
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="block-checked">
                        <label className="checkcontainer">
                            3.5 - 4.5 (Middle group)
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="block-checked">
                        <label className="checkcontainer">
                            4,5 - 6 (Senior group)
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div className="modal__button">
                    <button className="btn__liner" onClick={() => swiperRef.current?.slidePrev()}>Back</button>
                    <button className="btn" onClick={() => swiperRef.current?.slideNext()}>Next</button>
                </div>
            {/* </div>
        </div>
    </div> */}
    </div>
    );
};

export default ModalAistTwo;