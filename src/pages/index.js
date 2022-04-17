import React from "react";
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
        <SwiperSlide>
          <div style={{ position: 'relative' }}>
            <div data-background="..." class="with-gradient">
              <p className="TextoBanner1">
                <img src='https://i.imgur.com/tLftPOF.png' className="Logo01" alt="Logo"/>
                <br />
              </p>
              <img src='https://i.imgur.com/gLnMbcS.png' className="Banner01" alt="BannerMangá" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ position: 'relative' }}>
            <div data-background="..." class="with-gradient">
              <p className="TextoBanner1">
                <img src='https://i.imgur.com/IHXS8Sx.png' className="Logo02" alt="Logo"/>
                <br />
              </p>
              <img src='https://i.imgur.com/hhCDejR.png' className="Banner02" alt="BannerMangá" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ position: 'relative' }}>
            <div data-background="..." class="with-gradient">
              <p className="TextoBanner1">
                <img src='https://i.imgur.com/RelyKXe.png' className="Logo03" alt="Logo" />
                <br />
              </p>
              <img src='https://i.imgur.com/gxvo6w8.png' className="Banner03" alt="BannerMangá" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ position: 'relative' }}>
            <div data-background="..." class="with-gradient">
              <p className="TextoBanner1">
                <img src='https://i.imgur.com/SljvjLx.png' className="Logo04" alt="Logo"/>
                <br />
              </p>
              <img src='https://i.imgur.com/WaUt3Bn.png' className="Banner04" alt="BannerMangá" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ position: 'relative' }}>
            <div data-background="..." class="with-gradient">
              <p className="TextoBanner1">
                <img src='https://i.imgur.com/smVV9TQ.png' className="Logo05" alt="Logo"/>
                <br />
              </p>
              <img src='https://i.imgur.com/gf0Bs50.png' className="Banner05" alt="BannerMangá" />
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}