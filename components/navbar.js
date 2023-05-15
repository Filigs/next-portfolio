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
            className="object-cover scale-95 rounded-full bg-cta dark:bg-cta hover:bg-primary dark:hover:bg-primaryHover hover-transition"
          />
          <Link href="/" passHref>
            <div className="text-xl font-semibold align-baseline lg:text-2xl text-dark dark:text-light hover:text-primary dark:hover:text-primaryHover hover-transition">
              <span className="text-primary">{"N"}</span>
              {"uno"}
              <span className="text-primary">{"M"}</span>
              {"artins"}
            </div>
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
