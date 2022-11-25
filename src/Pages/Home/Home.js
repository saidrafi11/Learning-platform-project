import React from 'react';
import CountDown from './ProductCategory/Countdown/CountDown';
import ProductCategory from './ProductCategory/ProductCategory';
import AutoSlder from './Slider/AutoSlder';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <CountDown></CountDown>
            <Slider></Slider>
            <AutoSlder></AutoSlder>
            <ProductCategory></ProductCategory>
        </div>
    );
};

export default Home;