import { Link } from "react-router-dom";
import { BiChevronsRight } from "react-icons/bi";

const FooterList = ({ list }) => {
  console.log(list);
  return (
    <>
      {list.logo ? (
        <div className="flex flex-row items-center gap-2 mb-2">
          <list.logo className="text-xl stroke-[.2] w-8 text-red-600" />

          <span className="flex flex-col gap-1">
            <p className="text-sm font-bold leading-none text-gray-400">
              {list.title}
            </p>
            <p className="text-[15px]">{list.info}</p>
          </span>
        </div>
      ) : (
        <Link key={list.id} to={list.id} className="flex items-center">
          <span className="text-red-500 text-lg leading-none flex items-center ">
            <BiChevronsRight className="text-red-500  text-xl " />
          </span>
          <span className="text-[#e6e6e6 hover:text-white text-[15px] tracking-wide ">
            {list.title}
          </span>
        </Link>
      )}
    </>
  );
};

export default FooterList;
