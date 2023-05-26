import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import ChefService from './chefService/ChefService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
        </div>
    );
};

export default Home;