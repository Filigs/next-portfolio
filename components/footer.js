import Socials from "./socials";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="shadow-md">
      <div className="flex flex-wrap items-center justify-center gap-4 px-4 py-4 font-sans text-sm font-normal tracking-wider text-slate-200 lg:gap-8 lg:flex-col lg:text-md">
        <div className="inline-flex flex-col items-center gap-2 text-center lg:flex-row lg:justify-evenly">
          <p className="mb-2 font-serif text-sm font-normal tracking-wide lg:text-lg xl:text-xl text-start lg:text-md text-slate-400 dark:text-slate-400 lg:mb-0">
            {"© 2023 "}
            <Link href="https://www.nunomartins.dev">
              <span
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {"Filipe Martins™"}
              </span>
            </Link>
          </p>
          <p className="font-serif text-sm italic font-thin tracking-wide lg:text-lg xl:text-xl text-start lg:text-md text-slate-400 dark:text-slate-400">
            {"All Rights Reserved"}
          </p>
        </div>

        <div className="items-center order-2">
          <Socials />
        </div>
      </div>
    </footer>
  );
}
