import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import "./Products.css";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/a11y";

const Products = () => {
  const data = useLoaderData();
  // bg-[#0D1314]
  return (
    <section className="py-52 bg-product ">
      <p className="text-gray-100 text-center font-bold pb-2 uppercase ">
        Featured Bicycles
      </p>

      <h3 className="text-center lg:text-6xl md:text-5xl text-4xl uppercase font-bold text-white tracking-wide lg:mb-16 mb-6">
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
        className={`mySwiper mb-14 mt-20`}
      >
        {data
          .filter((product) => product.rating >= 4.6)
          .map((product) => (
            <SwiperSlide key={product.name}>
              <Product key={product.name} product={product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Products;
