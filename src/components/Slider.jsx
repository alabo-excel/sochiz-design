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
            Motion Design
          </h1>
          <p className="text-sm text-white">
            Bring your brand to life with our animation services! Animation is a
            powerful tool for storytelling and engagement, and our team of
            talented animators can help you create animations.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-3 py-8 border border-[#FFFFFF33] rounded-md">
          <img src="./stop.png" alt="" />
          <h1 className="text-[#FAD646] font-bold text-2xl my-3">Branding</h1>
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
            Web Development
          </h1>
          <p className="text-sm text-white">
            We Develop websites for interested clients (individuals, firms,
            companies, NGOs, government agencies etc), using the latest
            technology and security.
          </p>
        </div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <div className="p-3 py-8 border border-[#FFFFFF33] rounded-md">
          <img src="./stop.png" alt="" />
          <h1 className="text-[#FAD646] font-bold text-2xl my-3">3D Designs</h1>
          <p className="text-sm text-white">
            We create designs using the latest technology to create stunning 3D
            arts that will make your brand stand out on anywhere. From product
            renders to animated logos to immersive visual experiences.
          </p>
        </div>
      </SwiperSlide> */}
      <SwiperSlide>
        <div className="p-3 py-8 border border-[#FFFFFF33] rounded-md">
          <img src="./stop.png" alt="" />
          <h1 className="text-[#FAD646] font-bold text-2xl my-3">
            3D Design and props
          </h1>
          <p className="text-sm text-white">
            We create designs using the latest technology to create stunning 3D
            arts that will make your brand stand out on anywhere. From product
            renders to animated logos to immersive visual experiences.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
