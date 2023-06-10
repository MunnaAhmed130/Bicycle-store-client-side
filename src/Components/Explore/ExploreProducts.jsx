import { Link } from "react-router-dom";
import "./ExploreProducts.css";
import Tag from "../Home/Products/Tag";

const ExploreProducts = ({ product }) => {
  const { name, url, price, tags, rating, description } = product;
  // console.log(crypto.randomUUID());
  return (
    <div className=" text-center rounded-sm overflow-hidden">
      <div className="relative w-full h-56 overflow-hidden flex items-center bg-[#E5E5E5]">
        <img src={url} className="max-h-60 object-cover brightness-90" alt="" />
        <div className="absolute top-0 p-2  flex ">
          {tags.map((tag) => (
            <Tag key={crypto.randomUUID()} tag={tag} />
          ))}
        </div>
      </div>
      <div className="p-2">
        <h3 className="font-bold">{name}</h3>
        {/* <p className="">{description.slice(0, 100)}...</p> */}
        <p>Price: ${price}</p>
        {/* <Link to={`/placeOrder/${product._id}`} className="btn-link">
          <button className="buy-btn">BUY NOW</button>
        </Link> */}
      </div>
    </div>
  );
};

export default ExploreProducts;
