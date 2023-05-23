import Rating from "../../Rating/Rating";

const Review = ({ review }) => {
  const { name, url, profession, description, rating } = review;
  //   const [value, setValue] = React.useState(rating);
  // console.log(rating);
  return (
    <div className="single-review p-5">
      <div className="flex flex-col gap-3">
        <div className="flex gap-5">
          <img
            className="[--box:3.5rem] w-[var(--box)] h-[var(--box)] object-cover rounded-full"
            src={url}
            alt=""
          />
          <div className="flex flex-col">
            <span className=" text-lg capitalize font-semibold">{name}</span>
            <span className="text-sm">{profession}</span>
            <span className="">
              <Rating count={rating} />
            </span>
          </div>
        </div>
        {/* <Rating name="read-only" value={value} readOnly /> */}
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default Review;
