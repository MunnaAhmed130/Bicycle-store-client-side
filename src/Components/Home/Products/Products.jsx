import { useLoaderData } from "react-router-dom";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Product from "./Product";
import "./Products.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/a11y";

const Products = () => {
  const data = useLoaderData();

  return (
    <section className="py-20 ">
      <h3 className="text-center text-5xl uppercase font-bold text-white tracking-wide pb-12">
        Featured Bicycles
      </h3>

      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 600,
            slidesPerView: 2,
          },
          768: {
            width: 700,
            slidesPerView: 2,
          },
          1080: {
            width: 1000,
            slidesPerView: 2,
          },
          1280: {
            width: 1080,
            slidesPerView: 3,
          },
        }}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Scrollbar, A11y]}
        className={`mySwiper px-5`}
      >
        {data.map((product) => (
          <SwiperSlide key={product.name}>
            <Product key={product.name} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Products;
