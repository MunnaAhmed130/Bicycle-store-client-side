import { useLoaderData } from "react-router-dom";
import ExploreProducts from "./ExploreProducts";

const ExploreSection = () => {
  const products = useLoaderData();

  return (
    <section className="explore bg-[#2e2e2e] py-10">
      <h2 className="text-center uppercase text-5xl font-semibold text-white mb-10">
        Explore Our of Bicycle Collection
      </h2>

      {!products.length && (
        <div className="center">
          <p>no producs</p>
        </div>
      )}

      {products && (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 max-w-7xl mx-auto lg:px-20 md:px-10 px-5 py-4">
          {products.map((product) => (
            <ExploreProducts key={product._id} product={product} />
          ))}
        </div>
      )}

      {/* {!products.length || <Footer />} */}
    </section>
  );
};

export default ExploreSection;