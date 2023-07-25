// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Button from "../Button";

const HomeBanner = () => {
  return (
    <div className="flex items-end justify-end h-full">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container mx-auto lg:w-10/12 w-11/12 flex">
            <div className="pt-24 w-full flex items-start justify-between">
              {/* Left Side */}
              <div className="pt-20">
                <p className="text-black">New Arrivals</p>
                <h1 className="text-[56px] leading-[114%] text-black font-semibold mt-3 mb-14">
                  Spring/Summer <br /> Essential Collection
                </h1>

                <Button bgColorCode="#000" text="Shop Collection" />
              </div>

              {/* right Side */}
              <div className="relative">
                <img
                  src="./images/banner-slider.png"
                  alt=""
                  className="w-full h-full"
                />

                <div className="absolute left-[20%] top-0">
                  <img src="./images/bg-overlay.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container mx-auto lg:w-10/12 w-11/12 h-full flex">
            <div className="pt-24 w-full flex items-start justify-between">
              {/* Left Side */}
              <div className="pt-20">
                <p className="text-black">New Arrivals</p>
                <h1 className="text-[56px] leading-[114%] text-black font-semibold mt-3 mb-14">
                  Spring/Summer <br /> Essential Collection
                </h1>

                <Button bgColorCode="#000" text="Shop Collection" />
              </div>

              {/* right Side */}
              <div className="relative">
                <img
                  src="./images/banner-slider.png"
                  alt=""
                  className="w-full h-full"
                />

                <div className="absolute left-[20%] top-0">
                  <img src="./images/bg-overlay.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container mx-auto lg:w-10/12 w-11/12 h-full flex">
            <div className="pt-24 w-full flex items-start justify-between">
              {/* Left Side */}
              <div className="pt-20">
                <p className="text-black">New Arrivals</p>
                <h1 className="text-[56px] leading-[114%] text-black font-semibold mt-3 mb-14">
                  Spring/Summer <br /> Essential Collection
                </h1>

                <Button bgColorCode="#000" text="Shop Collection" />
              </div>

              {/* right Side */}
              <div className="relative">
                <img
                  src="./images/banner-slider.png"
                  alt=""
                  className="w-full h-full"
                />

                <div className="absolute left-[20%] top-0">
                  <img src="./images/bg-overlay.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
