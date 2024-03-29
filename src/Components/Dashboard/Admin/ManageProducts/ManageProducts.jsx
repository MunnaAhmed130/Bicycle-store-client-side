import { useEffect, useState } from "react";
import { Row, Card, Col } from "react-bootstrap";
import "./ManageProducts.css";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  const handleDeleteOrder = (_id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `http://localhost:4000/products/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingOrders = products.filter(
              (order) => order._id !== _id
            );
            setProducts(remainingOrders);
            setSuccess(true);
          }
        });
    }
  };
  return (
    <div className="manage-products">
      <h2 className="text-center my-4">Manage Products</h2>
      <Row xs={1} md={2} lg={3} className="w-100 m-0 ">
        {products.map((product) => (
          <Col className="p-2 manage-product" key={product._id}>
            <Card className="text-center">
              <Card.Img variant="top" src={product.url} className="card-img" />
              <Card.Body>
                <Card.Title className="card-name">{product.name}</Card.Title>
                <Card.Text className="card-description">
                  {product.description}
                </Card.Text>
                <h6>Price: &#x24;{product.price}</h6>
                <button
                  onClick={() => handleDeleteOrder(product._id)}
                  color="error"
                >
                  DELETE
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {success && <p>This Product has been Successfully Deleted</p>}
      </Row>
    </div>
  );
};

export default ManageProducts;
