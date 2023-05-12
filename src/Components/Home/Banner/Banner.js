import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  const img1 = "https://i.ibb.co/SrxdJ8z/background.png";
  const img2 = "https://i.ibb.co/MNtH00X/luca-david-ia8u-TRs-ZZYY-unsplash.jpg";

  const interval = 5000;

  return (
    <Carousel fade>
      <Carousel.Item interval={interval}>
        <img
          className="d-block w-100 object-fit-cover banner-img "
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption className="caption">
          <h3>Bicycles for Adventures</h3>
          <p>
            We create the best Cycling Experiences of a lifetime.We can fit you
            with the perfect bike because we carry all sizes and types of bikes.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={interval}>
        <img
          className="d-block w-100 object-fit-cover banner-img"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption className="caption">
          <h3>Fashionable Bicycles</h3>
          <p>
            We create the best Cycling Experiences of a lifetime.We can fit you
            with the perfect bike because we carry all sizes and types of bikes.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item interval={2500}>
          <img
            className="d-block w-100 banner-img"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption className="caption">
            <h3>Bicycles for Roads</h3>
            <p>
              We create the best Cycling Experiences of a lifetime.We can fit
              you with the perfect bike because we carry all sizes and types of
              bikes.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
    </Carousel>
  );
};

export default Banner;
