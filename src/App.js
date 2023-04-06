import "./App.css";
import SwiperCrousal from "./Components/SwiperCrousal/SwiperCrousal";

function App() {
  // https://swiperjs.com/demos
  // let userData = [
  //   { id: 1, name: "Jehad", email: "mohammad@gmail.com", age: 24 },
  //   { id: 2, name: "Ahmad", email: "ahmad@gmail.com", age: 22 },
  //   { id: 3, name: "Osama", email: "osama@gmail.com", age: 44 },
  //   { id: 4, name: "Nader", email: "nader@gmail.com", age: 30 },
  //   { id: 5, name: "Same", email: "same@gmail.com", age: 33 },
  //   { id: 6, name: "Khaled", email: "khaled@gmail.com", age: 70 },
  //   { id: 5, name: "Faiza", email: "faiza@gmail.com", age: 23 },
  //   { id: 5, name: "Dawood", email: "dawood@gmail.com", age: 14 },
  //   { id: 5, name: "Moaath", email: "moaath@gmail.com", age: 18 },
  //   { id: 5, name: "Sulaiman", email: "Sulaiman@gmail.com", age: 24 },
  // ];

  // const view = () => {
  //   const ss = userData.map((el) => (
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
  //     <Swiper spaceBetween={50} slidesPerView={2} navigation pagination>
  //       {ss}
  //     </Swiper>
  //   );
  // };

  // const breakPoint = {
  //   320: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30,
  //   },
  //   // when window width is >= 640px
  //   640: {
  //     slidesPerView: 4,
  //     spaceBetween: 40,
  //   },
  // };
  return (
    <div className="App">
      <SwiperCrousal />
    </div>
  );
}

export default App;

/**
 * 
 * 
 * 
 * <Swiper
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: "true" }}
        className="swiper"
        breakpoints={breakPoint}
      >
        {userData.map((el) => (
          <SwiperSlide>
            <div>
              <h2>{el.name}</h2>
              <h2>{el.age}</h2>
              <h2>{el.email}</h2>
              <h2>{el.id}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: "true" }}
        className="swiper"
        breakpoints={breakPoint}
      >
        <SwiperSlide className="swiper-slide">Mohammad</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
        <SwiperSlide className="swiper-slide">Mohammad</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
        <SwiperSlide className="swiper-slide">Mohammad</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ dynamicBullets: "true" }}
        className="swiper"
        breakpoints={breakPoint}
      >
        <SwiperSlide className="swiper-slide">Mohammad</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
        <SwiperSlide className="swiper-slide">Mohammad</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
      </Swiper>
      //swiper stander https://swiperjs.com/demos
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination
        className="swiper"
        breakpoints={breakPoint}
      >
        <SwiperSlide className="swiper-slide">Mohammad</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
        <SwiperSlide className="swiper-slide">Mohammad</SwiperSlide>
        <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
      </Swiper>
      //swiper in method  }
      //view()
 * 
 * 
 */
