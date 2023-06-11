import Tag from "../Home/Products/Tag";

const ExploreProduct = ({ product }) => {
  const { name, url, price, tags } = product;

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
        <p>Price: ${price}</p>
        {/* <Link to={`/placeOrder/${product._id}`} className="btn-link">
          <button className="buy-btn">BUY NOW</button>
        </Link> */}
      </div>
    </div>
  );
};

export default ExploreProduct;
