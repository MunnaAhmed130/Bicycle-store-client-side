import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import { Blurhash } from "react-blurhash";

const CarouselInfo = () => {
  return (
    <>
      <h3>Bicycles for Adventures</h3>
      <p>
        We create the best Cycling Experiences of a lifetime.We can fit you with
        the perfect bike because we carry all sizes and types of bikes.
      </p>
    </>
  );
};

const Banner = () => {
  const bannerImg = {
    banner1: {
      src: "https://i.ibb.co/MNtH00X/luca-david-ia8u-TRs-ZZYY-unsplash.jpg",
      blurHash:
        "Y15OZ@~q004nogRPRkWV004n-;-;WBxuoLay?as.t8t8oLNGozofIUbIV@RjV@kCWBf6",
    },
    banner2: {
      src: "https://i.ibb.co/hK5zTvv/background.png",
      blurHash:
        "Y15OZ@~q004nogRPRkWV004n-;-;WBxuoLay?as.t8t8oLNGozofIUbIV@RjV@kCWBf6",
    },
  };

  const interval = 5000;

  return (
    <Carousel fade>
      <Carousel.Item interval={interval}>
        <ImageLoading
          image={bannerImg.banner1}
          className="d-block w-100 object-fit-cover vh-100 banner-img "
          alt="first slide"
        />
        <Carousel.Caption className="caption">
          <CarouselInfo />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={interval}>
        <ImageLoading
          image={bannerImg.banner2}
          className="d-block w-100 object-fit-cover vh-100 banner-img "
          alt="second slide"
        />
        <Carousel.Caption className="caption">
          <CarouselInfo />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const ImageLoading = ({ image, alt, className }) => {
  const [imageLoading, setImageLoading] = useState(true);
  let src = image.src;

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoading(false);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {imageLoading && (
        <div className="vh-100 vw-100 overflow-hidden">
          <Blurhash
            hash={image.blurHash}
            width={3000}
            height={1224}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      )}
      <img
        className={`${imageLoading ? "d-none" : "loaded-img"}  ${className}`}
        src={image.src}
        alt={alt}
      />
    </>
  );
};

export default Banner;
