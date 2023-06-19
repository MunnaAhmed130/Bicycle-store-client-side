import { useEffect, useState } from "react";
import Review from "./Review";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../utils/motion";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:4000/reviews/limit?number=3")
    fetch("fakeReview.json")
      // fetch("https://bicycle-store-server-side.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section
      className={`bg-gradient-to-b from-[#1a1919] from-80% to-[black]  md:px-10 px-5 xl:py-40 py-36  `}
    >
      <div className="max-w-7xl mx-auto">
        <motion.p
          variants={textVariant(40, 0.25, 0.5)}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
          className="section-sub-heading"
        >
          Testimonials
        </motion.p>

        <motion.h2
          variants={textVariant(20, 0.25, 0.5)}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
          className="section-heading"
        >
          Trusted Opinions
        </motion.h2>

        <motion.div
          variants={fadeIn("down", "spring", 0.2, 0.75)}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10  py-5 md:max-w-full max-w-xl mx-auto "
        >
          {reviews.map((review, i) => (
            <Review key={review._id} review={review} i={i}></Review>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
