import { useEffect, useState } from "react";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import "./Rating.css";

const StarRating = ({ count, className }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setRating(count);
  }, [count]);

  return (
    <div className=" leading-none">
      {[...Array(5)].map((_, index) => {
        let number = index + 0.5;
        return (
          <span
            key={index}
            className={`${
              className && className
            }  bg-transparent cursor-pointer leading-none`}
          >
            {rating >= index + 1 ? (
              <BsStarFill />
            ) : rating >= number ? (
              <BsStarHalf />
            ) : (
              <BsStar />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
