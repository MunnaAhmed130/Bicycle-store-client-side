import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const ImageLoader = ({
  url,
  alt,
  blurhash,
  height,
  width,
  className,
  containerStyle,
}) => {
  const [imageLoading, setImageLoading] = useState(true);

  let src = url;

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoading(false);
      // setTimeout(() => {
      //   setImageLoading(false);
      // }, 5000);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {imageLoading && (
        <div className={`${containerStyle}`}>
          <Blurhash
            hash={blurhash}
            width={width}
            height={height}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      )}
      <img
        className={`${imageLoading ? "hidden" : `${className}`} `}
        src={src}
        alt={alt}
      />
    </>
  );
};

export default ImageLoader;
