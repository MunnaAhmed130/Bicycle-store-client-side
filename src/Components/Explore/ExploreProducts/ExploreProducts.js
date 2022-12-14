import { Button } from '@mui/material';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ExploreProducts.css';

const ExploreProducts = ({ product }) => {
    const { name, url, price, description } = product;
    return (
        <Col className='explore-products text-center' >
            <Card className='card' >
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <p>Price: ${price}</p>
                    <Link to={`/placeOrder/${product._id}`} className="btn-link"><Button variant="contained" className='buy-btn'>BUY NOW</Button></Link>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default ExploreProducts;