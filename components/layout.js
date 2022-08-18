import Navbar from "./navbar.js";
import Footer from "./footer.js";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
