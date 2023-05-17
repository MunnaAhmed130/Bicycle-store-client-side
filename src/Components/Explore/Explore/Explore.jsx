import { useEffect, useState } from "react";
// import { Container, Row, Spinner } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import ExploreProducts from "../ExploreProducts/ExploreProducts";
import "./Explore.css";

const Explore = () => {
  const { loading } = useAuth();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log(products);

  return (
    <div className="explore">
      {/* <Header /> */}
      <h2 className="text-center mt-5 mb-4">
        Explore Our New World of Bicycle Collection
      </h2>
      {!products.length && (
        <div className="center">
          <p>no producs</p>
        </div>
      )}
      {!loading && (
        <div>
          <div className="w-100 m-0 ">
            {products.map((product) => (
              <ExploreProducts
                key={product._id}
                product={product}
              ></ExploreProducts>
            ))}
          </div>
        </div>
      )}

      {!products.length || <Footer />}
    </div>
  );
};

export default Explore;
