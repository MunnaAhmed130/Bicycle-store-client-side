import StarRating from "../../Rating/StarRating";

const Review = ({ review }) => {
  const { name, url, profession, description, rating } = review;

  return (
    <div className="single-review p-5">
      <div className="flex flex-col gap-3">
        <div className="flex gap-5 items-center">
          <img
            className="[--box:3.5rem] w-[var(--box)] h-[var(--box)] object-cover rounded-full"
            src={url}
            alt=""
          />
          <div className="flex flex-col gap-1">
            <span className=" text-lg capitalize font-semibold leading-none">
              {name}
            </span>
            <span className="text-sm leading-none">{profession}</span>
            {/* <span className=""> */}
            <StarRating
              count={rating}
              className="mx-[2px] text-lg"
              // emptyColor="white"
              // outlineColor="red"
            />
            {/* </span> */}
          </div>
        </div>
        {/* <Rating name="read-only" value={value} readOnly /> */}
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default Review;
