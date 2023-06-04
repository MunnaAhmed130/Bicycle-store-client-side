import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import Rating from "../../Rating/Rating";
import Tag from "./Tag";

const Product = ({ product }) => {
  const { url, name, price, tags, rating } = product;

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

  // console.log(crypto.randomUUID());

  return (
    <div className="[--image-height:15rem] z-10 h-auto w-full rounded-sm overflow-hidden cursor-pointer ">
      <div>
        <div className=" overflow-hidden relative bg-[#E5E5E5]">
          {imageLoading && (
            <div className="overflow-hidden h-[var(--image-height)] flex items-center justify-center">
              <Blurhash
                hash={blurHash}
                width={600}
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
            } w-full h-[var(--image-height)] object-contain object-center brightness-90 `}
          />

          <div className="absolute top-0 p-2 e border flex ">
            {tags.map((tag) => (
              <Tag key={crypto.randomUUID()} tag={tag} />
            ))}
          </div>
        </div>
      </div>

      <div className="p-3  text-center">
        <h4 className="lg:text-[18px] sm:text-[17px] text-[15px]  font-semibold  text-white">
          {name}
        </h4>

        <div className="text-red-500 h-8  flex items-center justify-center leading-none">
          <Rating
            count={rating}
            // emptyColor="text-red-200"
            className="mr-0.5  inline-block pb-0.5"
          />
          &nbsp;
          <span className="font-extrabold text-sm  ">({rating})</span>
        </div>

        <p className="text-white font-extrabold text-lg">
          <span className="text-xs align-text-top">$</span>
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
