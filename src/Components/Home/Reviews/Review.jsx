import StarRating from "../../Rating/StarRating";
import { BsQuote } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

const Review = ({ review, i }) => {
  const { name, url, description, rating, profession } = review;

  return (
    <div className="flex flex-col gap-3 last:xl:flex last:sm:hidden ">
      <div className="flex gap-5 items-center justify-start">
        <img
          className="[--box:3.5rem] w-[var(--box)] h-[var(--box)] object-cover rounded-full"
          // referrerPolicy="no-referrer"
          src={url}
          alt=""
        />

        <div className="flex flex-col gap-1.5">
          <p className=" md:text-lg md:leading-none text-[17px] capitalize font-semibold text-[white]/95 leading-[10px] ">
            {name}
          </p>

          <p className="text-[rgba(255,255,255,0.75)] text-sm leading-none">
            {profession}
          </p>

          <StarRating
            count={rating}
            className="mx-[2px] text-sm text-red-600 "
          />
        </div>
      </div>

      <motion.div
        variants={fadeIn("up", "spring", 0.4, (i + 1) * 0.5)}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="relative "
      >
        <BsQuote className=" absolute md:text-7xl text-5xl text-[#ffffff50] -left-3 top-0 leading-3 transition-all " />
        <p className="text-[#a1a1a1]  xl:text-base text-sm  md:mt-16 mt-12 xl:max-w-md leading-6 tracking-wide [word-spacing:2px]">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default Review;
