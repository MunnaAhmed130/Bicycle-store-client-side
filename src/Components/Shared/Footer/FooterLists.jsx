import FooterList from "./FooterList";

const FooterLists = ({ list }) => {
  return (
    <div className="flex flex-col gap-1 w-full " key={list.title}>
      <h5 className="text-xl font-extrabold uppercase text-white">
        {list.title}
      </h5>
      <ul className="flex flex-col gap-0.5">
        {list.links.map((page) => (
          <FooterList list={page} key={page.id} />
        ))}
      </ul>
    </div>
  );
};

export default FooterLists;
