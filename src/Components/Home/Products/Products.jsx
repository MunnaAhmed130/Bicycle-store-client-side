import { useLoaderData } from "react-router-dom";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

const Products = () => {
  const data = useLoaderData();

  return (
    <section className="py-10 bg-[#1d1d1d]">
      <h3 className="text-center text-5xl uppercase font-bold text-white tracking-widest py-5">
        Featured Bicycles
      </h3>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Scrollbar, A11y]}
        className="max-w-7xl"
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((product) => (
          <SwiperSlide key={product.name}>
            <Product key={product.name} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* {data && (
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-7xl mx-auto p-section transition-all">
          {data.map((product) => (
            <Product key={product.name} product={product} />
          ))}
        </div>
      )} */}
    </section>
  );
};

const Product = ({ product }) => {
  return (
    <div className=" h-auto  object-cover object-center   bg-[#3a3a3a] rounded-sm overflow-hidden ">
      <div className="bg-white">
        <img
          src={product.url}
          alt={product.name}
          className="w-full h-60 object-contain object-center "
        />
      </div>
      <div className="px-3 py-5 ">
        <h5 className="lg:text-[17px] text-base pb-1 font-semibold text-white">
          {product.name}
        </h5>
        <p className="text-[#d8d8d8] text-sm">
          {product.description.slice(0, 100)}...
        </p>
      </div>
    </div>
  );
};

export default Products;
