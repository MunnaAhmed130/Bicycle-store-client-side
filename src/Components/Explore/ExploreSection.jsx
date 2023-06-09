import { useLoaderData } from "react-router-dom";
import ExploreProducts from "./ExploreProducts";

const ExploreSection = () => {
  const products = useLoaderData();

  return (
    <section className="explore py-10 bg-gradient-to-b from-[var(--bg-dark)] from-1% via-[var(--bg-gray)] via-50% to-[var(--bg-dark)] md:px-10 px-5">
      <p className="section-sub-heading">Discover the world of Cycling</p>
      <h2 className="section-heading"> Our Bicycle Collection</h2>

      {!products.length && (
        <div className="center">
          <p>no producs</p>
        </div>
      )}
      <div></div>
      {products && (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 max-w-7xl mx-auto">
          {products.map((product) => (
            <ExploreProducts key={product._id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ExploreSection;
