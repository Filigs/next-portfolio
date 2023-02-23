import Navbar from "./navbar.js";
import Footer from "./footer.js";
import BackToTopButton from "../utils/scrollButton.jsx";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}
