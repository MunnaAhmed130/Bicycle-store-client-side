import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { animateIn } from "../../../utils/motion";
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
  const data = useLoaderData();

  return (
    <section className="bg-gradient-to-b from-[black] from-70% to-[#1a1919] xl:pt-40 xl:pb-40 pt-36 pb-20 md:px-10 sm:px-5 px-2.5">
      <div className="max-w-7xl mx-auto">
        <motion.p
          variants={animateIn(0, 50, "spring", 0.4, 0.25, 0.75)}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
          className="section-sub-heading"
        >
          Featured Bicycles
        </motion.p>

        <motion.h2
          variants={animateIn(0, -20, "spring", 0.4, 0.25, 0.75)}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
          className="section-heading"
        >
          Find Your Bicycle
        </motion.h2>

        <motion.div
          variants={animateIn(0, -150, "spring", 0.4, 0.25, 0.75)}
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
            modules={[Pagination, Navigation, Scrollbar, A11y, Autoplay]}
            className={`mySwiper `}
          >
            {Array.isArray(data) ? (
              data.map(
                (product) =>
                  product.rating >= 4.7 && (
                    <SwiperSlide key={product.name}>
                      <Product key={product.name} product={product} />
                    </SwiperSlide>
                  )
              )
            ) : (
              <p>loading</p>
            )}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
