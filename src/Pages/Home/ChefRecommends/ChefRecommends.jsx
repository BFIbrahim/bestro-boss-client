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

            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommends;