import { useParams } from "react-router-dom";
import { products } from "../../../assets/data";

const Product = () => {
  const { id } = useParams();
  return (
    <div className="bg-black h-screen -mt-[var(--navbar-height)]">
      <div className="pt-[var(--navbar-height)]">
        {products.map(
          (product) =>
            product.name === id && <p key={product.name}>{product.name}</p>
        )}
      </div>
    </div>
  );
};

export default Product;
