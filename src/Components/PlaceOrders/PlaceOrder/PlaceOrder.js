import { Alert } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/FooterBottom/Footer';
import Header from '../../Shared/Header/Header';
import './PlaceOrder.css';

const PlaceOrder = () => {
    let { id } = useParams();
    let { user } = useAuth();
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit } = useForm();
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(`https://agile-island-88744.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [id])

    //  initial Info 
    const initialInfo = { userName: user.displayName, email: user.email, url: order.url, productName: order.name, price: order.price, description: order.description, address: "", phone: "" }
    // console.log(initialInfo)
    const { userName, email, productName, url, price, description } = initialInfo;

    // destructure initial Info
    const [purchase, setPurchase] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchase };
        newInfo[field] = value;
        setPurchase(newInfo)
    }
    const { address, phone } = purchase;
    // console.log(purchase);
    const onSubmit = e => {
        const purchaseInfo = {
            userName,
            email,
            url,
            productName,
            description,
            price,
            address,
            phone
        }
        console.log(purchaseInfo)

        axios.post('https://agile-island-88744.herokuapp.com/purchase', purchaseInfo)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    setSuccess(true);
                }
            })
    }
    // console.log(order)
    return (
        <div>
            <Header />
            <h2 className="purchase-heading">Place Your Order</h2>
            <Container>
                <Row>
                    <Col md={6} sm={12} lg={6} className="purchase-img-container p-0">
                        <img className="purchase-img" src={order.url} alt="" />
                    </Col>
                    <Col md={6} sm={12} lg={6} className="">
                        {success && <Alert severity="success" className="alert">Order Placed Successfully</Alert>}
                        {success || <form className="purchase-form" onSubmit={handleSubmit(onSubmit)}>

                            <input
                                name="userName"
                                defaultValue={userName}
                                disabled
                            /> <br />
                            <input
                                name="email"
                                defaultValue={email}
                                disabled
                                variant="outlined"
                            /> <br />
                            <input
                                name="productName"
                                defaultValue={order.name}
                                disabled
                                variant="outlined"
                            /> <br />
                            <input
                                name="address"
                                onBlur={handleOnBlur}
                                placeholder="Address"
                                variant="outlined"
                                required
                            /> <br />
                            <input
                                name="phone"
                                type="tel"
                                onBlur={handleOnBlur}
                                placeholder="Phone"
                                variant="outlined"
                                required
                            /> <br />
                            <input
                                type="number"
                                name="price2"
                                value={price}
                                onChange={handleOnBlur}
                                disabled
                                variant="outlined"
                            /> <br />
                            <Button type="submit" className="purchase-btn">Purchase</Button>
                        </form>}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default PlaceOrder;