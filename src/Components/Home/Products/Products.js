import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import {EffectCoverflow} from 'swiper';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Products.css";
// import Swiper core and required modules
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    EffectCoverflow,
} from "swiper/core";

import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

SwiperCore.use([EffectCoverflow, Scrollbar, Navigation, Pagination]);

const Products = () => {
    const [products, setProducts] = useState([]);
    const limit = 6;

    useEffect(() => {
        fetch(
            `https://bicycle-store-server-side.vercel.app/products/limit?number=${limit}`
        )
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    // console.log(products);
    return (
        <div className="products">
            <h2 className="text-center">Some Featured Bicycles</h2>
            <Swiper
                className="mySwiper"
                breakpoints={{
                    800: {
                        slidesPerView: 2,
                        // coverflowEffect: {
                        //     depth: 0,
                        // }
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                spaceBetween={20}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
            >
                <div className="products">
                    {products.map((product) => (
                        <SwiperSlide key={product.name}>
                            <Col className="product text-center">
                                <Card>
                                    <Card.Img variant="top" src={product.url} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>
                                            {product.description}
                                        </Card.Text>
                                        <p>Price: ${product.price}</p>
                                        <Link to={`/placeOrder/${product._id}`}>
                                            <Button
                                                variant="contained"
                                                className=""
                                            >
                                                BUY NOW
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
};

export default Products;
