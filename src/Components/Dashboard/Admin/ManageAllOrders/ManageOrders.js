import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Alert from "@mui/material/Alert";
import "./ManageOrders.css";
import { Button } from "@mui/material";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    fetch("http://localhost:4000/purchase")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  console.log(orders);
  const handleDeleteOrder = (_id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`http://localhost:4000/purchase/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            const remainingOrders = orders.filter((order) => order._id !== _id);
            setOrders(remainingOrders);
            setSuccess(true);
            return;
          }
        });
    }
  };
  return (
    <div className="manage-order">
      <h1 className="text-center mt-4">Manage Orders</h1>
      {success && (
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      )}
      {orders.length || <p className="no-order">THERE IS NO ORDER</p>}
      {orders.length !== 0 && (
        <Row xs={1} md={2} lg={3} className="w-100 m-0">
          {orders.map((order) => (
            <Col className="my-order text-center" key={order._id}>
              <Card>
                <Card.Img variant="top" src={order.url} />
                <Card.Body>
                  <Card.Title>{order.productName}</Card.Title>
                  <h6>Order From: {order.email}</h6>
                  <Card.Text>{order.description}</Card.Text>
                  <p>{order.price}</p>
                  <Button variant="outlined" className="me-1 ship">
                    SHIP
                  </Button>

                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDeleteOrder(order._id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ManageOrders;
