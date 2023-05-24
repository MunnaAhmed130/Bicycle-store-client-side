import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const CarouselInfo = ({ banner, i, fade, curr, last, alt }) => {
  const [imageLoading, setImageLoading] = useState(true);
  let src = banner.src;

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoading(false);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {fade && (
        <>
          {imageLoading && (
            <div className="h-screen w-screen overflow-hidden">
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

          <img
            src={banner.src}
            alt={alt}
            className={` ${i == curr ? "animate-fade" : "opacity-0"}
            }  ${i == last && "animate-fadeOut"} ${
              imageLoading ? "hidden" : "animate-fade"
            }  absolute min-w-full h-screen object-cover brightness-75 object-center w-full  `}
          />

          {banner.text && (
            <div
              className={` ${
                fade && `${i == curr ? "animate-fade" : "opacity-0"}`
              } animate-fade flex w-full  h-screen text-center  items-center justify-center  absolute z-10`}
            >
              <div className=" flex flex-col sm:gap-3 gap-2 xl:max-w-5xl lg:max-w-3xl md:max-w-xl sm:max-w-lg max-w-sm px-5 transition-all mt-16">
                <h3 className="banner-heading">{banner.text.title}</h3>
                <p className="lg:text-[22px] lg:leading-[30px] md:text-xl   text-white/95 transition-all  mx-auto">
                  {banner.text.description}
                </p>
              </div>
            </div>
          )}
        </>
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
            {banner.text && (
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
            )}
          </div>
        </>
      )}
    </>
  );
};

export default CarouselInfo;
