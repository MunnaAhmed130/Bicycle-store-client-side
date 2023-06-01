import { useEffect, useState } from "react";
import Review from "./Review";
import styles from "./Reviews.module.css";
import { motion } from "framer-motion";
import { textVariant } from "../../../utils/motion";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/reviews/limit?number=3")
      // fetch("fakeReview.json")
      // fetch("https://bicycle-store-server-side.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section
      className={`${styles.bgReviews}  gray-to-dark lg:px-20 md:px-10 px-5 py-10`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          variants={textVariant(40, 0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          className="text-white text-center  pb-2 font-bold uppercase"
        >
          Testimonials
        </motion.p>

        <motion.h2
          variants={textVariant(20, 0.25, 0.5)}
          initial="hidden"
          whileInView="show"
          className="text-center lg:text-6xl md:text-5xl sm:text-4xl text-3xl uppercase font-bold text-white tracking-wide "
        >
          Customers Opinions
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 xl:my-24 my-16">
          {reviews.map((review, i) => (
            <Review key={review._id} review={review} i={i}></Review>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
