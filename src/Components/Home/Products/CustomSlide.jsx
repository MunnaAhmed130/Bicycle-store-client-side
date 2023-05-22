import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useState } from "react";

const CustomSlide = () => {
  // const [curr, setCurr] = useState(0);
  // const [translate, setTranslate] = useState(0);
  // const [last, setLast] = useState();
  // const fade = true;
  // const autoSlide = false;
  // const slidePerView = 3;

  // const prev = () => {
  //   setTranslate();
  //   console.log(translate);
  //   // setLast(curr);
  //   setCurr((curr) => (curr === 0 ? data.length - slidePerView : curr - 1));
  // };

  // const next = () => {
  //   // setTranslate(`-${curr * 33.34}%`);
  //   // setLast(curr);
  //   setCurr((curr) => (curr === data.length - slidePerView ? 0 : curr + 1));
  // };

  // useEffect(() => {
  //   if (!autoSlide) return;
  //   const slideInterval = setInterval(next, 4000);
  //   return () => clearInterval(slideInterval);
  // }, [curr]);
  // p-section
  return (
    <div>
      {/* {data && (
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 max-w-7xl mx-auto p-section transition-all">
          {data.map((product) => (
            <Product key={product.name} product={product} />
          ))}
        </div>
          )}*/}

      {/* CustomSlide */}

      {/* <div className="relative overflow-hidden  max-w-7xl mx-auto  w-full ">
        <Wrapper
          prev={prev}
          next={next}
          curr={curr}
          setCurr={setCurr}
          translate={translate}
        >
          {data.map((product, i) => (
            <Product key={product.name} product={product} i={i} />
          ))}
        </Wrapper>
      </div> */}
    </div>
  );
};

const Wrapper = ({ children: data, curr, prev, next, setCurr, translate }) => {
  const goToSlide = (i) => {
    // setLast(curr);
    setCurr(i);
  };

  return (
    <>
      {/* rid grid-flow-col auto-cols-[calc((100%_-_(1.5rem_*_2)))] */}
      <div
        className={` flex flex-row transition-transform ease-out duration-1000  w-full  `}
        // style={{ transform: `translateX(-${curr * 33.34}%)` }}
        style={{ transform: `translateX(-${curr * 33.13}%)` }}
      >
        {data}
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
    </>
  );
};

export default CustomSlide;
