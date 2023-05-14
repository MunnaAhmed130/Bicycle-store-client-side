import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Blurhash } from "react-blurhash";

const ImageLoading = ({ image, alt, className }) => {
  const [imageLoading, setImageLoading] = useState(true);
  let src = image.src;

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoading(false);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {imageLoading && (
        <div className="vh-100 vw-100 overflow-hidden">
          <Blurhash
            hash={image.blurHash}
            width={3000}
            height={1224}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      )}
      <img
        className={`${imageLoading ? "d-none" : "loaded-img"}  ${className}`}
        src={image.src}
        alt={alt}
      />
    </>
  );
};

ImageLoading.propTypes = {
  image: PropTypes.object,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default ImageLoading;
