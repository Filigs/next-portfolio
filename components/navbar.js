import ThemeSwitch from "./index/theme";
import Socials from "./navbar/socials";
import ContactMe from "./navbar/cta";

export default function NavBar() {
  return (
    <nav className="bg-white border-zinc-200 px-4 sm:px-4 py-2.5 rounded dark:bg-zinc-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Filipe Martins
          </span>
        </div>
        <div>
          <section>
            <ThemeSwitch />
          </section>
        </div>
        <div
        // className="hidden justify-between items-center w-full md:flex md:w-auto"
        // id="navbar-cta"
        >
          <section>
            <Socials />
          </section>
          {/* <section> */}
          {/* <ContactMe /> */}
          {/* </section> */}
          {/* <HiMoon id="theme-toggle-dark-icon" className="hidden w-5 h-5" /> */}
          {/* <HiSun id="theme-toggle-light-icon" className="hidden w-5 h-5" /> */}
        </div>
      </div>
    </nav>
  );
}
