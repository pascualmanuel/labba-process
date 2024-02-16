import React, { useState, useEffect } from "react";

import "swiper/swiper-bundle.css"; // Import the Swiper CSS
import { Swiper, SwiperSlide } from "swiper/react";

import "../Styles/Prueba.css"; // Importa tu archivo CSS personalizado
import Cliente1 from "../Assets/clientes/client1.png";
import Cliente2 from "../Assets/clientes/client2.png";
import Cliente3 from "../Assets/clientes/client3.png";
import Cliente4 from "../Assets/clientes/client4.png";
import Cliente5 from "../Assets/clientes/client5.png";
import Cliente6 from "../Assets/clientes/client6.png";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
// import SwiperCore, { Autoplay, Pagination } from "swiper/core";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
const images = [
  Cliente1,
  Cliente2,
  Cliente3,
  Cliente4,
  Cliente5,
  Cliente6,
  Cliente2,
  Cliente3,
  Cliente4,
  Cliente5,
  Cliente6,

  // Agrega aquí tus rutas de imágenes
];
const isMobile = window.innerWidth <= 768; // Adjust the width as needed

let slides = 4;
if (isMobile) {
  slides = 3;
}
const Carousel = () => {
  return (
    <>
      <div className="relative">
        <Swiper
          slidesPerView={slides}
          spaceBetween={30}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper mt-24"
        >
          {images.map((image, index) => (
            <SwiperSlide>
              <div className="caro-inside">
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index}`}
                  //   width={"auto"}
                  //   height={30}
                  //   height={50}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="left-blur"></div>
        {/* <div className="left-cont-blur"></div> */}
        <div className="right-blur"></div>
        {/* <div className="right-cont-blur"></div> */}
      </div>
    </>
  );
};

export default Carousel;
