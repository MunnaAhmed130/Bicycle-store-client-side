import React, { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Alert from "@mui/material/Alert";

import useAuth from "../../../../Hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";
import "./MyOrders.css";

const MyOrders = () => {
    const { user } = useAuth();
    const [success, setSuccess] = useState(false);
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(
            `https://bicycle-store-server-side.vercel.app/purchase/email?email=${user.email}`
        )
            .then((res) => res.json())
            .then((data) => setMyOrders(data));
    }, [user.email]);
    console.log(myOrders);

    const handleDeleteOrder = (_id) => {
        const proceed = window.confirm("Are you sure , you want to delete?");
        if (proceed) {
            fetch(
                `https://bicycle-store-server-side.vercel.app/purchase/${_id}`,
                {
                    method: "DELETE",
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount) {
                        const remainingOrders = myOrders.filter(
                            (order) => order._id !== _id
                        );
                        setMyOrders(remainingOrders);
                        setSuccess(true);
                        return;
                    }
                });
        }
    };
    return (
        <div>
            <h1 className="text-center mt-4">My Orders</h1>
            {success && (
                <Alert severity="success">
                    This is a success alert — check it out!
                </Alert>
            )}
            <Row xs={1} md={2} lg={3} className="w-100 m-0">
                {myOrders.map((myOrder) => (
                    <MyOrder
                        key={myOrder._id}
                        myOrder={myOrder}
                        handleDeleteOrder={handleDeleteOrder}
                    ></MyOrder>
                ))}
            </Row>
        </div>
    );
};

export default MyOrders;
