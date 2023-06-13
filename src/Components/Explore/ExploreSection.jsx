import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { allTags } from "../../utils/constant";
import ExploreProducts from "./ExploreProducts";
import ExploreTags from "./ExploreTags";

const ExploreSection = () => {
  const products = useLoaderData();
  const [tags, setTags] = useState([]);

  return (
    <section className="explore py-10 bg-gradient-to-b from-[var(--bg-dark)] from-1% via-[var(--bg-gray)] via-50% to-[var(--bg-dark)] md:px-10 px-5 min-h-screen">
      <p className="section-sub-heading">Discover the world of Cycling</p>

      <h2 className="section-heading"> Our Bicycle Collection</h2>

      <div className="flex lg:flex-row flex-col max-w-7xl mx-auto ">
        <div className="lg:w-3/12 mb-20">
          <div>catagory</div>

          <div>
            <p className="mb-1">Tags</p>

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
