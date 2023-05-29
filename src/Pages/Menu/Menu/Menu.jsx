import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import img from '../../../assets/menu/banner3.jpg'
import img2 from '../../../assets/menu/dessert-bg.jpeg'
import img3 from '../../../assets/menu/pizza-bg.jpg'
import img4 from '../../../assets/menu/salad-bg.jpg'
import img5 from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/Section Title/SectionTitle';
import MenuCategory from '../MenuCategory.jsx/MenuCategory';



const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup')
    const salads = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')


    return (
        <div>

            <Helmet>
                <title>Menu | BF Resturant</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            {/* Main Cover */}
            <Cover img={img} title={"OUR MENU"} details={'Would You Like To Try A Dish'}></Cover>

            <SectionTitle
                heading={"TODAY'S OFFER"}
                subheading={"Don't miss"}
            ></SectionTitle>
            {/* Offered menu item */}
            <MenuCategory items={offered}></MenuCategory>


            {/* Desserts Item */}
            <MenuCategory
                items={desserts}
                coverTitle={"DESSERTS"}
                CoverImage={img2}
                coverdetails={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            ></MenuCategory>

            {/* Pizzas Item Secttion */}
            <MenuCategory 
             items={pizzas}
             coverTitle={"Pizzas"}
             coverdetails={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
             CoverImage={img3}
            ></MenuCategory>


            {/* Salads Item Section */}

            <MenuCategory 
             items={salads}
             coverTitle={"Salads"}
             coverdetails={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
             CoverImage={img4}
            ></MenuCategory>

            {/* Soups Item Section */}
            <MenuCategory 
             items={soups}
             coverTitle={"Soups"}
             coverdetails={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
             CoverImage={img5}
            ></MenuCategory>

        </div>
    );
};

export default Menu;