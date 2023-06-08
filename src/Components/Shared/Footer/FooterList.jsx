import { Link } from "react-router-dom";
import { BiChevronsRight } from "react-icons/bi";

const FooterList = ({ list }) => {
  return (
    <Link key={list.id} to={list.id} className="block">
      <span className="text-red-500 text-lg leading-none">
        <BiChevronsRight />
      </span>
      <span className="text-gray-300 leading-6 hover:text-white ">
        {list.title}
      </span>
    </Link>
  );
};

export default FooterList;
