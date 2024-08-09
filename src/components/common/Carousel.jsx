import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Carousel = ({ destinations, title, showArrows = true }) => {
  return (
    <div className="carousel-container my-12 relative ">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={showArrows && {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        loop={true}
        className="carousel-swiper"
      >
      
        {destinations?.map((destination) => (
          <SwiperSlide key={destination.id}>
            <Link to={`/destination/${destination.id}`}>
              <div className="carousel-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col h-80">
                <img
                  className="w-full h-52 object-cover"
                  src={destination.image}
                  alt={destination.name}
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{destination.name}</h3>
                  <p className="text-gray-600 text-sm flex-grow overflow-hidden text-ellipsis">
                    {destination.description}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* {showArrows && (
        <>
          <div className="swiper-button-prev bg-gray-800 text-white p-2 rounded-full absolute top-1/2 left-2 z-10 transform -translate-y-1/2 cursor-pointer"></div>
          <div className="swiper-button-next bg-gray-800 text-white p-2 rounded-full absolute top-1/2 right-2 z-10 transform -translate-y-1/2 cursor-pointer"></div>
        </>
      )} */}
      <div className="swiper-pagination  mx-auto flex justify-center "></div>
    </div>
  );
};

export default Carousel;
