import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import AuthForm from "./AuthForm";

const Register = () => {
  const { user, loading, registerWithEmail } = useAuth();

  const history = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    if (data.password !== data.confirmPassword) {
      alert("your password did not match");
      return;
    }
    registerWithEmail(data.email, data.password, data.name, history);
    console.log(user);
  };

  return (
    <section className="bg-gradient-to-b from-[var(--bg-gray)] from-80% to-[var(--bg-dark)] -mt-[--navbar-height]  py-40 text-center">
      <h2 className="register-heading ">Please Register</h2>

      {!loading && <AuthForm onSubmit={onSubmit} />}

      {loading && (
        <div className="">
          <p>Loading ...</p>
        </div>
      )}

      {user?.email && (
        <div className="">
          <p>This is a success alert — check it out!</p>
        </div>
      )}
    </section>
  );
};

export default Register;
