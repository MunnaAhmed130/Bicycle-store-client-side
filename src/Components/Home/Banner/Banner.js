import React from 'react';
import { Carousel } from 'react-bootstrap';
// import Header from '../../Shared/Header/Header';
import './Banner.css';

const Banner = () => {
    const img1 = "https://i.ibb.co/SrxdJ8z/background.png"
    const img2 = "https://i.ibb.co/MNtH00X/luca-david-ia8u-TRs-ZZYY-unsplash.jpg"
    const img3 = "https://i.ibb.co/5L2LNjB/image-copyright-51.jpg"
    // const img4 = "https://i.ibb.co/GCKctkK/image-copyright-46.jpg"
    return (
        <div>

            <Carousel fade>

                <Carousel.Item interval={2500}>
                    <img
                        className="d-block w-100 banner-img"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='caption'>
                        <h3>Bicycles for Adventures</h3>
                        <p>We create the best Cycling Experiences of a lifetime.We can fit you with the perfect bike because we carry all sizes and types of bikes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        className="d-block w-100 banner-img"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='caption'>
                        <h3>Fashionable Bicycles</h3>
                        <p>We create the best Cycling Experiences of a lifetime.We can fit you with the perfect bike because we carry all sizes and types of bikes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        className="d-block w-100 banner-img"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='caption'>
                        <h3>Bicycles for Roads</h3>
                        <p>We create the best Cycling Experiences of a lifetime.We can fit you with the perfect bike because we carry all sizes and types of bikes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;