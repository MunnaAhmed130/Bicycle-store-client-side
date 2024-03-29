import { NavLink } from "react-router-dom";
import { navLinks } from "../../assets/constant";
import useAuth from "../../Hooks/useAuth";

const NavList = ({ toggle, setToggle, dropdown }) => {
  const { user, logOut } = useAuth();

  return (
    <>
      {navLinks.map((link) => (
        <li key={link.id} className={`${dropdown && `w-full`}`}>
          <NavLink
            to={`${link.id}`}
            className={({ isActive }) =>
              isActive
                ? `${
                    dropdown
                      ? `text-slate-400 nav-link hover:text-slate-300 dropdown-link`
                      : `text-slate-400 nav-link hover:text-slate-300`
                  }`
                : `${
                    dropdown
                      ? `text-gray-300 nav-link hover:text-gray-100 dropdown-link`
                      : `text-gray-300 nav-link hover:text-gray-100`
                  }`
            }
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {link.title}
          </NavLink>
        </li>
      ))}
      {user.email ? (
        <li className="flex-center gap-3 ">
          <div className="flex-center">
            <img
              src={user.photoURL}
              referrerPolicy="no-referrer"
              className={`${dropdown && `block my-2`} w-10 h-10 rounded-full `}
            />
          </div>
          <div>
            <button
              onClick={logOut}
              className="tracking-widest font-semibold uppercase text-red-600 text-sm transition-all duration-100  py-1 px-2 rounded-sm border border-red-600/50 hover:shadow-red-400 hover:shadow-[0_0_1.5rem_0]"
            >
              LogOut
            </button>
          </div>
        </li>
      ) : (
        <li className={`${dropdown && `w-full`}`}>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? `${
                    dropdown
                      ? `text-slate-400 nav-link hover:text-slate-300 dropdown-link`
                      : `text-slate-400 nav-link hover:text-slate-300`
                  }`
                : `${
                    dropdown
                      ? `text-gray-300 nav-link hover:text-gray-100 dropdown-link`
                      : `text-gray-300 nav-link hover:text-gray-100`
                  }`
            }
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );
};
export default NavList;
