import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ExploreProducts.css';

const ExploreProducts = ({ product }) => {
    const { name, url, prize } = product;
    return (
        <Col className='explore-products text-center' >
            <Card className='card' >
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    {/* <Card.Text>
                        {description}
                    </Card.Text> */}
                    <p>{prize}</p>
                    <Link to={`/placeOrder/${product._id}`}><Button variant="outline-primary" className=''>BUY NOW</Button></Link>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default ExploreProducts;