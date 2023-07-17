import { useState } from "react";
// import { useLoaderData } from "react-router-dom";
import ExploreProducts from "./ExploreProducts/ExploreProducts";
import SideBar from "./SideBar/SideBar";
import { motion } from "framer-motion";
import { animateIn } from "../../utils/motion";
import "./ExploreSection.css";
import { useLoaderData } from "react-router-dom";
// import { products } from "../../assets/data";

const ExploreSection = () => {
  const products = useLoaderData();
  const [tags, setTags] = useState([]);
  const [minPrice, setMinPrice] = useState(200);
  const [maxPrice, setMaxPrice] = useState(4000);

  return (
    <main className="bg-gradient-to-b from-[var(--bg-dark)] from-1% via-[#1a1919] via-50% to-[var(--bg-dark)] min-h-screen pt-20 pb-10 md:px-10 px-5">
      <motion.div initial="hidden" animate="show">
        <motion.p
          variants={animateIn(0, 50, "spring", 0.4, 0.25, 0.75)}
          className="section-sub-heading"
        >
          Discover the world of Cycling
        </motion.p>

        <motion.h2
          variants={animateIn(0, 10, "spring", 0.4, 0.25, 0.75)}
          className="text-center lg:text-6xl md:text-5xl sm:text-[2.5rem] text-4xl uppercase font-bold text-white tracking-wide lg:pb-12 md:pb-10 pb-8"
        >
          Our Bicycle Collection
        </motion.h2>

        <div className="flex lg:flex-row flex-col-reverse max-w-7xl mx-auto gap-5">
          {/* sidebar */}
          <SideBar
            products={products}
            tags={tags}
            setTags={setTags}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
          />

          <motion.section className="lg:w-3/4 mb-20">
            {Array.isArray(products) ? (
              <ExploreProducts
                products={products}
                tags={tags}
                minPrice={minPrice}
                maxPrice={maxPrice}
              />
            ) : (
              <div className="text-center">
                <p>no products</p>
              </div>
            )}
          </motion.section>
        </div>
      </motion.div>
    </main>
  );
};

export default ExploreSection;
