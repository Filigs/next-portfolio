import Image from "next/image";
import myPicture from "/public/avatar.png";
import { motion } from "framer-motion";
const biography = {
  title: "Hey there, I'm Filipe",
  body: "Currently I'm a Junior Developer, I've been using computers for most of my life. I love being able to be a software arquitect, and working doing something you love is amazing!",
};

export default function Hero() {
  const filipe = {
    name: "Nuno Filipe Martins",
    role: "Web Developer",
    spec: "Full Stack",
    birth: "29/05/1993",
    address: [
      ["Rua Mouzinho de Albuquerque"],
      ["Edificio Lagoa Residence", "Bloco A A6"],
      ["8400 - 384 Lagoa"],
    ],
    about: "I turn your ideas into visually appealing websites.",
    skills: [
      {
        type: "Informática / Tecnologias",
        description:
          "Desde pequeno que uso computadores, já fiz muita reparação, já programei e já tenho muita experiencia no geral.",
      },
      {
        type: "Lingua Inglesa",
        description:
          "Todos os trabalhos que tive, atendi muito cliente estrangeiro, e muitos anos de usar a internet",
      },
    ],
  };

  return (
    <div className="border-0">
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center items-center justify-center leading-normal pt-20 lg:pt-24 bg-inherit dark:bg-inherit rounded-3xl">
        <div id={"portrait"} className="rounded text-center justify-center">
          {/* name */}

          <div className="space-y-8 p-2 lg:p-6 ">
            <p className="text-3xl lg:text-5xl font-bold text-center text-inherit">
              <span className="text-indigo-700 dark:text-orange-500">
                {filipe.spec + " "}
              </span>
              <span>{filipe.role}</span>
            </p>
            <p className="text-2xl lg:text-3xl font-normal text-center text-inherit">
              {filipe.about}
            </p>
          </div>
          {/* hero */}
          <section className="my-20">
            <Image
              src={myPicture}
              alt="A picture of me"
              width={300}
              height={300}
              // layout={"responsive"}
              className="bg-gradient-to-tr from-indigo-600 via-indigo-700 to-indigo-600 dark:from-orange-500 dark:via-orange-600 dark:to-orange-500 rounded-full ring-2 ring-indigo-500 dark:ring-zinc-700 scale-95"
            />
          </section>
          <div className="text-center justify-center">
            <div className="my-8 lg:my-10 space-y-8 text-white bg-gradient-to-tr from-indigo-600 via-indigo-700 to-indigo-600 dark:from-orange-500 dark:via-orange-600 dark:to-orange-500 dark:text-zinc-900 p-10 lg:p-14">
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
