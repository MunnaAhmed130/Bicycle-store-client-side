import { useEffect, useState } from "react";
import Review from "./Review";
import styles from "./Reviews.module.css";
import { motion } from "framer-motion";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/reviews/limit?number=3")
      // fetch("https://bicycle-store-server-side.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const sectionVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0,
        delayChildren: 0,
      },
    },
  };

  return (
    <motion.section
      variants={sectionVariant}
      initial="hidden"
      animate="visible"
      className={`${styles.bgReviews} lg:px-20 md:px-10 px-5 py-10`}
    >
      <div className="max-w-7xl mx-auto ">
        <div className="text-center">
          <p className="text-white text-center  pb-2 font-bold uppercase">
            Testimonials
          </p>

          <h2 className="text-center lg:text-6xl md:text-5xl sm:text-4xl text-3xl uppercase font-bold text-white tracking-wide ">
            Customers Opinions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 xl:my-24 my-16">
          {reviews.map((review, i) => (
            <Review key={review._id} review={review} i={i}></Review>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Reviews;
