import FooterList from "./FooterList";

const FooterLists = ({ list }) => {
  //   console.log(list.title);
  return (
    <div className="flex flex-col gap-5 w-full " key={list.title}>
      <h5 className="text-xl font-extrabold uppercase text-white ">
        {list.title}
      </h5>
      <ul className="flex flex-col gap-3">
        {list.list.map((list) => (
          <FooterList list={list} key={list.title} />
        ))}
      </ul>
    </div>
  );
};

export default FooterLists;
