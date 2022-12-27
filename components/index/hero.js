import Image from "next/image";
import landingImage from "/public/engineering.png";
import Biography from "./biography";
import Link from "next/link";

export default function Hero() {
  const filipe = {
    name: "Nuno Filipe Martins",
    role: "Web Developer",
    spec: "Full Stack",
    about: "Let's turn your ideas into visually appealing websites!",
  };

  return (
    <div className="border-0">
      <div id="hero-banner">
        {/* hero */}
        <div className="grid text-center rounded lg:gap-4 lg:grid-cols-3 lg:text-center lg:items-center">
          {/* text */}
          <div>
            <div>
              <div className="grid mb-10 text-2xl tracking-wide lg:mb-15 lg:text-4xl">
                <div className="grid gap-2 lg:gap-4 text-dark dark:text-light lg:mb-15">
                  <span className="font-mono text-4xl font-black text-secondaryLight dark:text-secondaryDark">
                    {filipe.spec + " "}
                  </span>
                  <span>{filipe.role}</span>
                </div>
              </div>
              <div className="mb-10 lg:mb-16">
                <Biography />
              </div>
              <div className="text-center ">
                {/* button */}
                <Link href="/contact-form" passHref>
                  <button className="text-light bg-secondaryLight dark:bg-secondaryDark hover:bg-hoverLight dark:hover:bg-hoverDark">
                    {"Let's talk"}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* ! text */}

          {/* landing pic */}

          <div className="items-center justify-center pt-12 translate-y-10 lg:min-w-full lg:translate-y-20 lg:col-span-2">
            <p className="font-serif text-xl font-bold tracking-wide lg:text-xl text-dark dark:text-light lg:-translate-y-14">
              {filipe.about}
            </p>
            <Image src={landingImage} alt="Web development vector" />
          </div>
        </div>
      </div>
    </div>
  );
}
