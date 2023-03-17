import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { range } from "lodash";

const NightSky = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let requestId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    const generateRandomCoordinates = (maxX, maxY) => {
      return [
        Math.floor(Math.random() * maxX),
        Math.floor(Math.random() * maxY),
      ];
    };

    const drawStars = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const numStars = Math.round((canvas.width * canvas.height) / 10000);
      const starCoords = range(numStars).map(() =>
        generateRandomCoordinates(canvas.width, canvas.height)
      );
      starCoords.forEach(([x, y]) => {
        const starSize = Math.random() * 2;
        const opacity = Math.random() * 0.5 + 0.5;
        context.beginPath();
        context.fillStyle = `rgba(255, 255, 204, ${opacity})`; // light yellow color

        context.arc(x, y, starSize, 0, 2 * Math.PI);
        context.fill();
      });
      requestId = requestAnimationFrame(drawStars);
    };

    resizeCanvas();
    drawStars();

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default NightSky;
