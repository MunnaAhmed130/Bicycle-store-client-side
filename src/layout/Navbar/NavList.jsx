import { NavLink } from "react-router-dom";
import { navLinks } from "../../utils/constants";
import useAuth from "../../Hooks/useAuth";

const NavList = ({ toggle, setToggle, dropdown }) => {
  const { user } = useAuth();
  console.log(user.email);
  return (
    <>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            dropdown && `hover:bg-black/30 block w-full py-1 my-1`
          }`}
        >
          <NavLink
            to={`${link.id}`}
            className={({ isActive }) =>
              isActive ? `text-slate-400 nav-link` : `text-gray-300 nav-link`
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
              dropdown && ` block w-full  my-1`
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
