import ThemeSwitch from "./index/theme";
import Socials from "./navbar/socials";

export default function NavBar() {
  return (
    <nav className="bg-white dark:bg-zinc-900 shadow-sm dark:shadow-zinc-500 transition-all duration-1000">
      <div className="flex flex-row flex-wrap justify-between items-center p-8">
        <div className="text-zinc-900 dark:text-white">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Filipe Martins
          </span>
        </div>

        <div className="text-zinc-900 dark:text-white flex flex-row text-xl divide-x-2 divide-zinc-200 dark:divide-zinc-400 items-center">
          <section className="mx-2">
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
