import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import NavList from "./NavList";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav
      className={` ${
        path.includes("explore") && `bg-[var(--bg-dark)]`
      } w-full relative flex-center h-[--navbar-height] md:px-10 px-5 top-0 z-50  `}
    >
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
        <Link
          to="/"
          className=" text-white lg:text-[1.75rem] text-2xl font-extrabold tracking-[2px] no-underline uppercase"
        >
          Bicycle zone
        </Link>

        {/* list of links  */}
        <ul className="hidden lg:flex flex-row items-center justify-center lg:gap-x-7 gap-x-4 text-white mb-0 transition-all">
          <NavList toggle={toggle} setToggle={setToggle} dropdown={false} />
        </ul>

        <div
          className={`${
            toggle && "flex "
          } lg:hidden relative flex-row items-center justify-end`}
        >
          <button
            onClick={() => setToggle(!toggle)}
            className="text-3xl text-slate-400 flex items-center"
          >
            {toggle ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>

          <div
            className={`${toggle ? "absolute" : "relative hidden"}  
            top-10 right-0 w-screen `}
          >
            {/* list of links  */}
            <div
              className={` ${
                toggle ? "nav-in absolute" : "animate-fadeOut relative"
              }  md:w-[calc(100%_-_95px)] w-[calc(100%_-_55px)] text-center right-0 rounded-lg transition-all bg-[#1f1f1f]`}
            >
              <ul
                className={`${toggle && "flex"}
                 flex-col items-center justify-end  bg-white/0 py-2 px-2 rounded-sm text-white`}
              >
                <NavList
                  toggle={toggle}
                  setToggle={setToggle}
                  dropdown={true}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
