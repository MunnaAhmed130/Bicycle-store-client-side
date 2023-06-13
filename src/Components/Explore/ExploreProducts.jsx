import ExploreProduct from "./ExploreProduct";

const ExploreProducts = ({ tags, products }) => {
  const matchTags = (currentProd, tags) => {
    return tags.every((tag) => currentProd.includes(tag));
  };

  return (
    <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-5 ">
      {products
        .filter((prod) => matchTags(prod.tags, tags))
        .map((product) => (
          <ExploreProduct key={product.name} product={product} />
        ))}
    </div>
  );
};

export default ExploreProducts;
