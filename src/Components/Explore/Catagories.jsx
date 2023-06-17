import { catagories } from "../../utils/constant";
import { Link } from "react-router-dom";

const Catagories = () => {
  return (
    <ul>
      {catagories.map((catag) => (
        <li
          key={catag.title}
          className="py-2 flex justify-between uppercase text-sm text-slate-300 hover:text-slate-50 transition-color font-bold border-b border-solid border-red-500/80"
        >
          <Link to="/explore">{catag.title}</Link>
          <span>({catag.count})</span>
        </li>
      ))}
    </ul>
  );
};

export default Catagories;
