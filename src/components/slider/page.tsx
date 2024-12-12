"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slideData = [
  { id: 1, img: "/images/gym1.jpg", text: "많은 기구 보유" },
  { id: 2, img: "/images/gym2.jpg", text: "시원함" },
  { id: 3, img: "/images/gym3.jpg", text: "청결함" },
  { id: 4, img: "/images/gym3.jpg", text: "청결함" },
  { id: 5, img: "/images/gym3.jpg", text: "청결함" },
];

export default function SwiperImg() {
  SwiperCore.use([Navigation, Scrollbar, Autoplay]);
  return (
    <div className="swiper-container">
      <Swiper
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => {
          swiper.slides.forEach((slide) => {
            slide.style.transform = "scale(0.8)";
          });
          const activeIndex = swiper.activeIndex;
          swiper.slides[activeIndex].style.transform = "scale(1)";
        }}
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex justify-center items-center">
              <Image
                className="w-[600px] h-[300px] rounded-lg shadow-lg"
                src={slide.img} // 이미지 경로
                alt="스와이퍼 사진" // 이미지 설명
                width={600} // 이미지 너비
                height={300} // 이미지 높이
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
