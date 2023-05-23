import { useEffect, useState } from "react";
import { BsStarFill, BsStar } from "react-icons/bs";
import "./Rating.css";

const Rating = ({ count, emptyColor, className, outlineColor }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setRating(count);
  }, [count]);

  const fill = ((rating - Math.floor(rating)).toFixed(1) * 100).toString();

  const half = {
    width: `${fill}%`,
    height: "100%",
  };

  const empty = {
    color: `${emptyColor} `,
    // zIndex: "20",
  };

  const outline = {
    color: `${outlineColor}`,
    zIndex: "30",
  };

  return (
    <div className="rating--star">
      {[...Array(5)].map((star, index) => {
        let number = index + 0.1;
        return (
          // star button here
          <span
            // type="button"
            key={index}
            className={className ? `${className} star ` : "star "}
          >
            {rating >= index + 1 ? (
              <span>
                {/* full star  */}
                {outlineColor ? (
                  <span className=" parent--star">
                    <BsStarFill className="" />
                    <BsStar
                      className={"star-outline"}
                      style={outlineColor && outline}
                    />
                  </span>
                ) : (
                  // here
                  <BsStarFill className=" " />
                )}
              </span>
            ) : rating >= number ? (
              <span className="parent--star">
                {/* <BsStarFill className="star--empty" /> */}
                {/* half star  */}
                <span className="half" style={half}>
                  <BsStarFill className="half--star" />
                </span>
                {/* empty star  */}
                {emptyColor ? (
                  <BsStarFill className="star--empty" style={empty} />
                ) : (
                  <BsStarFill
                    className="star--empty"
                    style={{ color: "transparent" }}
                  />
                )}
                {/* star outline  */}
                <BsStar
                  className={`${emptyColor ? emptyColor : ""} half-outline `}
                  style={outlineColor && outline}
                />
              </span>
            ) : (
              // empty star with or without background color
              <span>
                {emptyColor ? (
                  <span className="parent--star">
                    <BsStarFill
                      className="dummy--star"
                      style={{
                        color: ` ${emptyColor}`,
                      }}
                    />
                    <BsStar
                      className="star-outline"
                      style={outlineColor && outline}
                    />
                  </span>
                ) : (
                  <span className="">
                    <BsStar style={outlineColor && outline} />
                  </span>
                )}
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
