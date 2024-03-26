"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

// import bannar_image_1 from "../../../../assets/bannar/bannnar1.webp";
// import bannar_image_2 from "@assets/bannar/bannnar-2.webp";
// import bannar_image_3 from "@assets/bannar/bannnar-3.webp";

const Hero = () => {
  return (
    <div className="max-w-[1230px] mx-auto">
      <Swiper
        cssMode={true}
        loop={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2200,
          disableOnInteraction: false,
        }}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className=" h-[90vh]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/QFFjQYL/slider-bg2-2000x-1.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "5px",
            }}
          >
            <div className="f w-1/2 px-10 pt-[9%] space-y-5">
              <span className="px-5 py-3 text-pure text-lg bg-infoo rounded-sm">
                Welcome To Sea Sprout!
              </span>
              <h1 className="mb-5 text-5xl ti tracking-wide leading-tight font-semibold">
                Gear Up for Your Next Fishing Expedition
              </h1>
              <p className="mb-5">
                <i>
                  There are many variations of passages orem psum available but
                  the majority have suffered alteration in some form by injected
                  humour.
                </i>
              </p>
              <button className="btn px-10 btn-active border-main bg-main hover:bg-transparent hover:shadow-md transition-all mr-3 hover:scale-105">
                Get Started
              </button>
              <button className="btn px-10 btn-outline border-main hover:bg-main text-main hover:border-main  transition-all hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className=" h-[90vh]"
            style={{
              backgroundImage: "url(https://i.ibb.co/dtN57v5/slider-bg1.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "5px",
            }}
          >
            <div className="f w-1/2 px-10 pt-[9%] space-y-5">
              <span className="px-5 py-3 text-pure text-lg bg-infoo rounded-sm">
                Welcome To Sea Sprout!
              </span>
              <h1 className="mb-5 text-5xl ti tracking-wide leading-tight font-semibold">
                Gear Up for Your Next Fishing Expedition
              </h1>
              <p className="mb-5">
                <i>
                  There are many variations of passages orem psum available but
                  the majority have suffered alteration in some form by injected
                  humour.
                </i>
              </p>
              <button className="btn px-10 btn-active border-main bg-main hover:bg-transparent hover:shadow-md transition-all mr-3 hover:scale-105">
                Get Started
              </button>
              <button className="btn px-10 btn-outline bg-pure border-main hover:bg-main text-main hover:border-main  transition-all hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className=" h-[90vh]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/7XKBW0z/slider-bg3-2000x-1.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "5px",
            }}
          >
            <div className="f w-1/2 px-10 pt-[9%] space-y-5">
              <span className="px-5 py-3 text-pure text-lg bg-infoo rounded-sm">
                Welcome To Sea Sprout!
              </span>
              <h1 className="mb-5 text-5xl ti tracking-wide leading-tight font-semibold text-pure">
                Gear Up for Your Next Fishing Expedition
              </h1>
              <p className="mb-5 text-pure">
                <i>
                  There are many variations of passages orem psum available but
                  the majority have suffered alteration in some form by injected
                  humour.
                </i>
              </p>
              <button className="btn px-10 btn-active border-main bg-main hover:bg-transparent hover:shadow-md transition-all mr-3 hover:scale-105">
                Get Started
              </button>
              <button className="btn px-10 btn-outline border-main hover:bg-main text-main hover:border-main  transition-all hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
