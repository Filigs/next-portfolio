import Image from "next/image";
import myPicture from "/public/avatar.png";
import "animate.css";
import Link from "next/link";

export default function Hero() {
  const biography = {
    title: "Hey there, I'm Filipe",
    body: "Currently I'm a Junior Developer, I've been using computers for most of my life. I love being able to be a software arquitect, and working doing something you love is amazing!",
  };
  const filipe = {
    name: "Nuno Filipe Martins",
    role: "Web Developer",
    spec: "Full Stack",
    about: "I turn your ideas into visually appealing websites.",
  };

  return (
    <div className="border-0">
      <div className=" flex flex-col min-w-full max-w-full lg:flex-row lg:justify-center lg:items-center items-center justify-center leading-normal pt-20 lg:pt-24 bg-inherit dark:bg-inherit rounded-3xl ">
        <div id={"portrait"} className="rounded text-center justify-center ">
          {/* name */}
          <div className="space-y-8 p-2 lg:p-6 ">
            <p className="text-3xl lg:text-5xl font-bold text-center text-inherit ">
              <span className="text-indigo-700 dark:text-sky-500">
                {filipe.spec + " "}
              </span>
              <span>{filipe.role}</span>
            </p>
            <p className="text-2xl lg:text-3xl font-normal text-center text-inherit ">
              {filipe.about}
            </p>
          </div>
          {/* hero */}
          {/* lg:-skew-y-6 lg:-skew-x-3 lg:rotate-12 xl:-skew-y-12 xl:-skew-x-6
          xl:rotate-45 */}
          <section className="bg-[url('/smartphone.png')] bg-bottom bg-contain bg-no-repeat transition-transform duration-300 mx-auto p-24 m-24 lg:flex lg:flex-row-reverse lg:justify-center lg:items-center animate__animated animate__fadeInLeft xl:animate__fadeInLeftBig">
            <div className="flex flex-col items-center rounded-3xl">
              <section className="mb-10 lg:mb-14">
                <Image
                  className="mb-3 w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-600 via-indigo-700 to-indigo-600 dark:from-sky-500 dark:via-sky-600 dark:to-sky-500 ring-2 ring-slate-700 dark:ring-slate-700 scale-95 bg-clip-border"
                  src={myPicture}
                  alt="A picture of me"
                  width={240}
                  height={240}
                />
                <p className="my-5 text-2xl lg:text-4xl font-semibold text-white dark:text-white">
                  Filipe Martins
                </p>
              </section>
              <div className="flex flex-col mt-8 space-y-24 lg:mt-6">
                <section className="">
                  <Link href="/contact-form">
                    <a
                      className="transition-all duration-150 inline-flex
                    items-center py-4 px-8 text-xl lg:text-xl font-semibold
                    text-center text-white bg-emerald-600 rounded-xl
                    hover:bg-emerald-500 dark:bg-emerald-500
                    dark:hover:bg-emerald-600 focus:ring-emerald-100
                    focus:ring-4"
                    >
                      {" "}
                      Say Hello
                    </a>
                  </Link>
                </section>
              </div>
            </div>
          </section>
          <div className="text-center justify-center xl:min-w-full">
            <div className="my-8 lg:my-10 space-y-8 text-white bg-gradient-to-tr from-indigo-600 via-indigo-700 to-indigo-600 dark:from-sky-400 dark:via-sky-500 dark:to-sky-400 dark:text-slate-900 p-10 lg:p-14">
              <p className="text-3xl lg:text-4xl font-bold text-center">
                {biography.title}
              </p>
              <p className="text-2xl lg:text-3xl font-normal leading-relaxed text-center">
                {biography.body}
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
