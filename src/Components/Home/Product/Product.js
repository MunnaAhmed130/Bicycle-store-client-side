import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react'
// import {EffectCoverflow} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
// import './Products.css';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper/core';
SwiperCore.use({ EffectCoverflow, Navigation, Pagination });
const Product = ({ product }) => {
    const { name, url, prize } = product;
    return (
        <>
            <Swiper
                className="mySwiper"
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                }}
                spaceBetween={50}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                navigation={true}
                pagination={true}
            >
                <SwiperSlide>
                    <Col className=' product text-center' >
                        <Card>
                            <Card.Img variant="top" src={url} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                {/* <Card.Text>
                        {description}
                    </Card.Text> */}
                                <p>{prize}</p>
                                <Button variant="outline-primary" className=''>BUY NOW</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Product;