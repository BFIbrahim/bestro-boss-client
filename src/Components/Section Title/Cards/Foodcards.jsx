import React from 'react';

const Foodcards = ({ item }) => {

    const { name, image, price, recipe } = item;

    return (
        <div>
            <div className="card h-[500px] bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='absolute bg-slate-900 text-white p-3 right-3 top-2 rounded-md'>${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button style={{ borderBottom: '2px solid black' }} className="btn bg-[#E8E8E8] border-none text-[#BB8506]">Add to chart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foodcards;