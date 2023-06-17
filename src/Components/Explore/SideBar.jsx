import { allTags } from "../../utils/constant";
import ExploreTags from "./ExploreTags";
import PriceFilter from "./PriceFilter";
import Catagories from "./Catagories";
import FeaturedItem from "./FeaturedItem";
import "./ExploreSection.css";

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
