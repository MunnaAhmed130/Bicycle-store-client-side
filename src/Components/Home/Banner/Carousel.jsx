import { useEffect } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const Carousel = ({
  children: banner,
  autoSlide = false,
  setSlideInterval,
  curr,
  setCurr,
  setLast,
}) => {
  const prev = () => {
    setLast(curr);
    setCurr((curr) => (curr === 0 ? banner.length - 1 : curr - 1));
  };

  const next = () => {
    setLast(curr);
    setCurr((curr) => (curr === banner.length - 1 ? 0 : curr + 1));
  };

  const goToSlide = (i) => {
    setLast(curr);
    setCurr(i);
  };

  // console.log(curr, last);
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, setSlideInterval);
    return () => clearInterval(slideInterval);
  }, [curr]);

  return (
    <div className="overflow-hidden h-screen w-full">
      <div className="relative  transition-transform ease-out duration-1000 h-screen w-full">
        {banner}
      </div>

      {/* indicator button */}
      <div className="absolute inset-0 px-4  hidden">
        <div className="flex items-center justify-between h-screen">
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
      </div>

      {/* pagination button */}
      <div className="absolute bottom-4 right-0 left-0 z-50 hidden">
        <div className="flex-center gap-2">
          {banner.map((_, i) => (
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
  );
};

export default Carousel;
