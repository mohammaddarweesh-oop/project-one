import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "./App.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Navigation]);

function App() {
  return (
    <div className="App">
      <Swiper spaceBetween={50} slidesPerView={2} navigation pagination>
        <SwiperSlide>Mohammad</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
