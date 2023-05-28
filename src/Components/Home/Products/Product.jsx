import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import Rating from "../../Rating/Rating";

const Product = ({ product }) => {
  const { url, name, price, description, tags, rating } = product;

  const [imageLoading, setImageLoading] = useState(true);

  let src = url;
  const blurHash =
    "iRRMVks:.8Wq?boKRPxut8-;ofogRjIUofRjkCoz_NkCITWAM{ozWVWBWBE1WBjFozxvWBt7n%s:jZayofofV@WBozj[RP";

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoading(false);
    };
    img.src = src;
  }, [src]);

  return (
    <div className="[--image-height:15rem] z-10 h-auto w-full rounded-sm overflow-hidden cursor-pointer">
      <div className="bg-white overflow-hidden relative">
        {imageLoading && (
          <div className="overflow-hidden h-[var(--image-height)]">
            <Blurhash
              hash={blurHash}
              width={500}
              height={240}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          </div>
        )}

        <img
          src={url}
          alt={name}
          className={`${
            imageLoading && "hidden"
          } w-full h-[var(--image-height)] object-contain object-center `}
        />

        <div className="absolute top-0">
          {tags.map((tag) => (
            <span
              key={crypto.randomUUID()}
              className={`text-white text-xs font-bold py-1 px-2 bg-[#1683e9] m-1 rounded  uppercase`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-3   text-center">
        <h4 className="lg:text-[18px] sm:text-[17px] text-[15px] pb-1  text-white">
          {name}
        </h4>

        <div className="text-white pb-1">
          <Rating count={rating} className="text-orange-400 mr-[2px] text-lg" />
          &nbsp;
          <span className="text-red-500">({rating})</span>
        </div>

        <p className="text-red-500 font-extrabold text-lg">
          <span className="text-sm align-text-top">$</span>
          {price}.00
        </p>
        {/* <p className="text-[#d8d8d8] text-[15px]">
          {product.description.slice(0, 120)}...
        </p> */}
      </div>
    </div>
  );
};

export default Product;
