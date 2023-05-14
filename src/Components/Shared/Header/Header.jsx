import { Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="">
      <Container className="position-relative">
        <Navbar.Brand>
          <Link
            to="/home"
            className="text-decoration-none text-white text-uppercase fw-semibold"
          >
            Bicycle Zone
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className="navbar-menu">
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
              className="link d-inline-block text-white pb-2 px-0 pt-lg-4  text-decoration-none "
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

            {/* {user.displayName && (
              <p className="link d-inline-block text-white py-2 px-0 px-lg-2 my-0 text-decoration-none">
                {user.displayName}
              </p>
            )} */}

            {user.email && (
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img
                  className="profile-pic mx-0 mx-lg-2"
                  src={user.photoURL}
                  alt="dd"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            {/* {user.email ? (
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img
                  className="profile-pic mx-0 mx-lg-2"
                  src={user.photoURL}
                  alt="dd"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <Link
                className="link d-inline-block text-white py-2 px-0 px-lg-2  text-decoration-none"
                to="/login"
              >
                Login
              </Link>
            )} */}

            {user.email ? (
              <button className="logOut-btn" color="error" onClick={logOut}>
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
