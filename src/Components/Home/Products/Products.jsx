import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../utils/motion";
import Product from "./Product";
import "./Products.css";

// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/a11y";

const Products = () => {
  const data = useLoaderData();
  const value = Array.isArray(data);
  // console.log(data, value);
  return (
    <section className="bg-gradient-to-b from-[black] from-70% to-[#1a1919] xl:pt-40 xl:pb-40 pt-36 pb-20 md:px-10 px-5">
      <div className="max-w-7xl mx-auto">
        <motion.p
          variants={textVariant(50, 0.25, 0.5)}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
          className="text-[white] text-center lg:text-base text-sm font-bold pb-2 uppercase"
        >
          Featured Bicycles
        </motion.p>

        <motion.h3
          variants={textVariant(20, 0.25, 0.65)}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
          className="text-center lg:text-6xl md:text-5xl sm:text-4xl text-3xl uppercase font-bold text-white tracking-wide lg:pb-16 pb-10"
        >
          Find Your Bicycle
        </motion.h3>
        <motion.div
          variants={fadeIn("down", "spring", 0.2, 0.75)}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
        >
          <Swiper
            breakpoints={{
              780: {
                slidesPerView: 2,
              },
              1180: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={15}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            // navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
            modules={[Pagination, Navigation, Scrollbar, A11y, Autoplay]}
            className={`mySwiper lg:pt-20 pt-10 `}
          >
            {value ? (
              data
                .filter((product) => product.rating >= 4.6)
                .map((product) => (
                  <SwiperSlide key={product.name}>
                    <Product key={product.name} product={product} />
                  </SwiperSlide>
                ))
            ) : (
              <p>loading</p>
            )}

            {/* <div className="absolute top-0 h-full w-full text-white flex items-center justify-between z-10">
              <button
                id="swiper-back"
                className="text-white bg-black rounded-full h-10 w-10 m-1 border"
              >
                <BsChevronLeft />
              </button>

              <button
                id="swiper-forward"
                className="text-white bg-black rounded-full h-10 w-10 m-1 border"
              >
                <BsChevronRight />
              </button>
            </div> */}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
