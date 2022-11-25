import React from 'react';
import Carousel from '../Carousel/Carousel';
import Categories from '../Categories/Categories';
import Gallery from '../Gallery/Gallery';
import GetStarted from '../GetStarted/GetStarted';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Categories></Categories>
            <Gallery></Gallery>
            <GetStarted></GetStarted>
        </div>
    );
};

export default Home;