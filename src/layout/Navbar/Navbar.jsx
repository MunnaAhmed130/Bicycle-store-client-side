import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { toggle, setToggle } = useState(false);

  return (
    <nav className="w-full relative  sm:px-20 px-5 py-4 text-center h-16  top-0 z-20">
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
        <Link
          to="/"
          className=" text-white lg:text-[1.75rem] text-2xl font-bold no-underline"
        >
          Munna
          {/* <span className="w-1.5 h-1.5  color-dot inline-block rounded-full bg-white" /> */}
        </Link>

        {/* list of links  */}
        <ul className="hidden md:flex flex-row  gap-10 text-white">
          <NavList toggle={toggle} setToggle={setToggle} />
        </ul>

        <div className="md:hidden relative flex flex-row items-center justify-end">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-3xl text-slate-400"
          >
            {/* {toggle ? <IoCloseOutline /> : <IoMenuOutline />} */}
          </button>

          <div className={`${toggle ? "absolute" : "hidden"}  top-10 `}>
            {/* list of links  */}
            <ul className="flex flex-col items-center justify-end gap-2 bg-white/0 py-1 px-2 rounded-sm">
              <NavList />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavList = ({ toggle, setToggle }) => {
  const navLinks = [
    {
      id: "/",
      title: "Home",
    },
    {
      id: "explore",
      title: "Explore",
    },
    {
      id: "dashboard",
      title: "Dashboard",
    },
  ];
  return (
    <>
      {navLinks.map((link) => (
        <li key={link.id}>
          <NavLink
            to={`${link.id}`}
            className={({ isActive }) =>
              isActive ? `text-white nav-link` : `text-gray-200 nav-link`
            }
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {link.title}
          </NavLink>
        </li>
      ))}
      {/* <li>
        <a
          href="https://drive.google.com/file/d/1RhVvtP6IrrtuftlTtwQZAvgmQVRizMcy/view?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
          className={`nav-link hover:text-slate-300 text-gray-400`}
        >
          Resume
        </a>
      </li> */}
    </>
  );
};
export default Navbar;
