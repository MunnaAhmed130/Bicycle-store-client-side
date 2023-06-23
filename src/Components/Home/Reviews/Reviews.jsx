import Review from "./Review";
import { motion } from "framer-motion";
import { animateIn } from "../../../utils/motion";
import { reviews } from "../../../assets/data";

const Reviews = () => {
  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:4000/reviews/limit?number=3")
  //     fetch("https://bicycle-store-server-side.vercel.app/reviews")
  //     .then((res) => res.json())
  //     .then((data) => setReviews(data));
  // }, []);

  return (
    <section
      className={`bg-gradient-to-b from-[#1a1919] from-80% to-[black]  md:px-10 sm:px-5 px-2.5 xl:py-40 py-36  `}
    >
      <motion.div
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="max-w-7xl mx-auto"
      >
        <motion.p
          variants={animateIn(0, 50, "spring", 0.4, 0.25, 0.75)}
          className="section-sub-heading"
        >
          Testimonials
        </motion.p>

        <motion.h2
          variants={animateIn(0, -20, "spring", 0.4, 0.25, 0.75)}
          className="section-heading"
        >
          Trusted Opinions
        </motion.h2>

        <motion.div
          variants={animateIn(0, -150, "spring", 0.4, 0.25, 0.75)}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10  py-5 sm:px-0 px-4 md:max-w-full max-w-xl mx-auto "
        >
          {reviews.map((review, i) => (
            <Review key={review._id} review={review} i={i} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Reviews;
