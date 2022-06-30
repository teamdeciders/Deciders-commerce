import React from 'react';
import RecentlyAdded from './RecentlyAdded';
import TopRated from './TopRated';
import TopSelling from './TopSelling';
import TrendingProducts from './TrendingProducts';

const ExtraDeals = () => {
    return (
        <div>
            <TopSelling/>
            <TrendingProducts/>
            <RecentlyAdded/>
            <TopRated/>
        </div>
    );
};

export default ExtraDeals;