import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      // variant={navbar ? "light" : "dark"}
      variant="dark"
      // className={navbar ? "navbar active" : "navbar"}
      className="navbar"
    >
      <Container>
        <Navbar.Brand href="#home">Bicycle Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="">
          <Nav className="ms-auto links">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "active link d-inline-block py-2 px-0 px-lg-2 text-decoration-none"
                  : "link d-inline-block  py-2 px-0 px-lg-2 text-decoration-none"
              }
              // className="link d-inline-block text-white  py-2 px-0 px-lg-2 text-decoration-none"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className="link d-inline-block text-white py-2 px-0 px-lg-2  text-decoration-none "
              to="/explore"
            >
              Explore
            </NavLink>
            <NavLink
              className="link d-inline-block text-white py-2 px-0 px-lg-2 text-decoration-none"
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            {user.displayName && (
              <p className="link d-inline-block text-white py-2 px-0 px-lg-2 my-0 text-decoration-none">
                {user.displayName}
              </p>
            )}

            {user.photoURL ? (
              <img className="profile-pic" src={user.photoURL} alt="dd" />
            ) : (
              <Link
                className="link d-inline-block text-white py-2 px-0 px-lg-2  text-decoration-none"
                to="/login"
              >
                Login
              </Link>
            )}

            {/* {user.email ? (
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
            )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
