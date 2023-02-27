// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      //   modules={[Navigation]}
      //   navigation
      breakpoints={{
        340: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide>
        <div className="p-4 py-8 border border-[#FFFFFF33] rounded-md">
          <img src="./stop.png" alt="" />
          <h1 className="text-[#FAD646] font-bold text-2xl my-3">
            Product Design
          </h1>
          <p className="text-sm text-white">
            Learn about the user experience (UX) industry and explore the basic
            concepts and roles within the UX field.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-3 py-8 border border-[#FFFFFF33] rounded-md">
          <img src="./stop.png" alt="" />
          <h1 className="text-[#FAD646] font-bold text-2xl my-3">
            Product Design
          </h1>
          <p className="text-sm text-white">
            Learn about the user experience (UX) industry and explore the basic
            concepts and roles within the UX field.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-3 py-8 border border-[#FFFFFF33] rounded-md">
          <img src="./stop.png" alt="" />
          <h1 className="text-[#FAD646] font-bold text-2xl my-3">
            Product Design
          </h1>
          <p className="text-sm text-white">
            Learn about the user experience (UX) industry and explore the basic
            concepts and roles within the UX field.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-3 py-8 border border-[#FFFFFF33] rounded-md">
          <img src="./stop.png" alt="" />
          <h1 className="text-[#FAD646] font-bold text-2xl my-3">
            Creative Dairy{" "}
          </h1>
          <p className="text-sm text-white">
            Learn about the user experience (UX) industry and explore the basic
            concepts and roles within the UX field.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
