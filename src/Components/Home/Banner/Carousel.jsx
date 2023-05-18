import { useEffect } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const Carousel = ({
  children: banner,
  autoSlide = false,
  setSlideInterval,
  curr,
  setCurr,
  fade,
  setLast,
}) => {
  const prev = () => {
    setLast(curr);
    // setTimeout(() => {
    setCurr((curr) => (curr === 0 ? banner.length - 1 : curr - 1));
    // }, 500);
  };

  const next = () => {
    setLast(curr);
    setCurr((curr) => (curr === banner.length - 1 ? 0 : curr + 1));
  };

  const goToSlide = (i) => {
    setLast(curr);
    setCurr(i);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, setSlideInterval);
    return () => clearInterval(slideInterval);
  }, [curr, setSlideInterval]);

  return (
    <div className="overflow-hidden relative h-screen w-full">
      <div
        className={`${
          fade ? "relative" : "flex"
        }  transition-transform ease-out duration-1000 `}
        // className={`${
        //   fade && banner.id !== curr ? `hidden` : `animate-fade`
        // } min-w-full h-screen object-cover w-full flex transition-transform ease-out duration-500 relative`}
        style={{ transform: `${!fade && `translateX(-${curr * 100}%)`}` }}
      >
        {banner}
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
          {banner.map((_, i) => (
            <div
              key={i}
              onClick={() => goToSlide(i)}
              className={`
          transition-all w-3 h-3 bg-white rounded-full
          ${curr === i ? "p-2" : "bg-opacity-50"}
        `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Carousel;
