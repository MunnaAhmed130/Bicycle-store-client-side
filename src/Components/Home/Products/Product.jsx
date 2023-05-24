import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const Product = ({ product }) => {
  const { url, name, price, description } = product;

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
  // bg-[#3a3a3a]
  return (
    <div className="[--image-height:15rem] z-10 h-auto  w-full   rounded-sm overflow-hidden  ">
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
      {/* bg-[#1d2129] */}
      <div className="px-3  bg-white text-center">
        <h4 className="lg:text-[18px] sm:text-[17px] text-[15px] pb-1  text-black">
          {name}
        </h4>
        <span className="text-red-600 font-extrabold text-xl">
          <span className="text-sm align-text-top">$</span>
          {price}.00
        </span>
        {/* <p className="text-[#d8d8d8] text-[15px]">
          {product.description.slice(0, 120)}...
        </p> */}
      </div>
    </div>
  );
};

export default Product;
