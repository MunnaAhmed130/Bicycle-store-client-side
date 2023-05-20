import { useLoaderData } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/a11y";
import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [curr, setCurr] = useState(0);
  // const [last, setLast] = useState();
  // const fade = true;
  const autoSlide = false;
  // const
  const data = useLoaderData();
  const prev = () => {
    // setLast(curr);
    setCurr((curr) => (curr === 0 ? data.length - 1 : curr - 1));
  };

  const next = () => {
    // setLast(curr);
    setCurr((curr) => (curr === data.length - 1 ? 0 : curr + 1));
  };

  const goToSlide = (i) => {
    // setLast(curr);
    setCurr(i);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, 4000);
    return () => clearInterval(slideInterval);
  }, [curr]);

  return (
    <section className="py-10 p-section ">
      <h3 className="text-center text-5xl uppercase font-bold text-white tracking-widest py-5">
        Featured Bicycles
      </h3>

      {/* swiper component */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Scrollbar, A11y]}
        className="mySwiper max-w-7xl"
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
          )}*/}

      {/* CustomSlide */}
      <div className="relative overflow-hidden  max-w-7xl mx-auto  w-full ">
        <div
          className={` flex flex-row 
            transition-transform ease-out duration-1000  w-full  `}
          // style={{ transform: `translateX(-${curr * 33.34}%)` }}
          style={{ transform: `translateX(-${curr * 33.34}%)` }}
        >
          {data.map((product, i) => (
            <Product key={product.name} product={product} i={i} />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-between p-4 ">
          <button
            onClick={prev}
            className="p-3 rounded-full shadow bg-black/50 text-white-800 hover:text-white z-20"
          >
            <BsChevronLeft size={30} />
          </button>

          <button
            onClick={next}
            className="p-3 rounded-full shadow bg-black/50 text-white-800 hover:text-white z-20"
          >
            <BsChevronRight size={30} />
          </button>
        </div>

        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {data.map((_, i) => (
              <div
                key={i}
                onClick={() => goToSlide(i)}
                className={`cursor-pointer z-10
            transition-all w-3 h-3  rounded-full
            ${
              curr === i
                ? "p-[7px] bg-opacity-100 bg-[#dddddd]"
                : "bg-opacity-50 bg-white"
            }
            `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
