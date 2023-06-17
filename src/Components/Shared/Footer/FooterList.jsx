import { Link } from "react-router-dom";
import { BiChevronsRight } from "react-icons/bi";

const FooterList = ({ list }) => {
  return (
    <>
      {!list.logo ? (
        <Link key={list.id} to={list.id} className="flex items-center">
          <span className="text-red-500 text-lg leading-none flex items-center ">
            <BiChevronsRight className="text-red-500 text-xl" />
          </span>

          <span className="text-[#aaaaaa] hover:text-white text-[15px] tracking-wide ">
            {list.title}
          </span>
        </Link>
      ) : (
        <div className="flex flex-row items-center gap-2 mb-1">
          <list.logo className="text-xl  w-8 text-red-600 " />

          <span className="flex flex-col gap-1">
            <p className="text-xs font-semibold leading-none text-[#888888]">
              {list.title}
            </p>
            <p className="text-[15px] text-[#c5c5c5] ">{list.info}</p>
          </span>
        </div>
      )}
    </>
  );
};

export default FooterList;
