import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { allTags, catagories } from "../../utils/constant";
import ExploreProducts from "./ExploreProducts";
import ExploreTags from "./ExploreTags";
import "./ExploreSection.css";
import PriceFilter from "./PriceFilter";

const ExploreSection = () => {
  const products = useLoaderData();
  const [tags, setTags] = useState([]);
  const [minPrice, setMinPrice] = useState(200);
  const [maxPrice, setMaxPrice] = useState(4000);

  // console.log(minPrice, maxPrice);
  return (
    <section className="explore py-10 bg-gradient-to-b from-[var(--bg-dark)] from-1% via-[#1a1919] via-50% to-[var(--bg-dark)] md:px-10 px-5 min-h-screen">
      <p className="section-sub-heading">Discover the world of Cycling</p>

      <h2 className="section-heading"> Our Bicycle Collection</h2>

      <div className="flex lg:flex-row flex-col max-w-7xl mx-auto ">
        {/* sidebar */}
        <div className="lg:w-3/12 mb-20 lg:mr-5 flex flex-col gap-5">
          <div className="">
            <h6 className="sidebar-title mb-2">catagories</h6>
            {catagories.map((catag) => (
              <ul key={crypto.randomUUID()} className="">
                <li className="py-2 flex justify-between uppercase text-sm text-slate-300 hover:text-slate-50 transition-color font-bold">
                  <Link to="/">{catag.title}</Link>
                  <span>({catag.count})</span>
                </li>
              </ul>
            ))}
          </div>

          <div>
            <h6 className="sidebar-title mb-2">Price Filter</h6>
            <PriceFilter
              min={200}
              max={4000}
              setMaxPrice={setMaxPrice}
              setMinPrice={setMinPrice}
            />
          </div>

          <div>
            <h6 className="sidebar-title mb-2 ">Tags</h6>
            <ExploreTags allTags={allTags} tags={tags} setTags={setTags} />
          </div>
        </div>

        <div className="lg:w-3/4 mb-20">
          {products.length ? (
            <ExploreProducts
              products={products}
              tags={tags}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
          ) : (
            <div className="text-center">
              <p>no products</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
