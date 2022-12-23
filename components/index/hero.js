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
      <div className="items-center block p-8 pb-4 leading-normal transition-all duration-75 lg:pb-8 xl:pb-4 lg:gap-x-8 lg:p-12 xl:p-24 bg-borderLight dark:bg-borderDark lg:min-w-full lg:duration-500">
        {/* hero */}
        <div className="grid text-center rounded lg:gap-4 lg:grid-cols-3 lg:text-center lg:items-center">
          {/* text */}
          <div>
            <div className="space-y-4 lg:space-y-8">
              <p className="mb-8 text-2xl font-bold tracking-wide lg:text-4xl">
                <span className="text-secondaryLight dark:text-secondaryDark">
                  {filipe.spec + " "}
                </span>
                <span className="text-dark dark:text-light">{filipe.role}</span>
              </p>
              <div>
                <Biography />
              </div>
              <div className="text-center">
                {/* button */}
                <Link href="/contact-form" passHref>
                  <p className="cursor-pointer inline-flex items-center justify-center px-4 py-2.5 text-lg font-semibold tracking-widest text-center text-light bg-secondaryLight dark:bg-secondaryDark rounded hover:bg-hoverLight dark:hover:bg-hoverDark focus:ring-4 ring-ringLight dark:ring-ringDark">
                    Hire me!
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* ! text */}

          {/* landing pic */}

          <div className="items-center justify-center pt-12 translate-y-10 lg:min-w-full lg:translate-y-20 lg:col-span-2">
            <p className="font-serif text-xl font-bold tracking-wide lg:text-xl text-dark dark:text-light">
              {filipe.about}
            </p>
            <Image
              src={landingImage}
              alt="Web development vector"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
