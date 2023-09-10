import Image from "next/image";
import branding from "/public/branding.png";
import Link from "next/link";
import { FiSend } from "react-icons/fi";

export default function NavBar() {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between p-4 ">
        <div className="inline-flex items-center gap-2 text-dark dark:text-light">
          <Link href="/" passHref>
            <Image
              src={branding}
              alt={`Branding as a logo, representing the first letter of "Nuno" and "Martins"`}
              width={80}
              height={80}
              className="scale-95 rounded-full"
            />
          </Link>
        </div>
        <div className="inline-flex items-center border-0 text-dark dark:text-light">
          <section className="p-1 mx-1 text-xl border-0 rounded-full cursor-pointer">
            <Link href="/contact-form" passHref>
              <FiSend
                alt="Contact me"
                className="stroke-primary hover:stroke-primaryHover hover-transition"
              />
            </Link>
          </section>
        </div>
      </div>
    </nav>
  );
}
