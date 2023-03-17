import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const NightSky = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    const drawGradient = () => {
      const grd = context.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      grd.addColorStop(0, "#04004d");
      grd.addColorStop(0.2, "#0d008e");
      grd.addColorStop(0.4, "#1c00cc");
      grd.addColorStop(0.6, "#4500ff");
      grd.addColorStop(0.8, "#9100ff");
      grd.addColorStop(1, "#ff00e1");

      context.fillStyle = grd;
      context.fillRect(0, 0, canvas.width, canvas.height);
    };

    resizeCanvas();
    drawGradient();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
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
