import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import ChefService from './chefService/ChefService';
import PopullarMenu from './PopullarMenu/PopullarMenu';
import HomeContact from './Home Contact/HomeContact';
import ChefRecommends from './ChefRecommends/ChefRecommends';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopullarMenu></PopullarMenu>
            <HomeContact></HomeContact>
            <ChefRecommends></ChefRecommends>
        </div>
    );
};

export default Home;