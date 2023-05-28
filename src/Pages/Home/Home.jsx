import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import ChefService from './chefService/ChefService';
import PopullarMenu from './PopullarMenu/PopullarMenu';
import HomeContact from './Home Contact/HomeContact';
import ChefRecommends from './ChefRecommends/ChefRecommends';
import Featured from './Featured/Featured';
import Testimonial from './Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Home | BF Resturant</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopullarMenu></PopullarMenu>
            <HomeContact></HomeContact>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;