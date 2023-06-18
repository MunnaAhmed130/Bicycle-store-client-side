import ExploreProduct from "./ExploreProduct";
import { motion, AnimatePresence } from "framer-motion";

const ExploreProducts = ({ tags, products, minPrice, maxPrice }) => {
  const matchTags = (currentProd, tags) => {
    return tags.every((tag) => currentProd.includes(tag));
  };

  return (
    <motion.section
      // layout
      // animate={{ opacity: 1 }}
      // intital={{ opacity: 0 }}
      // exit={{ opacity: 0 }}
      className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 "
    >
      <AnimatePresence>
        {products
          .filter((prod) => matchTags(prod.tags, tags))
          .map(
            (product, i) =>
              product.price < maxPrice &&
              product.price >= minPrice && (
                <ExploreProduct key={product.name} product={product} i={i} />
              )
          )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ExploreProducts;
