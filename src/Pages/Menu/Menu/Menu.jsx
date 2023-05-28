import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import img from '../../../assets/menu/banner3.jpg'
import PopullarMenu from '../../Home/PopullarMenu/PopullarMenu';


const Menu = () => {
    return (
        <div>

            <Helmet>
                <title>Menu | BF Resturant</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Cover img={img} title={"OUR MENU"} details={'Would You Like To Try A Dish'}></Cover>

            <PopullarMenu></PopullarMenu>
            <Cover img={img} title={"OUR MENU"} details={'Would You Like To Try A Dish'}></Cover>
            
            <PopullarMenu></PopullarMenu>
            <Cover img={img} title={"OUR MENU"} details={'Would You Like To Try A Dish'}></Cover>
            <PopullarMenu></PopullarMenu>
        </div>
    );
};

export default Menu;