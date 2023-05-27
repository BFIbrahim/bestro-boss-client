import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/Section Title/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const Testimonial = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section>
            <SectionTitle
                heading="TESTIMONIALS"
                subheading="What Our Clients Say"
            ></SectionTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='text-center p-20'>

                        <Rating
                        className='w-48 mx-auto mb-4'
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />

                            <p>{review.details}</p>
                            <h3 className="text-3xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;