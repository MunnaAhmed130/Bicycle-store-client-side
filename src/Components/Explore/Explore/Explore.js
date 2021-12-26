import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import ExploreProducts from '../ExploreProducts/ExploreProducts';
import './Explore.css';

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://agile-island-88744.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products);

    return (
        <div>
            <Header />
            <h1 className='text-center mt-5 mb-4'>Explore our new world of bicycle collection</h1>
            <Row xs={1} md={2} lg={3} className="w-100 m-0 ">
                {
                    products.map(product => <ExploreProducts key={product.name} product={product}></ExploreProducts>)
                }
            </Row>
            <Footer />
        </div>
    );
};

export default Explore;