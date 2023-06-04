import StarRating from "../../Rating/StarRating";
import { BsQuote } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

const Review = ({ review, i }) => {
  const { name, url, description, rating, profession } = review;

  return (
    <div className="flex flex-col gap-3 last:xl:flex last:sm:hidden ">
      <div className="flex gap-5 items-center">
        <img
          className="[--box:3.5rem] w-[var(--box)] h-[var(--box)] object-cover rounded-full"
          // referrerPolicy="no-referrer"
          src={url}
          alt=""
        />

        <div className="flex flex-col ">
          <span className=" md:text-lg text-[17px] capitalize font-semibold leading-none text-[white]/95  ">
            {name}
          </span>

          <p className="text-[rgba(255,255,255,0.75)]">{profession}</p>
          <StarRating
            count={rating}
            className="mx-[2px] text-sm text-red-600"
          />
        </div>
      </div>

      {/* <motion.div
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
      </motion.div> */}

      <motion.div
        variants={fadeIn("up", "spring", 0.4, (i + 1) * 0.5)}
        initial="hidden"
        whileInView="show"
        className="relative"
      >
        <BsQuote className=" absolute   text-7xl text-[#ffffff50] -left-3 top-0 leading-3" />
        <p className="text-[rgba(255,255,255,0.75)] xl:text-base text-[15px] mt-16 ">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default Review;
