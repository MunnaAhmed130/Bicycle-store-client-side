import ExploreProduct from "./ExploreProduct";

const ExploreProducts = ({ tags, products, minPrice, maxPrice }) => {
  const matchTags = (currentProd, tags) => {
    return tags.every((tag) => currentProd.includes(tag));
  };

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-5 ">
      {products
        .filter((prod) => matchTags(prod.tags, tags))
        .map(
          (product) =>
            product.price < maxPrice &&
            product.price >= minPrice && (
              <ExploreProduct key={product.name} product={product} />
            )
        )}
    </div>
  );
};

export default ExploreProducts;
