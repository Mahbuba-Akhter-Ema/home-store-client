import React from 'react';
import Carousel from '../Carousel/Carousel';
import Categories from '../Categories/Categories';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Categories></Categories>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;