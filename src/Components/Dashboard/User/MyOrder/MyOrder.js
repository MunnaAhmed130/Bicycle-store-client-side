import React, { useState } from 'react';

import { Button, Card, Col, Row } from 'react-bootstrap';
import './MyOrder.css';

const MyOrder = ({ myOrder, handleDeleteOrder }) => {
    const { _id, url, productName, description, price } = myOrder;
    return (
        <>
            <Col className='my-order text-center' >
                <Card>
                    <Card.Img variant="top" src={url} />
                    <Card.Body>
                        <Card.Title>{productName}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <p>{price}</p>
                        <Button variant="outline-danger" onClick={() => handleDeleteOrder(_id)} className=''>Delete</Button>

                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default MyOrder;