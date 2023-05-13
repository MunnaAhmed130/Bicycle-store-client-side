import React from "react";
import Banner from "../Banner/Banner";
// import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import Footer from "../../Shared/Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <Products /> */}
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
