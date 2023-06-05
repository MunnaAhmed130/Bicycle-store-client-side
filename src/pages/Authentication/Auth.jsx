import { useLocation, useNavigate } from "react-router-dom";
import Login from "../../Components/Athentication/Login";
import Register from "../../Components/Athentication/Register";
import Footer from "../../Components/Shared/Footer/Footer";
import "./Auth.css";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;

  return (
    <>
      {path.includes("login") && (
        <Login location={location} navigate={navigate} />
      )}
      {path.includes("register") && <Register navigate={navigate} />}
      <Footer />
    </>
  );
};

export default Auth;
