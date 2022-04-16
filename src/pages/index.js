import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//Criando Banners


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/swstyle.css"


// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide><img src='https://i.imgur.com/o3qrlo6.png' className="Banner01"/> </SwiperSlide>
      <SwiperSlide><img src='https://i.imgur.com/TGKw3ks.png' width='100%'/></SwiperSlide>
      <SwiperSlide><img src='https://i.imgur.com/fquAXXd.png' width='100%'/></SwiperSlide>
      <SwiperSlide><img src='https://i.imgur.com/PLj1tmZ.png' width='100%'/></SwiperSlide>
      <SwiperSlide><img src='https://i.imgur.com/gA1vZCY.png' width='100%'/></SwiperSlide>
    </Swiper>
    </>
  );
}