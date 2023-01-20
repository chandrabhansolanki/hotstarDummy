import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './Slider.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import slide1 from "../Images/slider1.PNG"
import slide2 from "../Images/slider2.PNG"
import slide3 from "../Images/slider3.PNG"
import slide4 from "../Images/slider4.PNG"
import slide5 from "../Images/slider5.PNG"

const MovieSlider = () => {
  const images = [
    { slide: slide1 },
    { slide: slide2 },
    { slide: slide3 },
    { slide: slide4 },
    { slide: slide5 }
  ]


  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {images.map((item) => {
          return (
            <SwiperSlide>
              <img src={item.slide} />
            </SwiperSlide>
          )
        })}
        {/* <SwiperSlide><img src={images[0].slide} /></SwiperSlide> */}
        {/*  <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>

    </>
  )

}
export default MovieSlider