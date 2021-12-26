import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    const img1 = "https://i.ibb.co/SrxdJ8z/background.png"
    const img2 = "https://i.ibb.co/MNtH00X/luca-david-ia8u-TRs-ZZYY-unsplash.jpg"
    const img3 = "https://i.ibb.co/5L2LNjB/image-copyright-51.jpg"
    const img4 = "https://i.ibb.co/GCKctkK/image-copyright-46.jpg"
    return (
        <Carousel fade>
            <Carousel.Item interval={2500}>
                <img
                    className="d-block w-100 banner-img"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img
                    className="d-block w-100 banner-img"
                    src={img2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img
                    className="d-block w-100 banner-img"
                    src={img3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;