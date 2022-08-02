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
      nome: "Web Developer",
      tipo: "Freelancer",
      desc: "Javascript, Python, HTML, TailwindCSS, NextJs (React)",
      start: "December 2021",
      end: "Currently",
    },
    {
      id: 2,

      nome: "Unicâmbio S.A",
      tipo: "Responsável de Loja & Tesouraria",
      desc: "Customer service, Sales, Currency exchange",
      start: "Setembro 2018",
      end: "December 2021",
    },
    {
      id: 3,
      nome: "Cepsa",
      tipo: "Colaborador polivalente",
      desc: "Maintenance, Cashier, Customer service",
      start: "April 2018",
      end: "July 2018",
    },
    {
      id: 4,
      nome: "Intermarché",
      tipo: "Colaborador polivalente",
      desc: "Customer Service, Folhas de caixa, Reposição, Cafetaria",
      start: "August 2017",
      end: "April 2018",
    },
    {
      id: 5,
      nome: "Lar dos Usados",
      tipo: "Trabalho por conta própria",
      desc: "Computer Technician, Product Negotiaton, Home Service",
      start: "Junho 2016",
      end: "July 2017",
    },
    {
      id: 6,
      nome: "T Informática",
      tipo: "Estágio",
      desc: "Técnico de Informática, Atendimento ao Cliente",
      start: "Janeiro 2011",
      end: "July 2011",
    },
  ];
  // array com trabalhos

  return (
    <div className="block bg-inherit rounded-t-xl">
      <div className="mx-auto">
        <div className="flex flex-col gap-4">
          <section className="p-10 lg:p-14 dark:bg-zinc-900 span rounded-xl border-0">
            <p className="cursor-default text-center text-4xl lg:text-6xl font-black my-8 max-w-fit mx-auto dark:after:text-white p-4 rounded-xl ">
              {" "}
              <span>{"Previous "}</span>
              <span className="text-indigo-700 dark:text-orange-500">
                {"Jobs"}
              </span>
            </p>
            {jobs.map((job) => {
              return (
                <div
                  key={job.id}
                  className="text-center dark:bg-zinc-900 items-center my-2 py-8 xl:mx-36 border-x-0 border-t-0 border-b-2 dark:border-zinc-800"
                >
                  <section className="max-w-fit mx-auto my-4">
                    <div className="grid grid-flow-row leading-relaxed">
                      {" "}
                      <p className="font-bold text-2xl lg:text-3xl xl:text-4xl">
                        {" "}
                        {job.nome}
                      </p>
                      <p className="font-normal text-xl lg:text-2xl xl:text-3xl ">
                        {" "}
                        {" (" + job.tipo + ")"}
                      </p>
                    </div>
                    <div className="grid grid-flow-col grid-rows-2 p-8 my-4 gap-x-4 items-center font-normal text-lg lg:text-xl">
                      <div className="row-span-2 text-4xl lg:text-5xl text-end text-sky-600 dark:text-sky-300">
                        <GoCalendar />
                      </div>
                      <div className="col-span-2 baseline text-start ">
                        {job.start}
                      </div>
                      <div className="row-span-1 col-span-2 text-start ">
                        {job.end}
                      </div>
                    </div>
                  </section>
                  <section className="px-14 lg:px-20 pt-8 leading-loose">
                    <p className="gap-2 font-bold text-lg lg:text-xl rounded-xl p-4 text-white bg-gradient-to-tr from-indigo-600 via-indigo-700 to-indigo-600 dark:from-orange-500 dark:via-orange-600 dark:to-orange-500 dark:text-zinc-900">
                      {job.desc}
                    </p>
                  </section>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
}
