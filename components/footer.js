import Socials from "./socials";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative inset-x-0 bottom-0 max-w-full min-w-full p-4 transition-all duration-75 border-t-2 border-b-0 shadow lg:relative lg:p-8 bg-slate-800 md:flex md:items-center dark:bg-slate-800 border-x-0 border-slate-700 lg:duration-500">
      <div className="flex flex-row flex-wrap items-center justify-center w-full gap-4 px-4 py-4 mt-3 font-sans text-sm font-normal tracking-wider transition-transform duration-300 lg:flex-col lg:text-md text-slate-200 sm:mt-0 lg:gap-8 lg:justify-center">
        <div className="inline-flex items-center gap-2 text-center transition-all duration-75 lg:text-center lg:duration-500 justify-evenly">
          <p className="font-serif text-sm font-normal tracking-wide transition-transform duration-300 lg:text-lg xl:text-xl text-start lg:text-md text-slate-400 dark:text-slate-400 ">
            {"© 2023 "}
            <Link
              href="https://www.nunomartins.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {"Filipe Martins™"}
            </Link>
          </p>
          <p className="font-serif text-sm italic font-thin tracking-wide transition-transform duration-300 lg:text-lg xl:text-xl text-start lg:text-md text-slate-400 dark:text-slate-400">
            {"  " + "All Rights Reserved"}
          </p>
        </div>

        <div className="items-center order-2 transition-transform duration-300 ">
          <Socials />
        </div>
      </div>
    </footer>
  );
}
