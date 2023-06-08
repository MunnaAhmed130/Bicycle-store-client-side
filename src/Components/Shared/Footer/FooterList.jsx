import { Link } from "react-router-dom";
import { BiChevronsRight } from "react-icons/bi";

const FooterList = ({ list }) => {
  return (
    <Link key={list.id} to={list.id}>
      <span className="text-red-500 text-lg leading-none">
        <BiChevronsRight />
      </span>
      <span className="text-gray-400 ">{list.title}</span>
    </Link>
  );
};

export default FooterList;
