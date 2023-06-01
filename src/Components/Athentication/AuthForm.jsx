import { Link, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";

const AuthForm = ({ onSubmit }) => {
  const { error } = useAuth();

  const location = useLocation();
  const path = location.pathname;

  const { register, handleSubmit } = useForm();

  return (
    <form
      className="login-form register-form text-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      {path.includes("register") && (
        <>
          <input
            {...register("name", { required: true })}
            placeholder="Your name"
            // required="required"
          />
          <br />
        </>
      )}
      {path.includes("register") && (
        <>
          <input
            type="password"
            {...register("confirmPassword", { required: true })}
            placeholder="Confirm your password"
            // required="required"
          />
          <br />
        </>
      )}
      <input
        {...register("email", { required: true })}
        placeholder="Your Email"
        // required="required"
      />
      <br />
      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Your Password"
        // required="required"
      />
      <br />
      {path.includes("login") && (
        <>
          <Link to="/register">New User? Please Register</Link> <br />
          <button className="login-btn m-3" type="submit">
            Login
          </button>
        </>
      )}
      {path.includes("register") && (
        <>
          <Link to="/login">Already Registered? Login</Link> <br />
          <button className="mb-3" type="submit">
            Register
          </button>
          {error && <p>{error}</p>}
        </>
      )}
    </form>
  );
};

export default AuthForm;
