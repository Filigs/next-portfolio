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
    <div className="flex justify-center">
      <div className="grid grid-flow-col items-center space-x-4 rounded-full pr-4 shadow-md">
        <Image
          src={myPicture}
          alt="A picture of me"
          width={145}
          height={145}
          // layout={"responsive"}
          className="bg-sky-500 border-0 rounded-full"
        />
        <div id={"container: " + name} className="space-y-2">
          <strong>{name}</strong>
          <p>{role}</p>
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
