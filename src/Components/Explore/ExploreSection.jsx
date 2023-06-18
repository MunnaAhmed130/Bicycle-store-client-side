import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ExploreProducts from "./ExploreProducts";
import SideBar from "./SideBar";
import "./ExploreSection.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const ExploreSection = () => {
  const products = useLoaderData();
  const [tags, setTags] = useState([]);
  const [minPrice, setMinPrice] = useState(200);
  const [maxPrice, setMaxPrice] = useState(4000);

  return (
    <main className="bg-gradient-to-b from-[var(--bg-dark)] from-1% via-[#1a1919] via-50% to-[var(--bg-dark)]  min-h-screen py-10 md:px-10 px-5">
      <motion.div initial="hidden" whileInView="show">
        <motion.p
          variants={fadeIn("up", "spring", 0, 0.5)}
          viewport={{ once: true }}
          className="section-sub-heading"
        >
          Discover the world of Cycling
        </motion.p>

        <motion.h2
          variants={fadeIn("up", "spring", 0.1, 0.5)}
          viewport={{ once: true }}
          className="section-heading"
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

          <section className="lg:w-3/4 mb-20">
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
          </section>
        </div>
      </motion.div>
    </main>
  );
};

export default ExploreSection;
