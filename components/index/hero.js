import Image from "next/image";
import landingImage from "/public/engineering.png";
import Biography from "./biography";

export default function Hero() {
  const filipe = {
    name: "Nuno Filipe Martins",
    role: "Web Developer",
    spec: "Full Stack",
    about: "Let's turn your ideas into visually appealing websites!",
  };

  return (
    <div className="border-0">
      <div className="grid p-8 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:p-16 items-center leading-normal bg-indigo-50 dark:bg-sky-800 lg:min-w-full transition-all duration-75 lg:duration-500">
        {/* hero */}
        <div className="block rounded text-center lg:text-start space-y-24 xl:space-y-36 xl:-translate-y-4">
          {/* text */}
          <section className="space-y-4">
            <p className="text-2xl lg:text-4xl font-bold tracking-wide">
              <span className="text-indigo-700 dark:text-sky-500">
                {filipe.spec + " "}
              </span>
              <span className="text-dark dark:text-light">{filipe.role}</span>
            </p>
            <p className="text-lg lg:text-xl font-mono font-bold text-dark dark:text-light tracking-wide">
              {filipe.about}
            </p>
          </section>
          <section className="">
            <section>
              <Biography />
            </section>
          </section>
        </div>

        {/* landing pic */}
        <div className="pt-12 translate-y-10 lg:min-w-full items-center justify-center lg:translate-y-20">
          <Image
            src={landingImage}
            alt="Web development vector"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
