import { animateIn } from "../../utils/motion";
import ExploreProduct from "./ExploreProduct";
import { motion, AnimatePresence } from "framer-motion";

const ExploreProducts = ({ tags, products, minPrice, maxPrice }) => {
  const matchTags = (currentProd, tags) => {
    return tags.every((tag) => currentProd.includes(tag));
  };

  return (
    <motion.section
      variants={animateIn(0, 0, "", 0, 0.25, 0.75)}
      initial="hidden"
      whileInView="show"
      className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 "
    >
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
    </motion.section>
  );
};

export default ExploreProducts;
