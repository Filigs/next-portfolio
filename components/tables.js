import { GoCalendar } from "react-icons/go";
export default function Experience() {
  // array com estudos
  const education = [
    {
      nome: "Espamol",
      tipo: "Ensino Secundário",
      desc: "Técnico de Informática e Gestão de Empresas",
      start: "09/2009",
      end: "07/2011",
    },
    {
      nome: "Ismat",
      tipo: "Universidade",
      desc: "Enganharia Informática, 2 semestres",
      start: "11/2013",
      end: "09/2015",
    },
  ];

  const jobs = [
    {
      id: 1,
      nome: "T Informática",
      tipo: "Estágio",
      desc: "Técnico de Informática, Atendimento ao Cliente",
      start: "Janeiro 2011",
      end: "Julho 2011",
    },
    {
      id: 2,
      nome: "Lar dos Usados",
      tipo: "Trabalho por conta própria",
      desc: "Técnico de Informática, Negociação de Produtos, Serviço ao domicilio",
      start: "Junho 2016",
      end: "Julho 2017",
    },
    {
      id: 3,
      nome: "Intermarché",
      tipo: "Colaborador polivalente",
      desc: "Atendimento ao cliente, Folhas de caixa, Reposição, Cafetaria",
      start: "Agosto 2017",
      end: "Abril 2018",
    },
    {
      id: 4,
      nome: "Cepsa",
      tipo: "Colaborador polivalente",
      desc: "Manutenção, caixa e atendimento ao cliente",
      start: "Abril 2018",
      end: "Julho 2018",
    },
    {
      id: 5,
      nome: "Unicâmbio S.A",
      tipo: "Responsável de Loja & Tesouraria",
      desc: "Atendimento ao Cliente, Vendas, Negociação de câmbios",
      start: "Setembro 2018",
      end: "Dezembro 2021",
    },
    {
      id: 6,
      nome: "Web Developer",
      tipo: "Freelancer",
      desc: "Javascript, Python, HTML, TailwindCSS, NextJs(React)",
      start: "Dezembro 2021",
      end: "Presente",
    },
  ];
  // array com trabalhos

  // por cada objecto dos arrays, quero que me de output ao return(...)
  // for (let i = 0; i < jobs.length; i++) {
  //   const job = jobs[i];
  //   for (const name in job) {
  //     if (Object.hasOwnProperty.call(job, name)) {
  //       const element = job[name];
  //     }
  //   }
  // }

  return (
    <div className="block bg-inherit rounded-t-xl my-4">
      <div className="mx-auto">
        <div className="flex flex-col gap-4">
          <section className="p-10 lg:p-14 text-center text-4xl xl:text-5xl font-black text-blue-600 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 span rounded-xl border-x-0 border-b-4 border-t-2 border-zinc-700">
            {"{ Curriculo }"}
          </section>
          {jobs.map((job) => {
            return (
              <div
                key={job.id}
                py-14
                // lg:py-20
                className="text-center bg-zinc-800 rounded-xl items-center my-2 py-8 xl:mx-36 border-x-2 border-b-4 border-t-2 border-zinc-700 shadow-sm shadow-zinc-500"
              >
                <section className="max-w-fit mx-auto">
                  <div className="grid grid-flow-row leading-relaxed">
                    {" "}
                    <p className="font-bold text-xl lg:text-2xl xl:text-3xl text-yellow-500">
                      {" "}
                      {job.nome}
                    </p>
                    <p className="font-normal text-lg text-yellow-300">
                      {" "}
                      {" (" + job.tipo + ")"}
                    </p>
                  </div>
                  <div className="grid grid-flow-col grid-rows-2 p-8 gap-x-4 items-center font-normal text-lg lg:text-xl">
                    <div className="row-span-2 text-4xl lg:text-5xl text-end text-blue-600">
                      <GoCalendar />
                    </div>
                    <div className="col-span-2 baseline text-start text-sky-500">
                      {job.start}
                    </div>
                    <div className="row-span-1 col-span-2 text-start text-blue-500">
                      {job.end}
                    </div>
                  </div>
                </section>
                <section className="px-14 lg:px-20 pt-8 leading-loose">
                  <p className=" font-light text-lg lg:text-xl rounded-xl p-8 bg-zinc-700 text-yellow-300 border-x-2 border-b-4 border-t-2 border-zinc-500 shadow-sm shadow-zinc-700">
                    {job.desc}
                  </p>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
