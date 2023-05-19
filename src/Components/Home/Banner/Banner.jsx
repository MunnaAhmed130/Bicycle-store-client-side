import { useState } from "react";
import Carousel from "./Carousel";
import "./Banner.css";
import CarouselInfo from "./CarouselInfo";
import { bannerImg } from "../../../utils/constants";

const Banner = () => {
  const [curr, setCurr] = useState(0);
  const [last, setLast] = useState();
  const fade = true;

  return (
    <section
      className={`${
        fade && `relative`
      } h-screen min-w-full w-full bg-[black] -mt-20 `}
    >
      <Carousel
        curr={curr}
        setCurr={setCurr}
        setLast={setLast}
        fade={fade}
        setSlideInterval={4000}
        autoSlide={true}
      >
        {bannerImg.map((banner, i) => (
          <CarouselInfo
            banner={banner}
            i={i}
            fade={fade}
            key={banner.src}
            curr={curr}
            last={last}
            alt={banner.alt}
          />
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;
