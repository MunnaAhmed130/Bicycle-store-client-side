import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { allTags, catagories } from "../../utils/constant";
import ExploreProducts from "./ExploreProducts";
import ExploreTags from "./ExploreTags";

const ExploreSection = () => {
  const products = useLoaderData();
  const [tags, setTags] = useState([]);

  return (
    <section className="explore py-10 bg-gradient-to-b from-[var(--bg-dark)] from-1% via-[#1a1919] via-50% to-[var(--bg-dark)] md:px-10 px-5 min-h-screen">
      <p className="section-sub-heading">Discover the world of Cycling</p>

      <h2 className="section-heading"> Our Bicycle Collection</h2>

      <div className="flex lg:flex-row flex-col max-w-7xl mx-auto ">
        <div className="lg:w-3/12 mb-20 lg:mr-5 flex flex-col gap-5">
          <div className="">
            <h6 className="uppercase font-extrabold text-2xl">catagories</h6>
            {catagories.map((catag) => (
              <ul key={crypto.randomUUID()} className="">
                <li className="py-2 flex justify-between uppercase">
                  <Link to="/">{catag.title}</Link>
                  <span>({catag.count})</span>
                </li>
              </ul>
            ))}
          </div>
          <div>
            <h6 className="mb-1 uppercase font-bold text-xl">Tags</h6>

            <ExploreTags allTags={allTags} tags={tags} setTags={setTags} />
          </div>
        </div>

        <div className="lg:w-3/4 mb-20">
          {products.length ? (
            <ExploreProducts products={products} tags={tags} />
          ) : (
            <div className="text-center">
              <p>no producs</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
