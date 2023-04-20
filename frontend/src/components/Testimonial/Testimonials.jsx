

import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },

        ]
    }

    return (
        <Slider {...settings}>
            <div className='testimonial py-4 px-3'>
                <p>
                "Thank you for making my dream vacation a reality! From the seamless booking process to the incredible itinerary and top-notch accommodations, every detail was taken care of. I couldn't have asked for a better travel experience. Highly recommend!"
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava01} className='w-25 h-25 rounded-2' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>John Doe</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className='testimonial py-4 px-3'>
                <p>
                "Your team went above and beyond to ensure that our trip was memorable and stress-free. The personalized tour package and expert recommendations made all the difference. I will definitely be using your services for all of my future travels!"
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} className='w-25 h-25 rounded-2' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>Lia Franklin</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className='testimonial py-4 px-3'>
                <p>
                "I was hesitant to book with an online travel agency, but your exceptional customer service and attention to detail put my mind at ease. The trip exceeded all of my expectations, and I appreciate the constant communication and support throughout the entire process. Thank you for an unforgettable vacation!"
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava03} className='w-25 h-25 rounded-2' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>Mack Jack</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className='testimonial py-4 px-3'>
                <p>
                "I've traveled extensively, and I can honestly say that your team provided the best travel experience I've ever had. The tour guides were knowledgeable and friendly, the accommodations were top-notch, and the itinerary was perfectly tailored to our interests. I can't wait to book with you again!"
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} className='w-25 h-25 rounded-2' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>Katherine Kaif</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
        </Slider>)
}

export default Testimonials