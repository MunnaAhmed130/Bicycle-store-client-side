import { Link } from "react-router-dom";
import { allTags, catagories } from "../../utils/constant";
import ExploreTags from "./ExploreTags";
import PriceFilter from "./PriceFilter";
import "./ExploreSection.css";
import Rating from "../Rating/Rating";

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

const FeaturedItem = ({ product }) => {
  const { name, url, rating, price } = product;
  return (
    <li className="flex gap-4">
      <div className="">
        <img className="lg:max-w-[6rem] max-w-[7rem] " src={url} alt="" />
      </div>
      <div className="flex flex-col gap-0.5">
        <h3 className="lg:block hidden text-sm leading-none">
          {name.slice(0, 15)}...
        </h3>
        <h3 className="lg:hidden block text-sm leading-none">{name}</h3>

        <div className="text-red-500 text-sm h-5  flex items-center leading-none">
          <Rating
            count={rating}
            className="mr-0.5 text-xs  inline-block pb-0.5"
          />
          &nbsp;
          <span className="font-bold ">({rating})</span>
        </div>

        <p className="font-bold leading-none">${price.toLocaleString()}</p>
      </div>
    </li>
  );
};
const SideBar = ({ products, tags, setTags, setMinPrice, setMaxPrice }) => {
  return (
    <section id="sidebar" className="lg:w-3/12">
      <div className="flex flex-col gap-12 mb-20 ">
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

        <section>
          <h6 className="sidebar-title mb-5 ">Featured Items</h6>
          <ul className="flex flex-col gap-5">
            {products
              .filter((product) => product.rating == 5)
              .map((product) => (
                <FeaturedItem key={product.name} product={product} />
              ))}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default SideBar;
