const Tag = ({ tag }) => {
  return (
    <span
      className={`text-white text-xs font-bold py-1 px-2 bg-[#1683e9] m-1 rounded  uppercase`}
    >
      {tag}
    </span>
  );
};

export default Tag;
