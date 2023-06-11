const ExploreTags = ({ tags, addTag, cycleTag }) => {
  return (
    <div>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => addTag(tag)}
          className={`py-1 px-2 border border-solid border-red-500 m-1 text-white
                ${
                  tag === cycleTag && "bg-red-600 border-red-500 font-semibold"
                }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default ExploreTags;
