import React from 'react';
import SectionTitle from '../../../Components/Section Title/SectionTitle';
import img from '../../../assets/home/slide1.jpg'

const ChefRecommends = () => {
    return (
        <section>
            <SectionTitle
                heading="CHEF RECOMMENDS"
                subheading="Should Try"
            ></SectionTitle>

            <div className='md:flex justify-between'>
                <div className='md:w-72 bg-[#F3F3F3] mb-10'>
                    <img className='w-72 h-72' src={img} alt="" />
                    <div className='p-4 text-center'>
                        <h3 className='text-2xl font-semibold mb-3'>Caeser Salad</h3>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button style={{ borderBottom: '2px solid #BB8506' }} className='btn rounded-md border-none text-[#BB8506] uppercase bg-[#F3F3F3]'>Add to chart</button>
                    </div>
                </div>

                <div className='md:w-72 bg-[#F3F3F3] mb-10'>
                    <img className='w-72 h-72' src={img} alt="" />
                    <div className='p-4 text-center'>
                        <h3 className='text-2xl font-semibold mb-3'>Caeser Salad</h3>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button style={{ borderBottom: '2px solid #BB8506' }} className='btn rounded-md border-none text-[#BB8506] uppercase bg-[#F3F3F3]'>Add to chart</button>
                    </div>
                </div>

                <div className='md:w-72 bg-[#F3F3F3] mb-10'>
                    <img className='w-72 h-72' src={img} alt="" />
                    <div className='p-4 text-center'>
                        <h3 className='text-2xl font-semibold mb-3'>Caeser Salad</h3>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button style={{ borderBottom: '2px solid #BB8506' }} className='btn rounded-md border-none text-[#BB8506] uppercase bg-[#F3F3F3]'>Add to chart</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommends;