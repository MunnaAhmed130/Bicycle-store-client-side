import { Navbar } from "react-bootstrap";
import Header from "../../Components/Shared/Header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <Outlet />
    </>
  );
};

export default Main;
