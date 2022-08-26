import Image from "next/image";
import landingImage from "/public/engineering.png";

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
      <div className="flex flex-col min-w-full max-w-full lg:flex-row lg:justify-center lg:items-center items-center justify-center leading-normal pt-8 lg:pt-24 bg-inherit dark:bg-inherit rounded-3xl ">
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

          <section className="scale-90 lg:max-w-4xl lg:mx-auto items-center justify-center pt-8 lg:pt-12 translate-y-4 md:translate-y-8 ">
            <Image
              src={landingImage}
              alt="Web development vector"
              layout="responsive"
            />
          </section>

          <div className="border-0 text-center justify-center lg:min-w-full">
            <div className="py-8 lg:py-10 space-y-8 text-white bg-indigo-600 dark:bg-sky-500 dark:text-slate-900 p-10 lg:p-14 border-t-8 border-indigo-500 dark:border-sky-600">
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
