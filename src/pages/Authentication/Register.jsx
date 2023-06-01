import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Footer from "../../Components/Shared/Footer/Footer";
import "./Register.css";
import AuthForm from "../../Components/Athentication/AuthForm";

const Register = () => {
  const { user, error, loading, registerWithEmail } = useAuth();

  const history = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    if (data.password !== data.password2) {
      alert("your password did not match");
      return;
    }
    registerWithEmail(data.email, data.password, data.name, history);
    console.log(user);
  };

  return (
    <>
      <section className="bg-gradient-to-b from-[var(--bg-gray)] from-80% to-[var(--bg-dark)] py-40">
        <h2 className="register-heading text-center">Please Register</h2>

        {!loading && <AuthForm onSubmit={onSubmit} />}
        {/* // <form
          //   className="register-form text-center"
          //   onSubmit={handleSubmit(onSubmit)}
          // >
          //   <input
          //     {...register("name", { required: true })}
          //     placeholder="Your name"
          //     required="required"
          //   />{" "}
          //   <br />
          //   <input
          //     {...register("email", { required: true })}
          //     placeholder="Your email"
          //     required="required"
          //   />{" "}
          //   <br />
          //   <input
          //     type="password"
          //     {...register("password", { required: true })}
          //     placeholder="Your password"
          //     required="required"
          //   />{" "}
          //   <br />
          //   <input
          //     type="password"
          //     {...register("password2", { required: true })}
          //     placeholder="Confirm your password"
          //     required="required"
          //   />
          //   <br />
          //   <Link to="/login">Already Registered? Login</Link> <br />
          //   <button className="mb-3" type="submit">
          //     Register
          //   </button>
          //   {error && <p>{error}</p>}
          // </form> */}

        {loading && (
          <div className="circle">
            <p>Loading ...</p>
          </div>
        )}

        {user?.email && (
          <div className="circle">
            <p>This is a success alert — check it out!</p>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Register;
