import { RxTriangleDown } from "react-icons/rx";

const TooltipButton = ({ children, tooltip, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative group text-black bg-white w-8 h-8 rounded-full flex-center"
    >
      {children}
      <span className="group-hover:block hidden    absolute w-20 bottom-[125%] left-2/4 -ml-10  transition-all duration-200 text-sm py-1 text-black bg-white">
        {tooltip}
      </span>
      <RxTriangleDown className="group-hover:block hidden absolute bottom-[90%] text-white text-xl" />
    </button>
  );
};

export default TooltipButton;
