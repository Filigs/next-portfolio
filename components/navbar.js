import ThemeSwitch from "./theme";
import Image from "next/image";
import avatar from "/public/avatar.png";
import Link from "next/link";
import { FiSend } from "react-icons/fi";

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
            className="self-center text-xl lg:text-2xl font-semibold whitespace-nowrap"
          >
            Filipe Martins
          </a>
        </div>

        <div className="text-slate-900 dark:text-white inline-flex items-center border-0">
          <section className="mx-2 p-2 text-md lg:text-lg xl:text-xl transition-transform duration-300 border-0 rounded-full text-white bg-emerald-600 hover:bg-transparent dark:bg-lime-500 hover:text-emerald-600 dark:hover:text-inherit dark:hover:bg-transparent hover:-translate-y-1 hover:scale-110">
            <Link href="/contact-form">
              <FiSend alt="Contact me" />
            </Link>
          </section>
          <section
            className="mx-2 text-md lg:text-lg xl:text-xl transition-transform duration-300 border-0 rounded-full text-white bg-indigo-600 hover:bg-transparent dark:bg-sky-500 hover:text-indigo-600 dark:hover:text-inherit dark:hover:bg-transparent hover:-translate-y-1 hover:scale-110"
            alt="Switch color theme between dark and light mode"
          >
            <ThemeSwitch />
          </section>
        </div>
      </div>
    </nav>
  );
}
