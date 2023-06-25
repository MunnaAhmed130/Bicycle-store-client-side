import { useParams } from "react-router-dom";
import { products } from "../../../assets/data";
import Footer from "../../Shared/Footer/Footer";

const Product = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="bg-black min-h-[75vh] -mt-[var(--navbar-height)]">
      <div className="pt-[var(--navbar-height)] h-full flex items-center justify-center">
        {products.map(
          (product) =>
            product.name === id && (
              <p
                key={product.name}
                className="text-center 
                "
              >
                {product.name}
              </p>
            )
        )}
      </div>
    </div>
  );
};

export default Product;
