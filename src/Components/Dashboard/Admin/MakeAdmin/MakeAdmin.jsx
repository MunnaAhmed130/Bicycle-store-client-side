import axios from "axios";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    axios.put("http://localhost:4000/users/admin", user).then((res) => {
      if (res.data.modifiedCount) {
        console.log(res.data);
        setEmail("");
        setSuccess(true);
      }
    });
    e.preventDefault();
  };
  return (
    <Container className="text-center">
      <h2 className="admin-heading">Make a New Admin</h2>
      <form className="admin-form" onSubmit={handleAdminSubmit}>
        <input
          label="Email"
          placeholder="Enter admin email"
          onBlur={handleOnBlur}
        />{" "}
        <br />
        <button type="submit">Make Admin</button>
        {success && (
          <p className="alert">Your have successfully made a new admin</p>
        )}
      </form>
    </Container>
  );
};

export default MakeAdmin;
