import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Footer from "../../Components/Shared/Footer/Footer";
import "./Login.css";
import AuthForm from "../../Components/Athentication/AuthForm";

const Login = () => {
  const { user, error, signInWithGoogle, loginWithEmail, loading } = useAuth();
  const history = useNavigate();
  const location = useLocation();

  const onSubmit = (data) => {
    // console.log(data);
    loginWithEmail(data.email, data.password, location, history);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <>
      <section className="bg-gradient-to-b from-[var(--bg-gray)] from-80% to-[var(--bg-dark)] py-40">
        {/* <Header /> */}
        <div className=" text-center">
          <h2 className="text-5xl font-bold uppercase">Please Login</h2>

          <AuthForm onSubmit={onSubmit} />

          {loading && (
            <div>
              Loading... <br />
            </div>
          )}

          {user?.email && <p>This is a success alert — check it out!</p>}

          {error && <p>{error}</p>}

          <button onClick={handleGoogleSignIn}>Google sign In</button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
