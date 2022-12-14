import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import ExploreProducts from "../ExploreProducts/ExploreProducts";
import "./Explore.css";

const Explore = () => {
    const { loading } = useAuth();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://bicycle-store-server-side.vercel.app/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    // console.log(products);

    return (
        <div className="explore">
            <Header />
            <h2 className="text-center mt-5 mb-4">
                Explore Our New World of Bicycle Collection
            </h2>
            {!products.length && (
                <div className="center">
                    <CircularProgress></CircularProgress>
                </div>
            )}
            {!loading && (
                <Row xs={1} md={2} lg={3} className="w-100 m-0 ">
                    {products.map((product) => (
                        <ExploreProducts
                            key={product._id}
                            product={product}
                        ></ExploreProducts>
                    ))}
                </Row>
            )}

            {!products.length || <Footer />}
        </div>
    );
};

export default Explore;
