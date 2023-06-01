import { motion } from "framer-motion";
import StarRating from "../../Rating/StarRating";
import styles from "./Reviews.module.css";
import { fadeIn } from "../../../utils/motion";

const Review = ({ review, i }) => {
  const { name, url, description, rating } = review;

  return (
    <div className="rounded-sm transition-all">
      <div className="flex flex-col gap-3">
        <div className="flex gap-5 items-center">
          {/* <motion></motion> */}
          <motion.img
            variants={fadeIn("top", "spring", 0.3, (i + 1) * 0.3)}
            initial="hidden"
            whileInView="show"
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
          variants={fadeIn("up", "spring", 0.4, (i + 1) * 0.5)}
          initial="hidden"
          whileInView="show"
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
