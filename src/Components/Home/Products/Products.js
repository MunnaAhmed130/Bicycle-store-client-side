import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
// import {EffectCoverflow} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './Products.css';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper/core';
import Product from '../Product/Product';
import { Button, Card, Col } from 'react-bootstrap';

SwiperCore.use({ EffectCoverflow, Navigation, Pagination });

const Products = () => {
    const [products, setProducts] = useState([]);
    const limit = 6;
    useEffect(() => {
        fetch(`https://agile-island-88744.herokuapp.com/products/query?limit=${limit}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    return (
        <Swiper
            className="mySwiper"
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
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
            <div>
                {
                    products.map(product => <SwiperSlide key={product.name} >
                        <Col className='product text-center' >
                            <Card>
                                <Card.Img variant="top" src={product.url} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    {/* <Card.Text>
                        {description}
                    </Card.Text> */}
                                    <p>{product.prize}</p>
                                    <Button variant="outline-primary" className=''>BUY NOW</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </SwiperSlide>)
                }
            </div>
        </Swiper>
    );
};

export default Products;