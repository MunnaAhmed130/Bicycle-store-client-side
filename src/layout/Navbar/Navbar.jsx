import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import NavList from "./NavList";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const location = useLocation();
  const path = location.pathname;
  // console.log(path);

  return (
    <nav
      className={` ${
        path.includes("explore") && `bg-[#2e2e2e]`
      } w-full relative lg:px-20 md:px-10 px-5 py-4 text-center flex-center h-[--navbar-height]   top-0 z-50  `}
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
              }  sm:w-[calc(100%_-_90px)] w-[calc(100%_-_50px)] right-0 rounded-lg transition-all bg-[#1f1f1f]`}
            >
              <ul
                className={`${
                  toggle ? "flex" : ""
                }  flex-col items-center justify-end  bg-white/0 py-2 px-2 rounded-sm text-white  `}
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
