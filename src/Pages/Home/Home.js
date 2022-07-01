import React from 'react';
import BestSales from './BestSales';
import DealsOfTheDays from './DealsOfTheDays';
import ExtraDeals from './ExtraDeals/ExtraDeals';
import FeaturedCategories from './FeaturedCategories';
import HomeBanner from './HomeBanner';
import PopularProducts from './PopularProducts';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <FeaturedCategories />
            <PopularProducts />
            <BestSales />
            <DealsOfTheDays />
            <ExtraDeals />

        </div>
    );
};

export default Home;