import StarRating from "../../Rating/StarRating";

const Review = ({ review }) => {
  const { name, url, profession, description, rating } = review;

  return (
    <div className=" rounded-sm p-5 bg-[#332f2f] transition-all">
      <div className="flex flex-col gap-3">
        <div className="flex gap-5 items-center">
          <img
            className="[--box:3.5rem] w-[var(--box)] h-[var(--box)] object-cover rounded-full"
            referrerPolicy="no-referrer"
            src={url}
            alt=""
          />
          <div className="flex flex-col gap-1">
            <span className=" md:text-lg text-[17px] capitalize font-semibold leading-none text-[white]/95">
              {name}
            </span>
            <span className="text-sm leading-none">{profession}</span>
            {/* <span className=""> */}
            <StarRating
              count={rating}
              className="mx-[2px] text-base text-[#faab34]"
            />
            {/* </span> */}
          </div>
        </div>
        {/* <Rating name="read-only" value={value} readOnly /> */}
        <p className="text-[#dadada] text-[15px]">{description}</p>
      </div>
    </div>
  );
};

export default Review;
