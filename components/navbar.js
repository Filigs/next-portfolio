import ThemeSwitch from "./index/theme";
import Socials from "./navbar/socials";

export default function NavBar() {
  return (
    <nav className="bg-indigo-500 dark:bg-orange-400">
      <div className="flex flex-row flex-wrap justify-between items-center pt-8 pb-4 px-8">
        <div className="text-white dark:text-black">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Filipe Martins
          </span>
        </div>
        <div className="text-white dark:text-black scale-150">
          <ThemeSwitch />
        </div>
        <div className="text-white dark:text-black">
          <Socials />
        </div>
      </div>
    </nav>
  );
}
