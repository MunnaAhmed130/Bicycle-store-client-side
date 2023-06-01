import { useLocation } from "react-router-dom";
import Footer from "../../Components/Shared/Footer/Footer";
import Login from "./Login";
import Register from "./Register";
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
