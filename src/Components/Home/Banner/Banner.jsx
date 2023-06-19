import { useState } from "react";
import Carousel from "./Carousel";
import CarouselInfo from "./CarouselInfo";
import { bannerImg } from "../../../utils/constant";
import "./Banner.css";

const Banner = () => {
  const [curr, setCurr] = useState(0);
  const [last, setLast] = useState();
  const fade = true;

  return (
    <section
      className={`${
        fade && `relative`
      } h-screen min-w-full w-full bg-black -mt-[--navbar-height] `}
    >
      <Carousel
        curr={curr}
        setCurr={setCurr}
        setLast={setLast}
        fade={fade}
        last={last}
        setSlideInterval={10000}
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
          />
        ))}
      </Carousel>
    </section>
  );
};

export default Banner;
