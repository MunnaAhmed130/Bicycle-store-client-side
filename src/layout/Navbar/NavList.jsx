import { NavLink } from "react-router-dom";
import { navLinks } from "../../utils/constants";

const NavList = ({ toggle, setToggle }) => {
  return (
    <>
      {navLinks.map((link) => (
        <li key={link.id}>
          <NavLink
            to={`${link.id}`}
            className={({ isActive }) =>
              isActive
                ? `text-white tracking-widest xs:text-base hover:text-black text-sm  transition-colors duration-100`
                : `text-gray-200 tracking-widest xs:text-base text-sm  transition-colors duration-100`
            }
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {link.title}
          </NavLink>
        </li>
      ))}
    </>
  );
};
export default NavList;
