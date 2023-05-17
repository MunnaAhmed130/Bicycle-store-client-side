import { Link } from "react-router-dom";
import "./ExploreProducts.css";

const ExploreProducts = ({ product }) => {
  const { name, url, price, description } = product;
  return (
    <div className="explore-products text-center">
      <div className="card">
        <img src={url} alt="" />
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
          <p>Price: ${price}</p>
          <Link to={`/placeOrder/${product._id}`} className="btn-link">
            <button className="buy-btn">BUY NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;
