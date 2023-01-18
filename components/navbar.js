import ThemeSwitch from "./theme";
import Image from "next/image";
import avatar from "/public/avatar.png";
import Link from "next/link";
import { FiSend } from "react-icons/fi";

export default function NavBar() {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between p-4">
        <div className="inline-flex items-center gap-2 text-dark dark:text-light">
          <Image
            src={avatar}
            alt="Avatar as a logo"
            width={40}
            height={40}
            className="scale-95 bg-white rounded-full dark:bg-white"
          />
          <Link href="/" passHref>
            <div className="text-xl font-semibold align-baseline lg:text-2xl">
              Nuno Martins
            </div>
          </Link>
        </div>

        <div className="inline-flex items-center border-0 text-dark dark:text-light">
          <section className="p-1 mx-1 text-xl border-0 rounded-full cursor-pointer hover:text-ctaHover dark:hover:text-ctaHover">
            <Link href="/contact-form" passHref>
              <FiSend alt="Contact me" />
            </Link>
          </section>
          <section
            className="p-1 mx-1 text-xl border-0 rounded-full cursor-pointer hover:text-ctaHover dark:hover:text-ctaHover"
            alt="Switch color theme between dark and light mode"
          >
            <ThemeSwitch />
          </section>
        </div>
      </div>
    </nav>
  );
}
