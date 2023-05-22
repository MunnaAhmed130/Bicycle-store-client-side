import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import NavList from "./NavList";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  // console.log(toggle);

  return (
    <nav className="w-full relative p-section text-center flex-center h-[--navbar-height]  top-0 z-20 transition-all">
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
            className="text-3xl text-slate-400"
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
              }  sm:w-[calc(100%_-_160px)] w-[calc(100%_-_50px)] right-0 rounded-lg transition-all`}
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
