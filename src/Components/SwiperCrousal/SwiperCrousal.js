import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Style.css";

SwiperCore.use([Pagination, Navigation]);

const SwiperCrousal = ({ children, items, pagination, navigation }) => {
  // const view = () => {
  //   const viewSlide = useData.map((el) => (
  //     <SwiperSlide>
  //       <div>
  //         <h2>Name : {el.name}</h2>
  //         <h2>Age : {el.age}</h2>
  //         <h2>Email : {el.email}</h2>
  //         <h2>ID : {el.id}</h2>
  //       </div>
  //     </SwiperSlide>
  //   ));
  //   return (
  //     <Swiper
  //       spaceBetween={50}
  //       slidesPerView={2}
  //       navigation
  //       pagination={{ clickable: "true" }}
  //     >
  //       {viewSlide}
  //     </Swiper>
  //   );
  // };
  const cloneItem = items.map((el) => (
    <SwiperSlide>
      {React.cloneElement(children, { item: el, key: el.id })}
    </SwiperSlide>
  ));
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation={navigation ? navigation : false}
      pagination={pagination ? pagination : false}
    >
      {cloneItem}
    </Swiper>
  );
};
export default SwiperCrousal;

/**
 * 
 * <Swiper
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: "true" }}
    >
      <SwiperSlide>Mohammad</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Mohammad</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
    </Swiper>
 */
