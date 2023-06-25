import { useEffect } from "react";
import Product from "../../Components/Explore/Product/Product";
import Footer from "../../Components/Shared/Footer/Footer";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  // const { id } = useParams();

  // useEffect(() => {
  //   document.title = "";
  // }, []);

  console.log(document.title);
  return (
    <>
      <Product />
      <Footer />
    </>
  );
};

export default ProductInfo;
