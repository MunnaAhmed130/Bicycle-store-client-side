import Tag from "../Home/Products/Tag";
import Rating from "../Rating/Rating";

const ExploreProduct = ({ product }) => {
  const { name, url, price, tags, rating } = product;

  return (
    <div>
      <div className="max-w-sm mx-auto text-center rounded-sm overflow-hidden">
        <div className="relative w-full h-60 overflow-hidden flex items-center  bg-[#E5E5E5]">
          <img
            src={url}
            className=" w-full max-h-56 min-h-56 object-contain brightness-90 "
            alt={name}
          />

          <div className="absolute top-0 p-2  flex ">
            {tags.map((tag) => (
              <Tag key={crypto.randomUUID()} tag={tag} />
            ))}
          </div>
        </div>

        <div className="p-2">
          <h3 className="font-bold">{name}</h3>

          <div className="text-red-500 text-sm h-5  flex items-center justify-center leading-none">
            <Rating count={rating} className="mr-0.5  inline-block pb-0.5" />
            &nbsp;
            <span className="font-bold ">({rating})</span>
          </div>

          <p>Price: ${price.toLocaleString()}</p>

          {/* <Link to={`/placeOrder/${product._id}`} className="btn-link">
          <button className="buy-btn">BUY NOW</button>
        </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ExploreProduct;
