// import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { animateIn } from "../../../utils/motion";
import data from "../../../assets/data/productData.json";
import Product from "./Product";
import "./Products.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/a11y";

const Products = () => {
  // const data = useLoaderData();
  // const value = data.length;
  // console.log(value);
  return (
    <section className="bg-gradient-to-b from-[black] from-70% to-[#1a1919] xl:pt-40 xl:pb-40 pt-36 pb-20 md:px-10 sm:px-5 px-2.5">
      <motion.div
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="max-w-7xl mx-auto"
      >
        <motion.p
          variants={animateIn(0, 50, "spring", 0.4, 0.25, 0.75)}
          className="section-sub-heading"
        >
          Featured Bicycles
        </motion.p>

        <motion.h2
          variants={animateIn(0, -20, "spring", 0.4, 0.25, 0.75)}
          className="section-heading"
        >
          Find Your Bicycle
        </motion.h2>

        <motion.div variants={animateIn(0, -150, "spring", 0.4, 0.25, 0.75)}>
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
            modules={[Pagination, Navigation, Scrollbar, A11y, Autoplay]}
            className={`mySwiper `}
          >
            {data.length ? (
              data.map(
                (product) =>
                  product.rating >= 4.7 && (
                    <SwiperSlide key={product.name}>
                      <Product key={product.name} product={product} />
                    </SwiperSlide>
                  )
              )
            ) : (
              <p className="flex items-center justify-center h-32">
                loading...
              </p>
            )}
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Products;
