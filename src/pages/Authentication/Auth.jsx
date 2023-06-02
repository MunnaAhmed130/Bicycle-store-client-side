import { useLocation } from "react-router-dom";
import Login from "../../Components/Athentication/Login";
import Register from "../../Components/Athentication/Register";
import Footer from "../../Components/Shared/Footer/Footer";
import "./Auth.css";

const Auth = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <>
      {path.includes("login") && <Login />}
      {path.includes("register") && <Register />}
      <Footer />
    </>
  );
};

export default Auth;
