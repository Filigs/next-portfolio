import ThemeSwitch from "./index/theme";
import Socials from "./navbar/socials";
import ContactMe from "./navbar/cta";

export default function NavBar() {
  return (
    <nav className="bg-indigo-500 dark:bg-orange-400">
      <div className="flex flex-row flex-wrap justify-evenly items-center px-6 py-2">
        <div className="text-white dark:text-black">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Filipe Martins
          </span>
        </div>
        <div className="text-white dark:text-black">
          <ThemeSwitch />
        </div>
        <div className="text-white dark:text-black">
          <Socials />
        </div>
      </div>
    </nav>
  );
}
