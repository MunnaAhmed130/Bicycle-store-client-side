import { useEffect, useState } from "react";
import Review from "./Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/reviews/limit?number=3")
      // fetch("https://bicycle-store-server-side.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="  bg-[#1d1d1d] lg:px-20 md:px-10 px-5 py-20">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center">
          <h2 className="uppercase md:text-5xl text-xl font-semibold text-white">
            Some Valuable Opinions!
          </h2>
          <h3 className="py-2 text-2xl">Reviews</h3>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-8">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
