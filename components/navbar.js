import ThemeSwitch from "./theme";
import Socials from "./navbar/socials";
import Image from "next/image";
import avatar from "/public/avatar.png";

export default function NavBar() {
  return (
    <nav className="bg-slate-100 dark:bg-slate-800 shadow-sm dark:shadow-slate-500 transition-colors duration-300 sticky lg:sticky min-w-full max-w-full inset-x-0 top-0 z-10">
      <div className="flex flex-row flex-wrap justify-between items-center p-4">
        <div className="text-slate-900 dark:text-white inline-flex gap-2">
          <Image
            src={avatar}
            alt="Avatar as a logo"
            width={40}
            height={40}
            className="rounded-full bg-gradient-to-tr from-indigo-600 via-indigo-700 to-indigo-600 dark:from-sky-500 dark:via-sky-600 dark:to-sky-500 scale-95"
          />
          <a
            href="https://beamish-mochi-c2f9ed.netlify.app/"
            className="self-center text-xl font-semibold whitespace-nowrap"
          >
            Filipe Martins
          </a>
        </div>

        <div className="text-slate-900 dark:text-white flex flex-row text-xl divide-x-2 divide-slate-200 dark:divide-slate-700 items-center">
          <section className="mx-2 transition-transform duration-300 border-0 scale-75 rounded-full text-white bg-indigo-600 hover:bg-inherit dark:bg-sky-500 hover:text-indigo-600 dark:hover:text-inherit dark:hover:bg-transparent hover:-translate-y-1 hover:scale-110">
            {" "}
            <ThemeSwitch />
          </section>
        </div>
      </div>
    </nav>
  );
}
