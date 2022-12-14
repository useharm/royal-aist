import React from 'react';
import { svgs } from '../assets/svgs';
import SignUpBlock from '../components/SignUpBlock';

const Gallery: React.FC = () => {
    return (
        <div>
            <section className="all__marg">
    <div className="container">
        <div className="pages__gallery">
            <a href={svgs['./pexels1.jpg']} className="gallery__box">
                <img src={svgs['./pexels1.jpg']} alt="" />
            </a>
            <a href={svgs['./pexels2.jpg']} className="gallery__box">
                <img src={svgs['./pexels2.jpg']} alt="" />
            </a>
            <a href={svgs['./pexels3.jpg']} className="gallery__box">
                <img src={svgs['./pexels3.jpg']} alt="" />
            </a>
            <a href={svgs['./pexels4.jpg']} className="gallery__box">
                <img src={svgs['./pexels4.jpg']} alt="" />
            </a>
            <a href={svgs['./pexels5.jpg']} className="gallery__box">
                <img src={svgs['./pexels5.jpg']} alt="" />
            </a>
            <a href={svgs['./pexels6.jpg']} className="gallery__box">
                <img src={svgs['./pexels6.jpg']} alt="" />
            </a>
            <a href={svgs['./pexels7.jpg']} className="gallery__box">
                <img src={svgs['./pexels7.jpg']} alt="" />
            </a>
            <a href={svgs['./pexels8.jpg']} className="gallery__box">
                <img src={svgs['./pexels8.jpg']} alt="" />
            </a>
            <a href={svgs['./pexels9.jpg']} className="gallery__box">
                <img src={svgs['./pexels9.jpg']} alt="" />
            </a>
            <a href={svgs['./pexels10.jpg']} className="gallery__box">
                <img src={svgs['./pexels10.jpg']} alt="" />
            </a>
            <a href={svgs['./pexels11.jpg']} className="gallery__box">
                <img src={svgs['./pexels11.jpg']} alt="" />
            </a>
            <a href={svgs['./pexels122.jpg']} className="gallery__box">
                <img src={svgs['./pexels122.jpg']} alt="" />
            </a>
        </div>
    </div>
</section>


<SignUpBlock />
        </div>
    );
};

export default Gallery;