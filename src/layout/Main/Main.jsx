// import Header from "../../Components/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
