const Social = ({ Icon }) => {
  return (
    <li
      key={Icon}
      className="border-2 h-9 w-9  border-red-800 rounded-full cursor-pointer text-slate-300 hover:text-white transition-all font-extrabold  my-2 flex items-center justify-center"
    >
      <Icon />
    </li>
  );
};

export default Social;
