const Review = ({ review }) => {
  const { name, url, profession, description, rating } = review;
  //   const [value, setValue] = React.useState(rating);
  // console.log(value)
  return (
    <div>
      <div>
        <div className="single-review">
          <div className="col">
            <div className="reviewer">
              <h3>{name}</h3>
              <img
                className="[--box:3.5rem] w-[var(--box)] h-[var(--box)] object-cover rounded-full"
                src={url}
                alt=""
              />
              <br />
            </div>
            <h4>{profession}</h4>
            <br />
            {/* <Rating name="read-only" value={value} readOnly /> */}
            <br />
            <p className="">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
