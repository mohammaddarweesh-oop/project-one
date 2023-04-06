import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css";

SwiperCore.use([Pagination, Navigation]);

const SwiperCrousal = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination
      className="swiper"
    >
      <SwiperSlide className="swiper-slide">Mohammad</SwiperSlide>
      <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
      <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
      <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
      <SwiperSlide className="swiper-slide">Mohammad</SwiperSlide>
      <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
    </Swiper>
  );
};
export default SwiperCrousal;
