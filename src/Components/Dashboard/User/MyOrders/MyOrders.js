import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useAuth from "../../../../Hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";
import "./MyOrders.css";

const MyOrders = () => {
  const { user } = useAuth();
  const [success, setSuccess] = useState(false);
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/purchase/email?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email]);
  console.log(myOrders);

  const handleDeleteOrder = (_id) => {
    const proceed = window.confirm("Are you sure , you want to delete?");
    if (proceed) {
      fetch(`http://localhost:4000/purchase/${_id}`, {
        method: "DELETE",
      })
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
      {success && <p>This is a success alert — check it out!</p>}
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
