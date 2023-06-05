const Tag = ({ tag }) => {
  return (
    <span
      className={` border border-white text-xs font-extrabold  px-1 me-1 bg-white   ${
        tag === "Womens" && "text-[#ff6b84]"
      }
        ${tag === "Kids" && "text-[#ff9900]"}
        ${tag === "Mens" && "text-[#4778ff]"}
        ${tag === "Mountain" && "text-[#007400]"}
        ${tag === "Hybrid" && "text-slate-600"}
        ${tag === "Trail" && "text-[#654321]"}
         rounded-sm  uppercase`}
    >
      {tag}
    </span>
  );
};

export default Tag;
