import Image from "next/image";
import branding from "/public/branding.png";
import Link from "next/link";
import ThemeSwitch from "./theme";
import { IoChatboxEllipses } from "react-icons/io5";

export default function NavBar() {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between lg:justify-around">
        <div className="inline-flex items-center text-dark dark:text-light">
          <Link href="/" passHref>
            <Image
              src={branding}
              alt={`Branding as a logo, representing the first letter of "Nuno" and "Martins"`}
              width={128}
              height={128}
              className="scale-95 rounded-full lg:scale-125 drop-shadow-md"
            />
          </Link>
        </div>
        <div className="inline-flex items-center gap-4 mr-4 border-0 text-dark dark:text-light">
          <section className="text-2xl border-0 rounded-full cursor-pointer lg:text-3xl ">
            <Link href="/contact-form" passHref>
              <IoChatboxEllipses
                alt="Contact me"
                className="fill-primary hover:fill-primaryHover hover-transition drop-shadow-md"
              />
            </Link>
          </section>
          <section
            className="text-2xl border-0 rounded-full cursor-pointer lg:text-3xl drop-shadow-md"
            alt="Switch color theme between dark and light mode"
          >
            <ThemeSwitch />
          </section>
        </div>
      </div>
    </nav>
  );
}
