import { allTags } from "../../utils/constant";
import ExploreTags from "./ExploreTags";
import PriceFilter from "./PriceFilter";
import Catagories from "./Catagories";
import FeaturedItem from "./FeaturedItem";
import { motion } from "framer-motion";
import "./ExploreSection.css";
import { animateIn } from "../../utils/motion";

const SideBar = ({ products, tags, setTags, setMinPrice, setMaxPrice }) => {
  return (
    <section id="sidebar" className="lg:w-3/12">
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        className="flex flex-col gap-12 mb-20 "
      >
        <section>
          <motion.h6
            variants={animateIn(0, 50, "spring", 0.4, 0.35, 0.75)}
            className="sidebar-title mb-2"
          >
            catagories
          </motion.h6>
          <Catagories />
        </section>

        <section>
          <motion.h6
            variants={animateIn(0, 50, "spring", 0.4, 1.1, 0.75)}
            className="sidebar-title mb-2"
          >
            Price Filter
          </motion.h6>
          <motion.div variants={animateIn(150, 0, "spring", 0.4, 1.25, 0.75)}>
            <PriceFilter
              min={200}
              max={4000}
              setMaxPrice={setMaxPrice}
              setMinPrice={setMinPrice}
            />
          </motion.div>
        </section>

        <section>
          <motion.h6
            className="sidebar-title mb-2"
            variants={animateIn(0, 50, "spring", 0.4, 1.5, 0.75)}
          >
            Tags
          </motion.h6>
          <ExploreTags allTags={allTags} tags={tags} setTags={setTags} />
        </section>

        <section>
          <motion.h6
            variants={animateIn(0, 50, "spring", 0.4, 2, 0.75)}
            className="sidebar-title mb-5 "
          >
            Featured Items
          </motion.h6>
          <motion.ul
            variants={{
              hidden: {
                opacity: 0,
              },
              show: {
                opacity: 1,
                transition: {
                  delay: 2,
                  when: "beforeChildren",
                },
              },
            }}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {products
              // .filter((product) => product.rating == 5)
              .map(
                (product, i) =>
                  product.rating == 5 && (
                    <FeaturedItem key={product.name} product={product} i={i} />
                  )
              )}
          </motion.ul>
        </section>
      </motion.div>
    </section>
  );
};

export default SideBar;
