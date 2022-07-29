import Image from "next/image";
import myPicture from "/public/avatar.png";
import { motion } from "framer-motion";

export default function Hero() {
  const filipe = {
    name: "Nuno Filipe Martins",
    role: "Web Developer",
    birth: "29/05/1993",
    address: [
      ["Rua Mouzinho de Albuquerque"],
      ["Edificio Lagoa Residence", "Bloco A A6"],
      ["8400 - 384 Lagoa"],
    ],
    about:
      "Considero-me ambicioso, trabalhador, carisma, amigável e um excelente profissional.",
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
    <div className="">
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center items-center justify-center leading-normal py-14 lg:py-20 bg-zinc-800">
        <div id={"portrait"} className="rounded text-center justify-center">
          {/* name */}
          <section>
            <div className="mb-14 lg:mb-20">
              <p className="text-3xl lg:text-4xl font-bold text-center text-blue-600">
                {filipe.name}
              </p>
              <p className="text-2xl lg:text-3xl font-black text-center text-sky-500 font-mono">
                {"<" + filipe.role + " />"}
              </p>
            </div>
            {/* hero */}
            <Image
              src={myPicture}
              alt="A picture of me"
              width={300}
              height={300}
              // layout={"responsive"}
              className="bg-zinc-900 rounded-full ring-2 ring-zinc-700 scale-95"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
