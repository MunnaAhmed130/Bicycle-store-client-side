import { motion } from "framer-motion";
import StarRating from "../../Rating/StarRating";
import styles from "./Reviews.module.css";

const Review = ({ review, i }) => {
  const { name, url, description, rating } = review;

  const reviewVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 0.6,
        duration: (i + 1) * 0.5,
      },
    },
  };

  return (
    <div className="rounded-sm transition-all">
      <div className="flex flex-col gap-3">
        <div className="flex gap-5 items-center">
          <img
            className="[--box:3.5rem] w-[var(--box)] h-[var(--box)] object-cover rounded-full"
            referrerPolicy="no-referrer"
            src={url}
            alt=""
          />

          <div className="flex flex-col ">
            <span className=" md:text-lg text-[17px] capitalize font-semibold leading-none text-[white]/95  ">
              {name}
            </span>

            <StarRating
              count={rating}
              className="mx-[2px] text-sm text-[#faab34]"
            />
          </div>
        </div>

        <motion.div
          variants={reviewVariant}
          initial="hidden"
          whileInView="visible"
        >
          <div className="bg-[var(--review-card-bg)] px-5 py-4 relative mt-3 rounded ">
            <div className={`absolute top-[-10px] ${styles.triangle}`}></div>
            <p className="text-[#f3f3f3] xl:text-lg text-[15px]  ">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Review;
