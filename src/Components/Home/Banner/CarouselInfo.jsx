import { motion } from "framer-motion";
import ImageLoader from "../../Explore/ImageLoader";
import { animateIn } from "../../../utils/motion";

const CarouselInfo = ({ banner, i, curr, last }) => {
  return (
    <div
      className={`${i == curr ? "animte-fade" : "opacity-0 z-0"}
        ${i == last && "animate-fadeOut"} absolute inset-0 w-screen h-screen`}
    >
      <ImageLoader
        blurhash={banner.blurHash}
        alt={banner.alt}
        url={banner.src}
        height={1224}
        width={3000}
        className="absolute min-w-full h-screen object-cover brightness-75 object-center w-full animate-fade transition-all"
        containerStyle="h-screen w-screen overflow-hidden absolute"
      />

      <div className="banner-gradient z-10 h-screen w-full absolute" />

      <motion.div
        initial="hidden"
        animate="show"
        className="w-full h-screen text-center flex-center absolute z-20"
      >
        <div className="flex flex-col sm:gap-3 gap-2 xl:max-w-5xl lg:max-w-3xl md:max-w-xl sm:max-w-lg max-w-sm px-5 transition-all mt-16">
          <motion.div variants={animateIn(0, 100, "spring", 0.4, 0.25, 0.75)}>
            <h3 className="banner-heading">{banner.text.title}</h3>
          </motion.div>
          <motion.div variants={animateIn(0, -50, "spring", 0.4, 0.25, 0.75)}>
            <p className="lg:text-[22px] lg:leading-[30px] md:text-xl text-white/95 transition-all  mx-auto">
              {banner.text.description}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CarouselInfo;
