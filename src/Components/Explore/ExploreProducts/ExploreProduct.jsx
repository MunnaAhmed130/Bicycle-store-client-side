import { useState } from "react";
import Tag from "../../Home/Products/Tag";
import Rating from "../../Rating/Rating";
import ImageLoader from "../ImageLoader";
import { motion } from "framer-motion";
import { BsCartPlus, BsFillBookmarksFill, BsBookmarks } from "react-icons/bs";

const ExploreProduct = ({ product }) => {
  const { name, url, blurhash, price, tags, rating } = product;

  const [wishlist, setWishlist] = useState(true);

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.25,
        duration: 0.25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.25,
      },
    },
  };

  return (
    <motion.div
      layout
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      viewport={{ once: true }}
    >
      <div className="max-w-[300px] sm:h-[23rem] mx-auto text-center rounded-sm overflow-hidden">
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
          <div className="absolute h-full top-0 right-0 p-2 flex flex-col  gap-2">
            {/* {tags.map((tag) => (
              <Tag key={crypto.randomUUID()} tag={tag} />
            ))} */}
            <button className="text-black bg-white w-10 h-10 rounded-full flex-center text-lg">
              <BsCartPlus />
            </button>
            <button
              onClick={() => setWishlist((prev) => !prev)}
              className="text-black bg-white w-10 h-10 rounded-full flex-center text-lg"
            >
              {/* <div></div> */}
              {wishlist ? <BsBookmarks /> : <BsFillBookmarksFill />}
              {/* <BsFillBookmarksFill /> */}
            </button>
          </div>
        </div>

        <div className="p-2">
          <h3 className="font-bold">{name}</h3>

          <div className="text-red-500 text-sm h-5 flex-center leading-none">
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
