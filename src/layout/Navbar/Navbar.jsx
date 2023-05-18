import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import NavList from "./NavList";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <nav className="w-full relative  sm:px-20 px-5 py-4 text-center flex-center h-20  top-0 z-20">
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
        <Link
          to="/"
          className=" text-white lg:text-[1.75rem] text-2xl font-extrabold tracking-[2px] no-underline uppercase"
        >
          Bicycle zone
        </Link>

        {/* list of links  */}
        <ul className="hidden md:flex flex-row items-center justify-center lg:gap-x-10 gap-x-6 text-white mb-0">
          <NavList toggle={toggle} setToggle={setToggle} dropdown={false} />
        </ul>

        <div
          className={`${
            toggle && "flex relative"
          } md:hidden  flex-row items-center justify-end`}
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
            {/* w-[calc(100%_-_96px)]  */}
            {/* list of links  */}
            <div
              className={` ${
                toggle ? "nav-in absolute" : "animate-fadeOut relative"
              }  sm:w-[calc(100%_-_160px)] w-[calc(100%_-_50px)] right-0 rounded-lg`}
            >
              <ul
                className={`${
                  toggle ? "flex" : ""
                }  flex-col items-center justify-end  bg-white/10 py-2 px-2 rounded-sm text-white  `}
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
