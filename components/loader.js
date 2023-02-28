import { motion } from "framer-motion";
import React, { useState } from "react";
import classnames from "classnames";

const imageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
};

const LoadingImage = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  const handleImageError = (event) => {
    console.log(`Error loading image: ${event.target.src}`);
    setIsLoading(false);
  };

  return (
    <div className="relative">
      <div
        className={classnames(
          "absolute inset-0 flex items-center justify-center",
          {
            "bg-gray-200": isLoading,
          }
        )}
      >
        <motion.div
          className="w-20 h-20 border-4 border-blue-500 rounded-full animate-spin"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      </div>
      <motion.img
        variants={imageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        onLoad={handleImageLoaded}
        onError={handleImageError}
        src={src}
        alt={alt}
        className={classnames({ "opacity-0": isLoading })}
      />
    </div>
  );
};

export default LoadingImage;
