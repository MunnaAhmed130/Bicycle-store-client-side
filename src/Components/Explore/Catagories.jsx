import { catagories } from "../../utils/constant";
import { Link } from "react-router-dom";
import { fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";

const Catagories = () => {
  return (
    <ul>
      {catagories.map((catag, i) => (
        <motion.li
          variants={fadeIn("up", "spring", (i + 1) * 0.15, 0.75)}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          key={catag.title}
          className="py-2 flex justify-between uppercase text-sm text-slate-300 hover:text-slate-50 transition-color font-bold border-b border-solid border-red-500/80"
        >
          <Link to="/explore">{catag.title}</Link>
          <span>({catag.count})</span>
        </motion.li>
      ))}
    </ul>
  );
};

export default Catagories;
