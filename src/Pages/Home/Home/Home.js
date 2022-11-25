import React from 'react';
import Categories from '../../Categories/Categories';
import Carousel from './Carousel/Carousel';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Categories></Categories>
        </div>
    );
};

export default Home;