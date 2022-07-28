import Image from "next/image";
import myPicture from "/public/avatar.png";
import { motion } from "framer-motion";

export default function About() {
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
    <div className="py-20 text-sky-900">
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center items-center justify-center leading-normal">
        <div id={"portrait"} className="rounded text-center justify-center">
          {/* name */}
          <section>
            <div className="mb-10">
              <p className="text-2xl lg:text-3xl font-bold text-center text-sky-500">
                {filipe.name}
              </p>
              <p className="text-xl lg:text-2xl font-light text-center text-sky-700 font-mono">
                {"<" + filipe.role + " />"}
              </p>
            </div>
            {/* hero */}
            <Image
              src={myPicture}
              alt="A picture of me"
              width={250}
              height={250}
              // layout={"responsive"}
              className="bg-sky-500 rounded-full"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
