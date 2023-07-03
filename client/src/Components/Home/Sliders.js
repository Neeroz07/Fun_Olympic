import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import image1 from './c1.jpg';
import image2 from './c2.jpg';
import image3 from './c3.jpg';

// Initialize Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Slider = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center">
            <img src={image1} alt="Slide 1" className="max-w-full h-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img src={image2} alt="Slide 2" className="max-w-full h-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img src={image3} alt="Slide 3" className="max-w-full h-auto" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
