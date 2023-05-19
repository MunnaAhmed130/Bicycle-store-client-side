import { NavLink } from "react-router-dom";
import { navLinks } from "../../utils/constants";
import useAuth from "../../Hooks/useAuth";

const NavList = ({ toggle, setToggle, dropdown }) => {
  const { user } = useAuth();
  console.log(user.email);
  return (
    <>
      {navLinks.map((link) => (
        <li key={link.id} className={`${dropdown && ` w-full `}`}>
          <NavLink
            to={`${link.id}`}
            // className={({ isActive }) =>
            //   isActive ? `text-slate-400 nav-link` : `text-gray-300 nav-link`
            // }
            className={({ isActive }) =>
              isActive
                ? `${
                    dropdown
                      ? `text-slate-400 nav-link hover:bg-white/20  inline-block w-full py-1 mt-1`
                      : "text-slate-400 nav-link "
                  }`
                : `${
                    dropdown
                      ? `text-gray-300 nav-link hover:bg-white/20  inline-block w-full py-1 mt-1`
                      : "text-gray-300 nav-link "
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
      <li>
        {user.email ? (
          <img
            src={user.photoURL}
            referrerPolicy="no-referrer"
            className={`${
              dropdown && ` block w-full  my-2`
            } w-10 h-10 rounded-full`}
          />
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </li>
    </>
  );
};
export default NavList;
