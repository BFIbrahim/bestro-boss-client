import React from 'react';
import MenuIteam from '../../shared/MenuIteam/MenuIteam';
import Cover from '../../shared/Cover/Cover';

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
        </div>
    );
};

export default MenuCategory;