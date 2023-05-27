import { Link } from "react-router-dom";
import "./ExploreProducts.css";

const ExploreProducts = ({ product }) => {
  const { name, url, price, rating, description } = product;
  return (
    <div className="card text-center rounded-sm overflow-hidden">
      <div className="w-full h-56 overflow-hidden flex items-center justify-center bg-white">
        <img src={url} className="max-h-60 object-cover" alt="" />
      </div>
      <div className="p-2">
        <h3 className="text-lg">{name}</h3>
        <p className="">{description.slice(0, 100)}...</p>
        <p>Price: ${price}</p>
        <Link to={`/placeOrder/${product._id}`} className="btn-link">
          <button className="buy-btn">BUY NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default ExploreProducts;
