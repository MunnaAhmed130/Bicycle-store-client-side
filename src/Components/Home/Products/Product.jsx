import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const Product = ({ product }) => {
  // lg:min-w-[calc(33%_-_10px)] sm:min-w-[50%]
  const [imageLoading, setImageLoading] = useState(true);
  let src = product.url;
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
    <div className="z-10 h-auto  w-full min-w-[calc(33.34%_-_15px)] mr-5  bg-[#3a3a3a] rounded-sm overflow-hidden ">
      <div className="bg-white">
        {imageLoading && (
          <div className="w-full text-center">
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
          src={product.url}
          alt={product.name}
          className={`${
            imageLoading && "hidden"
          } w-full h-60 object-contain object-center `}
        />
      </div>

      <div className="px-3 py-5 ">
        <h4 className="lg:text-[18px] sm:text-[17px] text-[15px] pb-1  text-white">
          {product.name}
        </h4>
        <p className="text-[#d8d8d8] text-[15px]">
          {product.description.slice(0, 120)}...
        </p>
      </div>
    </div>
  );
};

export default Product;
