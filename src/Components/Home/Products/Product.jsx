import Rating from "../../Rating/Rating";
import Tag from "./Tag";
import ImageLoader from "../../Explore/ImageLoader";

const Product = ({ product }) => {
  const { url, name, price, tags, rating, blurhash, alt } = product;
  // console.log(product);

  return (
    <div className="sm:[--image-height:18rem] xs:[--image-height:16rem] [--image-height:14rem] z-10 h-auto w-full rounded-sm overflow-hidden cursor-pointer ">
      <div className="overflow-hidden relative bg-[#E5E5E5]">
        <ImageLoader
          blurhash={blurhash}
          alt={alt}
          url={url}
          height={300}
          width={500}
          className="w-full sm:h-72 xs:h-64 h-56 object-contain object-center brightness-90 transition-all duration-1000 "
          containerStyle="overflow-hidden sm:h-72 xs:h-64 h-56 flex-center brightness-90 transition-all duration-1000"
        />

        <div className="absolute top-0 p-2  flex ">
          {tags.map((tag) => (
            <Tag key={crypto.randomUUID()} tag={tag} />
          ))}
        </div>
      </div>

      <div className="p-3 text-center">
        <h4 className="lg:text-lg text-[1.0625rem] font-semibold text-white">
          {name}
        </h4>

        <div className="text-red-500 h-8  flex-center leading-none">
          <Rating
            count={rating}
            // emptyColor="text-red-200"
            className="mr-0.5  inline-block pb-0.5"
          />
          &nbsp;
          <span className="font-extrabold ">({rating})</span>
        </div>

        <p className="text-white font-extrabold text-xl">
          <span className="text-xs align-text-top">$</span>
          {price}.00
        </p>
      </div>
    </div>
  );
};

export default Product;
