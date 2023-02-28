// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      modules={[Autoplay]}
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
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div className="p-4 py-8 border border-[#FFFFFF33] rounded-md">
          <img src="./stop.png" alt="" />
          <h1 className="text-[#FAD646] font-bold text-2xl my-3">
            Product Design
          </h1>
          <p className="text-sm text-white">
            We create beautiful product designs and packaging at the best
            quality and taste. You can check out our product packaging page to
            see more.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-3 py-8 border border-[#FFFFFF33] rounded-md">
          <img src="./stop.png" alt="" />
          <h1 className="text-[#FAD646] font-bold text-2xl my-3">
            Logo Design
          </h1>
          <p className="text-sm text-white">
            We create beautiful product designs and packaging at the best
            quality and taste. You can check out our product packaging page to
            see more.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-3 py-8 border border-[#FFFFFF33] rounded-md">
          <img src="./stop.png" alt="" />
          <h1 className="text-[#FAD646] font-bold text-2xl my-3">
            Creative Diary
          </h1>
          <p className="text-sm text-white">
            Looking for a way to stand out from the crowd? Creative design is
            the answer. Whether you're looking to revamp your website, create
            eye-catching social media graphics.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-3 py-8 border border-[#FFFFFF33] rounded-md">
          <img src="./stop.png" alt="" />
          <h1 className="text-[#FAD646] font-bold text-2xl my-3">3D Designs</h1>
          <p className="text-sm text-white">
            We create designs using the latest technology to create stunning 3D
            arts that will make your brand stand out on anywhere. From product
            renders to animated logos to immersive visual experiences.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-3 py-8 border border-[#FFFFFF33] rounded-md">
          <img src="./stop.png" alt="" />
          <h1 className="text-[#FAD646] font-bold text-2xl my-3">Animation</h1>
          <p className="text-sm text-white">
            Bring your brand to life with our animation services! Animation is a
            powerful tool for storytelling and engagement, and our team of
            talented animators can help you create animations.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
