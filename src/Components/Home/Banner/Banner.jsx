import { useState } from "react";
import Carousel from "./Carousel";
import "./Banner.css";

const Banner = () => {
  const [curr, setCurr] = useState(0);
  const [last, setLast] = useState();
  console.log(curr, last);

  const bannerImg = [
    {
      // id: 0,
      src: "https://i.ibb.co/MNtH00X/luca-david-ia8u-TRs-ZZYY-unsplash.jpg",
      blurHash:
        "Y15OZ@~q004nogRPRkWV004n-;-;WBxuoLay?as.t8t8oLNGozofIUbIV@RjV@kCWBf6",
      text: {
        title: "Bicycles for Adventures",
        description:
          "We create the best Cycling Experiences of a lifetime.  We can fit you with the perfect bike because we carry all sizes and types of bikes",
      },
    },
    {
      // id: 1,
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
      } h-screen min-w-full w-full bg-[black] -mt-20 `}
    >
      <Carousel
        curr={curr}
        setCurr={setCurr}
        setLast={setLast}
        fade={fade}
        setSlideInterval={10000}
        autoSlide={true}
      >
        {bannerImg.map((banner, i) => (
          <div
            src={banner.src}
            key={banner.src}
            style={{
              backgroundImage: `url(${banner.src})`,
            }}
            // style={{
            //   background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${banner.src}) no-repeat center cover`,
            // }}
            className={`${fade && "absolute"} ${
              fade && `${i == curr ? "animate-fade" : "opacity-0"}`
            }  ${
              fade && `${i == last && "animate-fadeOut"}`
            }  min-w-full h-screen bg-cover bg-no-repeat bg-center w-full  `}
          >
            {banner.text && (
              <div
                className={`  relative flex flex-col gap-3 w-2/4 translate-x-[50%] text-center h-full items-center justify-center text-white`}
              >
                <h3 className="text-4xl font-semibold ">{banner.text.title}</h3>
                <p className="text-xl">{banner.text.description}</p>
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
