import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Carousel = ({ destinations, title }) => {
  return (
    <div className="carousel-container my-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        loop={true}
      >
        {destinations?.map((destination) => (
          <SwiperSlide key={destination.id}>
            <Link to={`/destination/${destination.id}`}>
              <div className="carousel-card bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src={destination.image}
                  alt={destination.name}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{destination.name}</h3>
                  <p className="text-gray-600 text-sm">{destination.description}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev bg-black text-white p-2 rounded-full absolute top-1/2 left-4 z-10 transform -translate-y-1/2 cursor-pointer"></div>
      <div className="swiper-button-next bg-black text-white p-2 rounded-full absolute top-1/2 right-4 z-10 transform -translate-y-1/2 cursor-pointer"></div>
      <div className="swiper-pagination mt-4 text-center"></div>
    </div>
  );
};

export default Carousel;
