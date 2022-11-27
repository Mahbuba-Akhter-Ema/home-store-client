import React from 'react';
import slider1 from '../../../assets/images/slider-1.jpg';
import slider2 from '../../../assets/images/slider-2.jpg';
import slider3 from '../../../assets/images/slider-3.jpg';

const Carousel = () => {
    return (
        <div className="carousel mx-auto h-96 rounded-2xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slider1} className="w-full" alt=""/>
                <div className="absolute flex justify-between transhtmlForm -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} className="w-full" alt=""/>
                <div className="absolute flex justify-between transhtmlForm -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full" alt=""/>
                <div className="absolute flex justify-between transhtmlForm -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;