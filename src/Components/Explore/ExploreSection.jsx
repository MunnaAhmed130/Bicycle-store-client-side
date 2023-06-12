import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { tags } from "../../utils/constant";
import ExploreProducts from "./ExploreProducts";
import ExploreTags from "./ExploreTags";

const ExploreSection = () => {
  const products = useLoaderData();
  const [cycleTag, setCycleTag] = useState("");

  const addTag = (tag) => {
    cycleTag === tag ? setCycleTag("") : setCycleTag(tag);
  };

  return (
    <section className="explore py-10 bg-gradient-to-b from-[var(--bg-dark)] from-1% via-[var(--bg-gray)] via-50% to-[var(--bg-dark)] md:px-10 px-5 min-h-screen">
      <p className="section-sub-heading">Discover the world of Cycling</p>

      <h2 className="section-heading"> Our Bicycle Collection</h2>

      <div className="flex lg:flex-row flex-col max-w-7xl mx-auto ">
        <div className="lg:w-3/12 mb-20">
          <div>catagory</div>
          <div>
            <p className="mb-1">Tags</p>
            <ExploreTags tags={tags} addTag={addTag} cycleTag={cycleTag} />
          </div>
        </div>

        <div className="lg:w-3/4 mb-20">
          {products.length ? (
            <ExploreProducts cycleTag={cycleTag} products={products} />
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
