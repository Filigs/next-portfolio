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
    role: "Full Stack Web Developer",
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
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center items-center justify-center leading-normal pt-20 lg:pt-24 bg-zinc-900 rounded-3xl">
        <div id={"portrait"} className="rounded text-center justify-center">
          {/* name */}

          <div className="space-y-8 mb-8">
            <p className="text-3xl lg:text-4xl font-bold text-center text-white">
              {filipe.role}
            </p>
            <p className="text-2xl lg:text-3xl font-normal text-center text-white">
              {filipe.about}
            </p>
          </div>
          {/* hero */}
          <Image
            src={myPicture}
            alt="A picture of me"
            width={300}
            height={300}
            // layout={"responsive"}
            className="bg-gradient-to-tr from-orange-600 via-orange-500 to-orange-400 rounded-full ring-2 ring-zinc-700 scale-75"
          />
          <div className="text-center justify-center bg-gradient-to-tr from-orange-600 via-orange-500 to-orange-600 ">
            {/* name */}

            <div className="my-8 lg:my-10 space-y-8 text-zinc-900 p-10 lg:p-14">
              <p className="text-3xl lg:text-4xl font-bold text-center">
                {biography.title}
              </p>
              <p className="text-2xl lg:text-3xl font-normal leading-relaxed text-center">
                {biography.body}
              </p>
            </div>
            {/* hero */}
          </div>
        </div>
      </div>
    </div>
  );
}
