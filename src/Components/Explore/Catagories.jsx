import { catagories } from "../../utils/constant";
import { Link } from "react-router-dom";
import { animateIn, fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";

const Catagories = () => {
  return (
    <motion.ul
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 1,
            delayChildren: 1,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      // viewport={{ once: true }}
    >
      {catagories.map((catag, i) => (
        <motion.li
          // variants={fadeIn("up", "spring", (i + 1) * 0.15, 0.75)}
          variants={animateIn("100v", 0, "spring", 0.4, (i + 1) * 0.2, 0.75)}
          initial="hidden"
          whileInView="show"
          // viewport={{ once: true }}
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
