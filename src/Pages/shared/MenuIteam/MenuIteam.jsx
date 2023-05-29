import React from 'react';

const MenuIteam = ({ item }) => {

    const { name, image, price, recipe } = item;

    return (

        <div>
            <div className='flex mb-5 space-x-4'>
                <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-[100px] h-[100px]' src={image} alt="" />
                <div className=''>
                    <h3 className='uppercase'>{name}-----------</h3>
                    <p>{recipe}</p>
                </div>
                <p className='text-yellow-500'>${price}</p>
            </div>
        </div>
    );
};

export default MenuIteam;