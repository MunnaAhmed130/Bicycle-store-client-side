import useAuth from "../../Hooks/useAuth";
import AuthForm from "./AuthForm";

const Login = ({ location, navigate }) => {
  const { user, error, signInWithGoogle, loginWithEmail, loading } = useAuth();
  // const location = useLocation();
  // const navigate = useNavigate();

  const onSubmit = (data) => {
    loginWithEmail(data.email, data.password, location, navigate);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };

  return (
    <section className="bg-gradient -mt-[--navbar-height]  py-40">
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
  );
};

export default Login;
