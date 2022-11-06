import React from 'react';
import { useSelector } from 'react-redux';
import { menuSelector, setOpenVideo } from '../../redux/slices/menuSlice';
import { useAppDispatch } from '../../redux/store';

const ModalVideo: React.FC = () => {
    const dispatch = useAppDispatch();
    const { isOpenVideo } = useSelector(menuSelector);
    function closeModal() {
        dispatch(setOpenVideo(false));
    }
    return (
        <div onClick={() => closeModal()} className={isOpenVideo ? 'modal-video modal-video-active' : 'modal-video'}>
        <div className={isOpenVideo ? 'modal-video-content modal-video-content-active' : 'modal-video-content'}>
        <div onClick={(e) => e.stopPropagation()} className="modal-video-registration modal-video-sing">
        <div className="close" onClick={() => closeModal()}></div>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/AMLWvTklvHs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            </div>
        </div>
    );
};

export default ModalVideo;