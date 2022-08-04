import ThemeSwitch from "./index/theme";
import Socials from "./navbar/socials";

export default function NavBar() {
  return (
    <nav className="bg-white dark:bg-slate-900 shadow-sm dark:shadow-slate-500 transition-colors duration-300">
      <div className="flex flex-row flex-wrap justify-between items-center p-4">
        <div className="text-slate-900 dark:text-white">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Filipe Martins
          </span>
        </div>

        <div className="text-slate-900 dark:text-white flex flex-row text-xl divide-x-2 divide-slate-200 dark:divide-slate-400 items-center">
          <section className="mx-2 border-0 rounded-full text-white bg-indigo-600 dark:bg-amber-500">
            {" "}
            <ThemeSwitch />
          </section>
          <section className="px-2">
            {" "}
            <Socials />
          </section>
        </div>
      </div>
    </nav>
  );
}
