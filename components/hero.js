import Image from "next/image";
import myPicture from "/public/avatar.png";
import { motion } from "framer-motion";

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
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center items-center justify-center leading-normal pt-20 lg:pt-24 bg-zinc-900 rounded-full">
        <div id={"portrait"} className="rounded text-center justify-center">
          {/* name */}
          <section>
            <div className="mb-8 lg:mb-10 space-y-4">
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
              className="bg-gradient-to-t from-amber-600 via-amber-500 to-amber-400 rounded-full ring-2 ring-zinc-700 scale-75"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
