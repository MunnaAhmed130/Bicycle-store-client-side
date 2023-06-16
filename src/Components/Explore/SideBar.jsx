import { Link } from "react-router-dom";
import { allTags, catagories } from "../../utils/constant";
import ExploreTags from "./ExploreTags";
import PriceFilter from "./PriceFilter";
import "./ExploreSection.css";

const Catagories = () => {
  return (
    <ul>
      {catagories.map((catag) => (
        <li
          key={crypto.randomUUID()}
          className="py-2 flex justify-between uppercase text-sm text-slate-300 hover:text-slate-50 transition-color font-bold"
        >
          <Link to="/explore">{catag.title}</Link>
          <span>({catag.count})</span>
        </li>
      ))}
    </ul>
  );
};

const SideBar = ({ tags, setTags, setMinPrice, setMaxPrice }) => {
  return (
    <div className="lg:w-3/12 mb-20 lg:mr-5 flex flex-col gap-5">
      <section>
        <h6 className="sidebar-title mb-2">catagories</h6>
        <Catagories />
      </section>

      <section>
        <h6 className="sidebar-title mb-2">Price Filter</h6>
        <PriceFilter
          min={200}
          max={4000}
          setMaxPrice={setMaxPrice}
          setMinPrice={setMinPrice}
        />
      </section>

      <section>
        <h6 className="sidebar-title mb-2 ">Tags</h6>
        <ExploreTags allTags={allTags} tags={tags} setTags={setTags} />
      </section>
    </div>
  );
};

export default SideBar;
