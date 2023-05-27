import React from 'react';
import SectionTitle from '../../../Components/Section Title/SectionTitle';
import img from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured bg-fixed mb-10'>
            <div className='bg-black bg-opacity-50 pt-1'>
                <div className='text-white'>
                    <SectionTitle
                        heading="FROM OUR MENU"
                        subheading="Check it out"
                    >
                    </SectionTitle>
                </div>

                <div className='md:flex justify-between items-center gap-4 px-8 py-8'>
                    <img className='w-72 h-72' src={img} alt="" />
                    <div className='text-white mt-5'>
                        <p className='uppercase'>March 20, 2023 WHERE CAN I GET SOME?</p>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</small><br />
                        <button style={{borderBottom: '2px solid white'}} className='uppercase mt-5 btn border-none text-white bg-white bg-opacity-0 rounded-md'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;