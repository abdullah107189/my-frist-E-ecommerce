import React from 'react';
import Slider from './Slider';
import Flash from './Flash-Deals/Flash';
import Catagories from './Catagories/Catagories';
import Arrivals from './Arrivals/Arrivals';
import arrivalsData from '../../public/arrivals.json'
import discountData from '../../public/discount.json'
import Discount from './Discount';
import Shops from './Shops/Shops';
import shopData from '../../public/shops.json'
import flashData from '../../public/flash.json'
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='lg:mx-15 md:mx-10 mx-5 mb-4'>
            <Slider></Slider>
            <Flash flashData={flashData}></Flash>
            <Catagories></Catagories>
            <Arrivals arrivalsData={arrivalsData}></Arrivals>
            <Discount discountData={discountData}></Discount>
            <Shops shopData={shopData}></Shops>
            <Banner></Banner>
        </div>
    );
};

export default Home;