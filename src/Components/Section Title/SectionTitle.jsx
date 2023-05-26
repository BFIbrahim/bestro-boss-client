import React from 'react';

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className='mt-24 mb-10 border-b-2 border-t-2 py-3 text-center border-orange-100 md:w-3/6 mx-auto'>
            <p className='text-yellow-500 italic'>---{subheading}---</p>
            <h2 className='uppercase text-3xl '>{heading}</h2>
        </div>
    );
};

export default SectionTitle;