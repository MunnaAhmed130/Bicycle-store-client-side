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
  // console.log(data);
  return (
    <section className="py-20 bg-[#2f3640]  ">
      <h3 className="text-center md:text-5xl text-xl  uppercase font-bold text-white tracking-wide pb-12">
        Featured Bicycles
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
        spaceBetween={15}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Scrollbar, A11y]}
        className={`mySwiper my-4 `}
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
