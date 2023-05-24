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
    <div className="inline-block leading-none">
      {[...Array(5)].map((_, index) => {
        let number = index + 0.1;
        return (
          <span
            key={index}
            className={`${
              className && className
            }  bg-transparent cursor-pointer leading-none`}
          >
            {rating >= index + 1 ? (
              <span>
                {/* full star  */}
                {outlineColor ? (
                  <span className="relative">
                    <BsStarFill />
                    <BsStar
                      className="absolute bottom-0 left-0 z-10"
                      style={outlineColor && outline}
                    />
                  </span>
                ) : (
                  // here
                  <BsStarFill className=" " />
                )}
              </span>
            ) : rating >= number ? (
              <span className="relative leading-none inline-block">
                {/* half star = full star - empty */}
                <span
                  className=" absolute left-0  z-20 overflow-hidden leading-none inline-block"
                  style={half}
                >
                  {/* full star  */}
                  <BsStarFill className="" />
                </span>
                {/* <BsStarFill className="absolute bottom-0 leading-none" /> */}

                {/* empty star  */}
                {emptyColor ? (
                  <BsStarFill className="" style={empty} />
                ) : (
                  <BsStarFill className="" style={{ color: "transparent" }} />
                )}
                {/* star outline  */}
                <BsStar
                  className={`${
                    emptyColor ? emptyColor : ""
                  } absolute bottom-0 left-0 `}
                  style={outlineColor && outline}
                />
              </span>
            ) : (
              // empty star with or without background color
              <span>
                {emptyColor ? (
                  <span className="relative">
                    <BsStarFill
                      className=""
                      style={{
                        color: ` ${emptyColor}`,
                      }}
                    />
                    <BsStar
                      className=" absolute bottom-0 left-0"
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
