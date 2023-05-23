import Banner from "../../Components/Home/Banner/Banner";
import Products from "../../Components/Home/Products/Products";
import Reviews from "../../Components/Home/Reviews/Reviews";
import Footer from "../../Components/Shared/Footer/Footer";
import "./Home.css";

// export const loader = async () => {
//   let productsPromise = getProducts();
//   let reviewsPromise = getReviews();
//   return defer({ products: productsPromise, reviews: reviewsPromise });
// };

const Home = () => {
  return (
    <>
      <Banner />
      <Products />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
