import StarRating from "../../Rating/StarRating";
import { BsQuote } from "react-icons/bs";

const Review = ({ review }) => {
  const { name, url, description, rating, profession } = review;

  return (
    <div className="flex flex-col gap-3 last:xl:flex last:lg:hidden ">
      <div className="flex gap-5 items-center justify-start">
        <img
          className="[--box:3.5rem] w-[var(--box)] h-[var(--box)] object-cover rounded-full"
          // referrerPolicy="no-referrer"
          src={url}
          alt={`${name} image`}
        />

        <div className="flex flex-col">
          <p className="md:text-lg text-[17px] md:leading-none leading-none capitalize font-semibold text-[white]/95 mb-1">
            {name}
          </p>

          <p className="text-[rgba(255,255,255,0.75)] text-sm leading-none ">
            {profession}
          </p>

          <div>
            <StarRating
              count={rating}
              className="mx-[2px] text-sm text-red-600 "
            />
          </div>
        </div>
      </div>

      <div className="relative ">
        <BsQuote className=" absolute md:text-7xl sm:text-6xl text-5xl text-[#ffffff50] md:-left-3 sm:-left-2.5 -left-2 top-0 leading-3 transition-all " />
        <p className="text-[#a1a1a1]   md:mt-16 mt-12 xl:max-w-md leading-6 tracking-wide [word-spacing:2px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Review;
