import React from 'react';
import MenuIteam from '../../shared/MenuIteam/MenuIteam';
import Cover from '../../shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, coverTitle, CoverImage, coverdetails }) => {
    return (
        <div>
            {coverTitle && <Cover img={CoverImage} title={coverTitle} details={coverdetails}></Cover>}
            <div className="md:grid grid-cols-2 gap-5 p-5 mt-8 mb-10">

                {
                    items.map(item => <MenuIteam
                        key={item._id}
                        item={item}
                    ></MenuIteam>)
                }
            </div>

            <Link className='flex flex-col items-center justify-center mb-10' to={`/order/${coverTitle}`}>
                <button style={{ borderBottom: '2px solid black' }} className='uppercase mt-5 btn border-none text-black bg-white bg-opacity-0 rounded-md'>View All Menu</button>
            </Link>
        </div>
    );
};

export default MenuCategory;