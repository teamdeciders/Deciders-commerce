import React from 'react';
import BestSales from './BestSales';
import DealsOfTheDays from './DealsOfTheDays';
import ExtraDeals from './ExtraDeals/ExtraDeals';
import FeaturedCategories from './FeaturedCategories';
import PopularProducts from './PopularProducts';
import Slider from './HomeSlider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <FeaturedCategories />
            <PopularProducts />
            <BestSales />
            <DealsOfTheDays />
            <ExtraDeals />

        </div >
    );
};

export default Home;