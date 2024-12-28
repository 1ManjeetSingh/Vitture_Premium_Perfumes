// src/ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import './slider.css';
import NextArrow from './NextArrow'; // Import NextArrow component
import PrevArrow from './PrevArrow'; // Import PrevArrow component

export default function ImageSlider({ images = [] }){
    const settings = {
        dots: true, 
        infinite: true, 
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, 
        autoplaySpeed: 4000, 
        arrows: true,
        nextArrow: <NextArrow />, // Use custom next arrow
        prevArrow: <PrevArrow />, // Use custom previous arrow
    };

    const imageUrls = images.map((imageId) => `http://localhost:5000/api/productImages/files/${imageId}`);

    return (
        <div className="image-slider">
            <Slider {...settings}>
            {imageUrls.map((url, index) => (
                    <div key={index} className='product-image'>
                        <img src={url} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
