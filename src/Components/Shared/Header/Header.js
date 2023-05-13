import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";
import { Link } from "react-router-dom";

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
            <Link
              className="link d-inline-block  py-2 px-0 px-lg-2 text-decoration-none"
              to="/home"
            >
              Home
            </Link>
            <Link
              className="link d-inline-block  py-2 px-0 px-lg-2  text-decoration-none"
              to="/explore"
            >
              Explore
            </Link>
            <Link
              className="link d-inline-block py-2 px-0 px-lg-2 text-decoration-none"
              to="/dashboard"
            >
              Dashboard
            </Link>
            {user.displayName && (
              <Link className="link d-inline-block  py-2 px-0 px-lg-2  text-decoration-none">
                {user.displayName}
              </Link>
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
              <Link
                className="link d-inline-block  py-2 px-0 px-lg-2  text-decoration-none"
                to="/login"
              >
                Login
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
