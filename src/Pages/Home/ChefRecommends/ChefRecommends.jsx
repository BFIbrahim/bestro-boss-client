import React from 'react';
import SectionTitle from '../../../Components/Section Title/SectionTitle';
import img from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'

const ChefRecommends = () => {
    return (
        <section>
            <SectionTitle
                heading="CHEF RECOMMENDS"
                subheading="Should Try"
            ></SectionTitle>

            <div className='md:flex justify-between gap-5 mb-10'>
                <div className="card  bg-[#F3F3F3] shadow-xl text-center mb-10">
                    <figure><img className='w-[100%] h-72' src={img} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className='text-2xl font-semibold'>Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button style={{ borderBottom: '2px solid black' }} className="btn bg-[#E8E8E8] border-none text-[#BB8506]">Add to chart</button>
                        </div>
                    </div>
                </div>

                <div className="card  bg-[#F3F3F3] shadow-xl text-center mb-10">
                    <figure><img className='w-[100%] h-72' src={img2} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className='text-2xl font-semibold'>Pizaa</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button style={{ borderBottom: '2px solid black' }} className="btn bg-[#E8E8E8] border-none text-[#BB8506]">Add to chart</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-[#F3F3F3] shadow-xl text-center mb-10">
                    <figure><img className='w-[100%] h-72' src={img3} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className='text-2xl font-semibold'>Shoup</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button style={{ borderBottom: '2px solid black' }} className="btn bg-[#E8E8E8] border-none text-[#BB8506]">Add to chart</button>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default ChefRecommends;