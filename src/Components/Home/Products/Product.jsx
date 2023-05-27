import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import Rating from "../../Rating/Rating";

const Product = ({ product }) => {
  const { url, name, price, description, rating } = product;
  // console.log(product);
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
    <div className="[--image-height:15rem] z-10 h-auto  w-full   rounded-sm overflow-hidden cursor-pointer border">
      <div className="bg-white overflow-hidden">
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
      </div>

      <div className="p-3  bg-white text-center">
        <h4 className="lg:text-[18px] sm:text-[17px] text-[15px] pb-1  text-black">
          {name}
        </h4>

        <p className="text-black pb-2">
          <Rating count={rating} className="text-orange-400 mr-[2px] text-xl" />
          &nbsp;
          <span className="text-red-500">({rating})</span>
        </p>

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
