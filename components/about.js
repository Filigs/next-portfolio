import Image from "next/image";
import myPicture from "/public/avatar.png";
import { HiMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { motion } from "framer-motion";

export default function About() {
  const name = "Nuno Filipe Martins";
  const role = "Web Developer";
  const dob = "29/05/1993";
  const address = [
    ["Rua Mouzinho de Albuquerque"],
    ["Edificio Lagoa Residence", "Bloco A A6"],
    ["8400 - 384 Lagoa"],
  ];
  const phone = "918203169";
  const email = "filipemartins.business@gmail.com";
  const github = "https://github.com/Filigs";
  const aboutMe =
    "Considero-me ambicioso, trabalhador, carisma, amigável e um excelente profissional.";
  const skills = [
    ["Informática / Tecnologias"],
    [
      "Desde pequeno que uso computadores, já fiz muita reparação, já programei e já tenho muita experiencia no geral.",
    ],
    ["Lingua Inglesa"],
    [
      "Todos os trabalhos que tive, atendi muito cliente estrangeiro, e muitos anos de usar a internet",
    ],
  ];

  return (
    <div className="bg-sky-500 py-8 text-white">
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center items-center justify-center leading-loose">
        <div id={"portrait"} className="rounded text-center justify-center">
          {/* name */}
          <section>
            <p className="text-3xl mb-6 font-bold text-center ">{name}</p>
            <Image
              src={myPicture}
              alt="A picture of me"
              width={250}
              height={250}
              // layout={"responsive"}
              className="bg-white rounded-full"
            />
            {/* fazer botao para expand contacts */}
            {/* <icon>
          <h1>
          <p> */}
          </section>
        </div>

        <div className="items-center rounded">
          <div
            id={"contacts"}
            className="grid grid-flow-row lg:grid-flow-col gap-6 text-center px-10 pt-10"
          >
            <div className="flex flex-col items-center gap-4">
              <section className="items-center text-2xl lg:text-3xl rounded-full border-4 px-2 pt-2  text-yellow-200 border-yellow-200 hover:text-white hover:border-white">
                <button>
                  <BsFillTelephoneFill />
                </button>
              </section>
              <p className="text-md lg:text-lg font-mono flex-wrap"> {phone}</p>
              {/* {phone} */}
            </div>
            <div className="flex flex-col items-center gap-4">
              <section className="items-center text-2xl lg:text-3xl rounded-full border-4 px-2 pt-2  text-yellow-200 border-yellow-200 hover:text-white hover:border-white">
                <button>
                  <HiMail />
                </button>
              </section>
              <p className="text-md lg:text-lg font-mono flex-wrap"> {email}</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <section className="items-center text-2xl lg:text-3xl rounded-full border-4 px-2 pt-2  text-yellow-200 border-yellow-200 hover:text-white hover:border-white">
                <button>
                  <GoMarkGithub />
                </button>
              </section>
              <p className="text-md lg:text-lg font-mono flex-wrap">
                {" "}
                {github}
              </p>
            </div>

            {/* <icon>
          <h1>
          <p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
