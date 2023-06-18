import { fadeIn } from "../../utils/motion";
import Tag from "../Home/Products/Tag";
import Rating from "../Rating/Rating";
import ImageLoader from "./ImageLoader";
import { motion } from "framer-motion";

const ExploreProduct = ({ product, i }) => {
  const { name, url, blurhash, price, tags, rating } = product;
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      layout
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="max-w-[300px] mx-auto text-center rounded-sm overflow-hidden">
        <div className="relative w-full h-60 flex items-center  bg-[#E5E5E5]">
          <ImageLoader
            blurhash={blurhash}
            alt={name}
            url={url}
            height={240}
            width={300}
            className=" w-full max-h-56 min-h-56 object-cover brightness-90 "
            containerStyle="w-full overflow-hidden text-center brightness-90"
          />
          <div className="absolute top-0 p-2 flex ">
            {tags.map((tag) => (
              <Tag key={crypto.randomUUID()} tag={tag} />
            ))}
          </div>
        </div>

        <div className="p-2">
          <h3 className="font-bold">{name}</h3>

          <div className="text-red-500 text-sm h-5 flex items-center justify-center leading-none">
            <Rating count={rating} className="mr-0.5 inline-block pb-0.5" />
            &nbsp;
            <span className="font-bold ">({rating})</span>
          </div>

          <p>Price: ${price.toLocaleString()}</p>

          {/* <Link to={`/placeOrder/${product._id}`} className="btn-link">
          <button className="buy-btn">BUY NOW</button>
        </Link> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ExploreProduct;
