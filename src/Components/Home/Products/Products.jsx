import { useState } from "react";
import { useLoaderData } from "react-router-dom";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const Products = () => {
  const data = useLoaderData();
  // console.log(data);
  // const data = false;
  // grid lg:grid-cols-3 sm:grid-cols-2 grids-cols-1
  const [curr, setCurr] = useState(0);
  return (
    <section className="py-10 bg-[#1d1d1d]">
      <h3 className="text-center text-5xl uppercase font-bold text-white tracking-widest py-5">
        Featured Bicycles
      </h3>
      <swiper-container>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        ...
      </swiper-container>
      {data && (
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-7xl mx-auto p-section transition-all">
          {data.map((product) => (
            <Product key={product.name} product={product} />
          ))}
        </div>
      )}
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
