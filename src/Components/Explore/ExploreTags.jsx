const ExploreTags = ({ allTags, tags, setTags }) => {
  const handleTag = (tag) => {
    if (!tags.includes(tag)) {
      return setTags((prevTags) => [...prevTags, tag]);
    } else {
      const tagsFiltered = tags.filter((tags) => {
        return tags !== tag;
      });
      return setTags(tagsFiltered);
    }
  };

  return (
    <div className="flex flex-wrap">
      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTag(tag)}
          className={`py-1 px-2 border border-solid border-red-500/70 m-1 rounded-sm text-white flex items-center gap-1
                ${tags.includes(tag) && "bg-red-500/50 border-red-400/40 "}
                `}
        >
          {tag}
          {tags.map(
            (tags) =>
              tags === tag && (
                <span
                  key={crypto.randomUUID()}
                  className="flex items-center justify-center bg-white w-4 h-4 text-black rounded-full leading-none font-extrabold uppercase text-[12px]"
                >
                  x
                </span>
              )
          )}
        </button>
      ))}
    </div>
  );
};

export default ExploreTags;
