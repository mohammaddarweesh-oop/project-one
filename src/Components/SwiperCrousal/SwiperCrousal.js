import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Style.css";

SwiperCore.use([Pagination, Navigation]);

const SwiperCrousal = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={2} navigation pagination>
      <SwiperSlide>Mohammad</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Mohammad</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
    </Swiper>
  );
};
export default SwiperCrousal;
