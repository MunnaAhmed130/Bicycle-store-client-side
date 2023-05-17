import { useEffect, useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import "./Banner.css";
// import ImageLoading from "./ImageLoading";

const CarouselInfo = ({ banner, currentIndex, i }) => {
  return (
    <>
      {/* <div
      src={banner.src}
      key={banner.src}
      style={{
        backgroundImage: `url(${banner.src})`,
      }}
      className={`${
        fade && i !== curr ? `hidden` : `animate-fade`
      } min-w-full h-screen bg-cover w-full `}
    >
      {banner.text && (
        <div
          className={`${
            fade && i !== curr && `hidden`
          }  absolute flex flex-col gap-3 w-2/4 translate-x-[50%] text-center h-full items-center justify-center`}
        >
          <h3 className="text-4xl font-semibold">
            {banner.text.title}
          </h3>
          <p className="text-xl">{banner.text.description}</p>
        </div>
      )}
    </div> */}
    </>
  );
};
const Banner = (autoSlide) => {
  const [curr, setCurr] = useState(0);
  const [last, setLast] = useState();

  const bannerImg = [
    {
      src: "https://i.ibb.co/MNtH00X/luca-david-ia8u-TRs-ZZYY-unsplash.jpg",
      blurHash:
        "Y15OZ@~q004nogRPRkWV004n-;-;WBxuoLay?as.t8t8oLNGozofIUbIV@RjV@kCWBf6",
      text: {
        title: "Bicycles for Adventures",
        description:
          "We create the best Cycling Experiences of a lifetime. We can fit you with the perfect bike because we carry all sizes and types of bikes",
      },
    },
    {
      src: "https://i.ibb.co/hK5zTvv/background.png",
      blurHash:
        "Y15OZ@~q004nogRPRkWV004n-;-;WBxuoLay?as.t8t8oLNGozofIUbIV@RjV@kCWBf6",
      text: {
        title: "Bicycles for Adventures",
        description:
          "We create the best Cycling Experiences of a lifetime.We can fit you with the perfect bike because we carry all sizes and types of bikes",
      },
    },
  ];

  const fade = true;

  return (
    <div
      className={`${
        fade && `relative`
      } h-screen min-w-full w-full bg-[black] relative`}
    >
      <Carousel curr={curr} setCurr={setCurr} fade={fade} setLast={setLast}>
        {bannerImg.map((banner, i) => (
          <>
            <div
              src={banner.src}
              key={banner.src}
              style={{
                backgroundImage: `url(${banner.src})`,
              }}
              className={`${fade && "absolute"}  ${
                fade &&
                `${i == curr ? "animate-fade opacity-100" : " opacity-0"}`
              } ${
                fade && `${i == last ? " animate-fadeOut" : " opacity-0"}`
              }  min-w-full h-screen bg-cover bg-center w-full transition `}
            >
              {banner.text && (
                <div
                  className={`${
                    fade && i !== curr && ``
                  }  absolute flex flex-col gap-3 w-2/4 translate-x-[50%] text-center h-full items-center justify-center`}
                >
                  <h3 className="text-4xl font-semibold text-white">
                    {banner.text.title}
                  </h3>
                  <p className="text-xl text-white">
                    {banner.text.description}
                  </p>
                </div>
              )}
            </div>
          </>
        ))}
      </Carousel>
    </div>
  );
};

const Carousel = ({
  children: banner,
  autoSlide,
  curr,
  setLast,
  setCurr,
  fade,
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
  console.log(banner);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, 4000);
    return () => clearInterval(slideInterval);
  }, [curr]);

  return (
    <div className="overflow-hidden relative h-screen w-full">
      <div
        className="flex transition-transform ease-out duration-500 relative"
        // className={`${
        //   fade && banner.id !== curr ? `hidden` : `animate-fade`
        // } min-w-full h-screen object-cover w-full flex transition-transform ease-out duration-500 relative`}
        style={{ transform: `${!fade && `translateX(-${curr * 100}%)`}` }}
      >
        {banner}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4 z-10">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white z-10"
        >
          <BsChevronLeft size={40} />
        </button>

        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white z-10"
        >
          <BsChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {banner.map((_, i) => (
            <div
              key={i}
              onClick={() => goToSlide(i)}
              className={`
          transition-all w-3 h-3 bg-white rounded-full cursor-pointer
          ${curr === i ? "p-2" : "bg-opacity-50"}
        `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
