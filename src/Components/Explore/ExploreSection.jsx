import { useLoaderData } from "react-router-dom";
import ExploreProducts from "./ExploreProducts";
import { tags } from "../../utils/constant";
import { useState } from "react";

const ExploreSection = () => {
  const products = useLoaderData();
  const [cycleTag, setCycleTag] = useState("");
  // const products = [];

  const addTag = (tag) => {
    cycleTag === tag ? setCycleTag("") : setCycleTag(tag);
  };
  console.log(cycleTag);
  products
    .filter((product) => product.tags === cycleTag)
    .map((product) => console.log(product.name));
  return (
    <section className="explore py-10 bg-gradient-to-b from-[var(--bg-dark)] from-1% via-[var(--bg-gray)] via-50% to-[var(--bg-dark)] md:px-10 px-5">
      <p className="section-sub-heading">Discover the world of Cycling</p>

      <h2 className="section-heading"> Our Bicycle Collection</h2>

      <div className="flex flex-row max-w-7xl mx-auto">
        <div className="w-3/12">
          <div>catagory</div>
          <div>
            <p>Tags</p>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => addTag(tag)}
                className="py-1 px-2 border border-solid border-gray-400 m-1"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="w-3/4">
          {products.length ? (
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-5 ">
              {products.map((product) => (
                <ExploreProducts key={product.name} product={product} />
              ))}
            </div>
          ) : (
            <div className="center">
              <p>no producs</p>
            </div>
          )}
        </div>
      </div>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-5 ">
        {products
          .filter((product) => product.tags === cycleTag)
          .map((product) => (
            <ExploreProducts key={product.name} product={product} />
          ))}
      </div>
    </section>
  );
};

export default ExploreSection;
