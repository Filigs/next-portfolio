import Image from "next/image";
import myPicture from "/public/avatar.png";
// vars
const name = "Nuno Filipe Martins";
const role = "Web Developer";
const dob = "29/05/1993";
const address = [
  ["Rua Mouzinho de Albuquerque"],
  ["Edificio Lagoa Residence", "Bloco A A6"],
  ["8400 - 384 Lagoa"],
];
const phone = "(+351) 918203169";
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

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-around items-center justify-center bg-sky-500 py-20 shadow-md text-white leading-loose">
      <div id={"portrait"} className="rounded text-center justify-center">
        <section>
          <strong className="">{name}</strong>
          <p>{role}</p>
          <p>{dob}</p>
        </section>
        {/* imagem */}
        <section>
          <Image
            src={myPicture}
            alt="A picture of me"
            width={250}
            height={250}
            // layout={"responsive"}
            className="bg-sky-300 rounded-full"
          />
          {/* <icon>
          <h1>
          <p> */}
        </section>
      </div>

      <div className="items-center rounded text-justify lg:text-end">
        <div id={"contacts"} className="grid grid-flow-row">
          <a>{phone}</a>
          <a>{email}</a>
          <a>{github}</a>

          {/* <icon>
          <h1>
          <p> */}
        </div>
      </div>
    </div>
  );
}
//   {/* <div className="block"></div> */}
//   {/* Data de nascimento, morada, contactos */}
//   <div id="contacts" className="">
//     <div id={"container: " + name} className="">
//       <p>{name}</p>
//       <p>{dob}</p>
//       {/* <icon>
//       <h1>
//       <p> */}
//     </div>
//     <div id={"container: " + phone} className="">
//       <p>{phone}</p>
//     </div>
//     <div id={"container: " + email} className="">
//       <p>{email}</p>
//     </div>
//     <div id={"container: " + github} className="">
//       <p>{github}</p>
//     </div>
//   </div>
// </div >
//   </div>
