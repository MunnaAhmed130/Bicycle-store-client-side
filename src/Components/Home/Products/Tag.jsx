const Tag = ({ tag }) => {
  return (
    <span
      className={`text-white text-xs font-bold py-1 px-2 
      ${tag === "Womens" && "bg-[#ff6b84]"}
      ${tag === "Kids" && "bg-[#ff9900]"}
      ${tag === "Mens" && "bg-[#4778ff]"}
      ${tag === "Mountain" && "bg-[#007400]"}
      ${tag === "Hybrid" && "bg-slate-600"}
      ${tag === "Trail" && "bg-[#654321]"}
       m-1 rounded-sm  uppercase`}
    >
      {tag}
    </span>
  );
};

export default Tag;
