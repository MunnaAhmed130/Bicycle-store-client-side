import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import { animateIn } from "../../utils/motion";

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
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -10,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 1.7,
            when: "beforeChildren",
          },
        },
      }}
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      className="flex flex-wrap"
    >
      {allTags.map((tag, i) => (
        <motion.button
          variants={animateIn(50, 0, "spring", 0.4, (i + 1) * 0.1, 0.75)}
          key={tag}
          onClick={() => handleTag(tag)}
          className={`py-1.5 px-3 border border-solid border-red-500/70 m-1 rounded-[1px] text-white flex items-center gap-1 text-[.9375rem] tracking-widest
                ${tags.includes(tag) && "bg-red-500/50 border-red-400/40 "}
                `}
        >
          {tag}
          <DeleteTag tags={tags} tag={tag} />
        </motion.button>
      ))}
    </motion.div>
  );
};

const DeleteTag = ({ tags, tag }) => {
  return (
    <>
      {tags.map(
        (tags) =>
          tags === tag && (
            <span
              key={crypto.randomUUID()}
              className="flex items-center justify-center bg-white w-4 h-4 text-black rounded-full leading-none transition-all duration-1000"
            >
              <ImCross className="h-2 flex" />
            </span>
          )
      )}
    </>
  );
};

export default ExploreTags;
