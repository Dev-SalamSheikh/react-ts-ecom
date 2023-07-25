import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import DashboardSliderCard from "../Dashboard/DashboardSliderCard";

// Assuming the type of each element in the 'data' array is like this:
type ItemType = {
  id: number;
  title: string;
  price: string;
  img: string;
};

// Then, you can specify the type of the 'data' prop in the component:
type BrandCategoryCardsProps = {
  data?: ItemType[];
  brandImg?: string;
};

const BrandCategoryCards: React.FC<BrandCategoryCardsProps> = ({
  data,
  brandImg,
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="mt-20 flex items-start gap-[60px] pb-10 border-b border-b-dashboardBorder">
      {/* Left side logo */}
      <div className="w-2/12">
        <img src={brandImg} alt="" />
      </div>

      {/* right side slider */}
      <div className="w-10/12">
        <Swiper
          className="mySwiper relative"
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
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
  );
};

export default BrandCategoryCards;
