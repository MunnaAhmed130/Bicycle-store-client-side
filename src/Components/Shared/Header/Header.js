import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, logOut } = useAuth();

  const changeBackground = () => {
    if (window.scrollY >= 64) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    // console.log(window.scrollY)
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      // fixed="top"
      // variant={navbar ? "light" : "dark"}
      variant="dark"
      className={navbar ? "navbar active" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="#home">Bicycle Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="">
          <Nav className="ms-auto links">
            <Nav.Link className="link" to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="link" to="/explore">
              Explore
            </Nav.Link>
            <Nav.Link className="link" to={`/dashboard/dashboard`}>
              Dashboard
            </Nav.Link>
            {user.displayName && (
              <Nav.Link className="link">{user.displayName}</Nav.Link>
            )}

            {user.photoURL && (
              <img className="profile-pic" src={user.photoURL} alt="dd" />
            )}

            {user.email ? (
              <button
                className="logOut-btn"
                variant="outlined"
                color="error"
                onClick={logOut}
              >
                Log out
              </button>
            ) : (
              <Nav.Link className="link" to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
