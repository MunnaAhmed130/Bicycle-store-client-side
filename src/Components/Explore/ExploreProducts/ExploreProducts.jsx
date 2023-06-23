import ExploreProduct from "./ExploreProduct";
import { AnimatePresence } from "framer-motion";

const ExploreProducts = ({ tags, products, minPrice, maxPrice }) => {
  const matchTags = (currentProd, tags) => {
    return tags.every((tag) => currentProd.includes(tag));
  };

  return (
    <section className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 ">
      <AnimatePresence>
        {products
          .filter((prod) => matchTags(prod.tags, tags))
          .map(
            (product) =>
              product.price < maxPrice &&
              product.price >= minPrice && (
                <ExploreProduct key={product.name} product={product} />
              )
          )}
      </AnimatePresence>
    </section>
  );
};

export default ExploreProducts;
