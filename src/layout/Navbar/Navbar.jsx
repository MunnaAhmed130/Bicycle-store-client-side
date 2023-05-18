import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import NavList from "./NavList";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full relative  sm:px-20 px-5 py-4 text-center h-20  top-0 z-20">
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
        <Link
          to="/"
          className=" text-white lg:text-[1.75rem] text-2xl font-bold no-underline uppercase"
        >
          Bicycle zone
        </Link>

        {/* list of links  */}
        <ul className="hidden md:flex flex-row items-center justify-center gap-x-10 text-white mb-0">
          <NavList toggle={toggle} setToggle={setToggle} />
        </ul>

        <div className="md:hidden relative flex flex-row items-center justify-end">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-3xl text-slate-400"
          >
            {toggle ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>

          <div
            className={`${toggle ? "absolute" : "hidden"}  
            top-10 `}
          >
            {/* list of links  */}
            <ul className="flex flex-col items-center justify-end gap-2 bg-white/10 py-1 px-2 rounded-sm text-white ">
              <NavList toggle={toggle} setToggle={setToggle} />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
