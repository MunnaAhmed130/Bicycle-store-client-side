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
    <section className="  bg-[#222222] lg:px-20 lg:py-28  md:px-10 px-5 py-20">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center">
          <p className="text-white text-center  pb-2 font-bold uppercase">
            Testimonials
          </p>
          {/* <h3 className="py-2 text-2xl">Reviews</h3> */}
          <h2 className="text-center lg:text-6xl md:text-5xl text-4xl uppercase font-bold text-white tracking-wide ">
            Customers Opinions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 pt-8 my-16">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
