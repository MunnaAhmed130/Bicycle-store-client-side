import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import Product from "./Product";
import "./Products.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/a11y";
import { fadeIn, textVariant } from "../../../utils/motion";

const Products = () => {
  const data = useLoaderData();

  return (
    <section className="bg-gradient-to-b from-[var(--bg-dark)] from-80% to-[var(--bg-gray)] xl:py-52 lg:py-36 py-14 ">
      <motion.p
        variants={textVariant(50, 0.25, 0.5)}
        initial="hidden"
        whileInView="show"
        className="text-gray-100 text-center lg:text-base text-sm font-bold pb-2 uppercase "
      >
        Featured Bicycles
      </motion.p>

      <motion.h3
        variants={textVariant(20, 0.25, 0.65)}
        initial="hidden"
        whileInView="show"
        className="text-center lg:text-6xl md:text-5xl sm:text-4xl text-3xl uppercase font-bold text-white tracking-wide lg:mb-16 mb-6 px-3"
      >
        Find Your Bicycle
      </motion.h3>
      <motion.div
        variants={fadeIn("down", "spring", 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
      >
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
          // autoplay={{
          //   delay: 1000,
          //   disableOnInteraction: true,
          // }}
          spaceBetween={15}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          // navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
          modules={[Pagination, Navigation, Scrollbar, A11y, Autoplay]}
          className={`mySwiper mb-14 gl:mt-20 mt-10 `}
        >
          {data
            .filter((product) => product.rating >= 4.6)
            .map((product) => (
              <SwiperSlide key={product.name}>
                <Product key={product.name} product={product} />
              </SwiperSlide>
            ))}

          {/* <div className="absolute top-0 h-full w-full text-white flex items-center justify-between z-10">
          <button
          id="swiper-back"
          onClick={() => changeButton()}
          className="text-white bg-black rounded-full h-10 w-10 m-1"
          >
          <BsChevronLeft />
          </button>
          
          <button
          id="swiper-forward"
          onClick={() => setButton("right")}
          className="text-white bg-black rounded-full h-10 w-10 m-1"
          >
          <BsChevronRight />
          </button>
        </div> */}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Products;
