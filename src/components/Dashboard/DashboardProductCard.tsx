// Assuming the type of each element in the 'data' array is like this:
type ItemType = {
  id: number;
  title: string;
  price: string;
  img: string;
};

// Then, you can specify the type of the 'data' prop in the component:
type DashboardProductCardProps = {
  data?: ItemType[];
  title?: string;
};

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import DashboardSliderCard from "./DashboardSliderCard";

const DashboardProductCard: React.FC<DashboardProductCardProps> = ({
  data,
  title,
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full mb-14">
      {/* heading */}
      <div className="flex items-center gap-6 mb-6">
        {/* text */}
        <h2 className="text-2xl font-semibold text-themeBlackBold">{title}</h2>

        {/* button */}
        <div className="w-max flex items-center gap-2 py-2 px-4 border border-dashboardBorder rounded-lg cursor-pointer">
          {/* svg icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <mask
              id="mask0_18_1943"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="25"
              height="24"
            >
              <rect x="0.599609" width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_18_1943)">
              <path
                d="M5.75386 19H6.99038L16.2501 9.74035L15.0135 8.5038L5.75386 17.7635V19ZM19.4577 8.65575L16.0827 5.31158L17.3866 4.00775C17.6802 3.71417 18.0372 3.56738 18.4577 3.56738C18.8782 3.56738 19.2352 3.71417 19.5288 4.00775L20.7461 5.22502C21.0397 5.51861 21.1916 5.87053 21.2019 6.28078C21.2121 6.69103 21.0705 7.04294 20.7769 7.33653L19.4577 8.65575ZM18.3731 9.75573L7.62883 20.5H4.25391V17.125L14.9981 6.38078L18.3731 9.75573Z"
                fill="#3D424D"
              />
            </g>
          </svg>

          <p className="text-base text-dropdownText">Edit</p>
        </div>
      </div>

      {/* Slider */}
      <div className="w-full flex items-center justify-between gap-1">
        {/* Slider Div */}
        <div className="w-full">
          <Swiper
            className="mySwiper relative"
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={5}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            {data?.map((item) => {
              const { id, title, price, img } = item;
              return (
                <SwiperSlide key={id}>
                  <DashboardSliderCard
                    img={img}
                    name={title}
                    price={price}
                    key={id}
                  />
                </SwiperSlide>
              );
            })}

            <div className="flex items-center gap-4">
              <button
                className="absolute left-0 top-[45%] cursor-pointer z-50"
                ref={prevRef}
              >
                <i className="fa-solid fa-chevron-left text-lg text-[#1C1B1F] hover:text-themeOrange"></i>
              </button>

              <button
                className="absolute right-0 top-[45%] cursor-pointer z-50"
                ref={nextRef}
              >
                <i className="fa-solid fa-chevron-right text-lg text-[#1C1B1F] hover:text-themeOrange"></i>
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DashboardProductCard;
