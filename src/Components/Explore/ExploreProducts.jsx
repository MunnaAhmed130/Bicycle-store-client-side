import ExploreProduct from "./ExploreProduct";

const ExploreProducts = ({ cycleTag, products }) => {
  return (
    <>
      {cycleTag ? (
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-5 ">
          {products.map((product) =>
            product.tags.map(
              (tag) =>
                tag === cycleTag && (
                  <ExploreProduct key={product.name} product={product} />
                )
            )
          )}
        </div>
      ) : (
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-5 ">
          {products.map((product) => (
            <ExploreProduct key={product.name} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default ExploreProducts;
