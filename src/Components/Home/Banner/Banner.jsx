import { useState } from "react";
import Carousel from "./Carousel";
import "./Banner.css";
import CarouselInfo from "./CarouselInfo";

const Banner = () => {
  const [curr, setCurr] = useState(0);
  const [last, setLast] = useState();
  // console.log(curr, last);

  const bannerImg = [
    {
      // id: 0,
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
      // id: 1,
      src: "https://i.ibb.co/hK5zTvv/background.png",
      blurHash:
        "Y15OZ@~q004nogRPRkWV004n-;-;WBxuoLay?as.t8t8oLNGozofIUbIV@RjV@kCWBf6",
      text: {
        title: "Bicycles for Adventures",
        description:
          "We create the best Cycling Experiences of a lifetime. We can fit you with the perfect bike because we carry all sizes and types of bikes",
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
        autoSlide={false}
      >
        {bannerImg.map((banner, i) => (
          <CarouselInfo
            banner={banner}
            i={i}
            fade={fade}
            key={banner.src}
            curr={curr}
            last={last}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
