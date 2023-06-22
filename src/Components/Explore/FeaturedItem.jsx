import { animateIn } from "../../utils/motion";
import Rating from "../Rating/Rating";
import ImageLoader from "./ImageLoader";
import { motion } from "framer-motion";

const FeaturedItem = ({ product, i }) => {
  const { name, blurhash, url, rating, price } = product;
  return (
    <motion.li
      variants={animateIn(150, 0, "spring", 0.4, i * 0.15, 0.75)}
      className="flex gap-4"
    >
      <div className="flex items-center justify-center">
        <div className="bg-white overflow-hidden xxs:w-28 w-24 h-20 flex items-center justify-center">
          <ImageLoader
            alt={name}
            blurhash={blurhash}
            url={url}
            width={112}
            height={80}
            className="xxs:w-28 w-24 xxs:h-16 h-14 object-contain "
            containerStyle=":w-28 h-16"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col ">
          <h3 className="lg:block xs:hidden block text-sm ">
            {name.slice(0, 16)}...
          </h3>

          <h3 className="lg:hidden xs:block hidden text-sm ">{name}</h3>

          <div className="text-red-500 text-sm h-5  flex items-center leading-none">
            <Rating
              count={rating}
              className="mr-0.5 text-xs  inline-block pb-0.5"
            />
            &nbsp;
            <span className="font-bold ">({rating})</span>
          </div>

          <p className="font-bold text-sm ">${price.toLocaleString()}</p>
        </div>
      </div>
    </motion.li>
  );
};

export default FeaturedItem;
