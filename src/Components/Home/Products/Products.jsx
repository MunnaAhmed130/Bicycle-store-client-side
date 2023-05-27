import { useLoaderData } from "react-router-dom";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Product from "./Product";
import "./Products.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/a11y";
import { useEffect } from "react";

const Products = () => {
  const data = useLoaderData();

  console.log(data);
  // bg-[#2f3640]
  return (
    <section className="py-28 ">
      <p className="text-black text-center  pb-2 font-bold uppercase">
        Featured Bicycles
      </p>
      <h3 className="text-center lg:text-6xl md:text-5xl text-4xl  font-bold text-black tracking-wide lg:pb-16 pb-6">
        Find Your Bicycle
      </h3>

      <Swiper
        breakpoints={{
          640: {
            width: 600,
            slidesPerView: 2,
          },
          768: {
            width: 700,
            slidesPerView: 2,
          },
          900: {
            width: 860,
            slidesPerView: 2,
          },
          1080: {
            width: 1000,
            slidesPerView: 2,
          },
          1280: {
            width: 1200,
            slidesPerView: 3,
          },
          1400: {
            width: 1280,
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        spaceBetween={15}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Scrollbar, A11y, Autoplay]}
        className={`mySwiper my-4`}
      >
        {data
          .filter((product) => product.rating >= 4.6)
          .map((product) => (
            <SwiperSlide key={product.name}>
              <Product key={product.name} product={product} />
            </SwiperSlide>
          ))}
        {/* {data.map((product) => (
          <SwiperSlide key={product.name}>
            <Product key={product.name} product={product} />
          </SwiperSlide>
        ))} */}
      </Swiper>
    </section>
  );
};

export default Products;
