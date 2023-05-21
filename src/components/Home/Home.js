import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import ItemsSummary from '../ItemsSummary/ItemsSummary';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <ItemsSummary></ItemsSummary>
            <Review></Review>
        </div>
    );
};

export default Home;