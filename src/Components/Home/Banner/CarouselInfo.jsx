import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import ImageLoader from "../../Explore/ImageLoader";

const CarouselInfo = ({ banner, i, fade, curr, last }) => {
  const [imageLoading, setImageLoading] = useState(true);
  let src = banner.src;

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoading(false);
    };
    img.src = src;
  }, [src]);

  const bannerVariant = {
    hidden: {
      opacity: 0,
      x: 400,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.25,
        duration: 0.25,
      },
    },
  };

  return (
    <>
      {fade && (
        <div
          className={`${i == curr ? "animte-fade" : "opacity-0 z-0"}
      }  ${i == last && "animate-fadeOut"} absolute inset-0 w-screen h-screen`}
        >
          <ImageLoader
            blurhash={banner.blurHash}
            alt={banner.alt}
            url={banner.src}
            height={1224}
            width={3000}
            className="absolute min-w-full h-screen object-cover brightness-75 object-center w-full animate-fade transition-all"
            containerStyle="h-screen w-screen overflow-hidden absolute"
          />

          <div className="banner-gradient z-10 h-screen w-full absolute" />

          <motion.div
            variants={bannerVariant}
            viewport={{ once: true }}
            initial="hidden"
            animate="visible"
            className={`
              flex w-full  h-screen text-center  items-center justify-center  absolute z-20`}
          >
            <div className=" flex flex-col sm:gap-3 gap-2 xl:max-w-5xl lg:max-w-3xl md:max-w-xl sm:max-w-lg max-w-sm px-5 transition-all mt-16">
              <h3 className="banner-heading">{banner.text.title}</h3>

              <p className="lg:text-[22px] lg:leading-[30px] md:text-xl   text-white/95 transition-all  mx-auto">
                {banner.text.description}
              </p>
            </div>
          </motion.div>
        </div>
      )}
      {!fade && (
        <>
          {imageLoading && (
            <div className="h-screen w-screen ">
              <Blurhash
                hash={banner.blurHash}
                width={3000}
                height={1224}
                resolutionX={32}
                resolutionY={32}
                punch={1}
              />
            </div>
          )}
          <div
            src={banner.src}
            key={banner.src}
            style={{
              backgroundImage: `url(${banner.src})`,
            }}
            className={`${
              imageLoading && "hidden"
            } min-w-full h-screen bg-cover bg-center w-full transition `}
          >
            <div
              className={`  absolute  flex flex-col gap-3 w-2/4 translate-x-[50%] text-center h-full items-center justify-center    
                ${i == curr ? "animate-fade" : "opacity-0"}  ${
                i == last && "animate-fadeOut"
              } }`}
            >
              <div className=" flex flex-col gap-3 max-w-2xl mx-auto">
                <h3 className="text-8xl uppercase font-semibold text-white transition">
                  {banner.text.title}
                </h3>
                <p className="text-[22px] text-white/95">
                  {banner.text.description}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CarouselInfo;
