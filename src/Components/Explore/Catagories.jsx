import { catagories } from "../../utils/constant";
import { Link } from "react-router-dom";
import { animateIn } from "../../utils/motion";
import { motion } from "framer-motion";

const Catagories = () => {
  return (
    <motion.ul
      variants={{
        hidden: {
          opacity: 0,
          y: -10,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.4,
            when: "beforeChildren",
          },
        },
      }}
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
    >
      {catagories.map((catag, i) => (
        <motion.li
          variants={animateIn(50, 0, "spring", 0.4, i * 0.1, 0.75)}
          key={catag.title}
          className="py-2 flex justify-between uppercase text-sm text-slate-300 hover:text-slate-50 transition-color font-bold border-b border-solid border-red-500/80"
        >
          <Link to="/explore">{catag.title}</Link>
          <span>({catag.count})</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default Catagories;
