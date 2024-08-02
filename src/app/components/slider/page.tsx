"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slideData = [
  { id: 1, img: "/images/gym1.jpg", text: "많은 기구 보유" },
  { id: 2, img: "/images/gym2.jpg", text: "시원함" },
  { id: 3, img: "/images/gym3.jpg", text: "청결함" },
];

export default function SwiperImg() {
  SwiperCore.use([Navigation, Scrollbar, Autoplay]);
  return (
    <div className="swiper-container">
      <Swiper
        loop={true}
        spaceBetween={5}
        slidesPerView={1}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex justify-center items-center">
              <img className="w-[600px] h-[300px]" src={slide.img} />
            </div>
            {/* <div className="flex justify-center text-2xl mt-5 text-gray-400">{slide.text}</div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
