const Social = ({ Icon }) => {
  return (
    <li key={Icon.icon} className="my-2">
      <button className="h-9 w-9  border-2  border-red-800  rounded-full  cursor-pointer text-[#c5c5c5] hover:text-white transition-colors duration-150 font-extrabold">
        <a href={Icon.link} className="flex-center">
          <Icon.icon />
        </a>
      </button>
    </li>
  );
};

export default Social;
