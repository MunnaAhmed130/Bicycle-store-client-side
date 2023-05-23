import React, { useEffect, useState } from "react";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import "./Rating.css";

const SetRating = ({ value, setValue, className, emptyStar }) => {
    const [rating, setRating] = useState(value || 0);
    const [hover, setHover] = useState(value || 0);

    useEffect(() => {
        setValue(rating);
    }, [rating, setValue]);

    // console.log(`rating: ${rating}, hover: ${hover}`);
    // const color = {
    //     color: "#d17e7b",
    // };
    // const condition = rating || hover;
    const condition = hover;

    return (
        <div className="set_rating--star">
            {[...Array(5)].map((star, index) => {
                let number = index + 0.5;
                return (
                    <button
                        type="button"
                        className={`${className} star-button`}
                        key={index}
                        onClick={() => setRating(hover)}
                        onMouseOver={(e) => {
                            const rect = e.target.getBoundingClientRect();
                            e.clientX - rect.left < 5
                                ? setHover(index + 0.5)
                                : setHover(index + 1);
                        }}
                        onMouseOut={() => setHover(rating)}
                        onMouseLeave={() => {
                            setHover(rating);
                        }}
                    >
                        {condition >= index + 1 ? (
                            <BsStarFill />
                        ) : condition >= number ? (
                            <BsStarHalf className={`  half-star`}></BsStarHalf>
                        ) : (
                            <BsStar />
                        )}
                    </button>
                );
            })}
        </div>
    );
};

export default SetRating;
