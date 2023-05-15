import Banner from "../../Components/Home/Banner/Banner";
// import Products from "../Products/Products";
import Reviews from "../../Components/Home/Reviews/Reviews";
import Footer from "../../Components/Shared/Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Banner />
      {/* <Products /> */}
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
