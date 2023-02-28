import { motion } from "framer-motion";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import BackToTopButton from "../utils/scrollButton.jsx";

const layoutVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function Layout({ children }) {
  return (
    <motion.div
      className="flex flex-col min-h-screen"
      variants={layoutVariants}
      initial="hidden"
      animate="visible"
    >
      <Navbar />
      <motion.main
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.main>
      <Footer />
      <BackToTopButton />
    </motion.div>
  );
}
