import Rating from "../Rating/Rating";

const FeaturedItem = ({ product }) => {
  const { name, url, rating, price } = product;
  return (
    <li className="flex gap-4">
      <div className="">
        <img
          className="lg:max-w-[6rem] sm:max-w-[7rem] max-w-[6rem] "
          src={url}
          alt={name}
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <h3 className="lg:block hidden text-sm leading-none">
          {name.slice(0, 15)}...
        </h3>

        <h3 className="lg:hidden block text-sm leading-none">{name}</h3>

        <div className="text-red-500 text-sm h-5  flex items-center leading-none">
          <Rating
            count={rating}
            className="mr-0.5 text-xs  inline-block pb-0.5"
          />
          &nbsp;
          <span className="font-bold ">({rating})</span>
        </div>

        <p className="font-bold leading-none">${price.toLocaleString()}</p>
      </div>
    </li>
  );
};
export default FeaturedItem;
