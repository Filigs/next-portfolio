import ThemeSwitch from "./theme";
import Image from "next/image";
import avatar from "/public/avatar.png";
import Link from "next/link";
import { FiSend } from "react-icons/fi";

export default function NavBar() {
  return (
    <nav className="sticky inset-x-0 top-0 z-10 max-w-full min-w-full transition-all duration-75 shadow-sm bg-slate-100 dark:bg-slate-800 dark:shadow-slate-500 lg:duration-500 lg:sticky">
      <div className="flex flex-row flex-wrap items-center justify-between p-4">
        <div className="inline-flex gap-2 text-dark dark:text-light">
          <Image
            src={avatar}
            alt="Avatar as a logo"
            width={40}
            height={40}
            className="scale-95 rounded-full bg-gradient-to-tr from-hoverLight via-secondaryLight to-hoverLight dark:from-secondaryDark dark:via-borderDark dark:to-secondaryDark"
          />
          <Link href="/" passHref>
            <a className="self-center text-xl font-semibold lg:text-2xl whitespace-nowrap">
              Nuno Martins
            </a>
          </Link>
        </div>

        <div className="inline-flex items-center transition-none border-0 text-dark dark:text-light">
          <section className="p-1 mx-1 text-xl border-0 rounded-full cursor-pointer hover:text-hoverLight dark:hover:text-hoverDark">
            <Link href="/contact-form" passHref>
              <FiSend alt="Contact me" />
            </Link>
          </section>
          <section
            className="p-1 mx-1 text-xl border-0 rounded-full cursor-pointer hover:text-hoverLight dark:hover:text-hoverDark"
            alt="Switch color theme between dark and light mode"
          >
            <ThemeSwitch />
          </section>
        </div>
      </div>
    </nav>
  );
}
