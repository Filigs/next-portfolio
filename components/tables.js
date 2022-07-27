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
      start: "01/2011",
      end: "07/2011",
    },
    {
      id: 2,
      nome: "Lar dos Usados",
      tipo: "Trabalho por conta própria",
      desc: "Técnico de Informática, Negociação de Produtos, Serviço ao domicilio",
      start: "06/2016",
      end: "07/2017",
    },
    {
      id: 3,
      nome: "Intermarché",
      tipo: "Colaborador polivalente",
      desc: "Atendimento ao cliente, Folhas de caixa, Reposição, Cafetaria",
      start: "08/2017",
      end: "04/2018",
    },
    {
      id: 4,
      nome: "Cepsa",
      tipo: "Colaborador polivalente",
      desc: "Manutenção, caixa e atendimento ao cliente",
      start: "04/2018",
      end: "07/2018",
    },
    {
      id: 5,
      nome: "Unicâmbio S.A",
      tipo: "Responsável de Loja / Tesouraria",
      desc: "Atendimento ao Cliente, Vendas, Negociação de câmbios",
      start: "09/2018",
      end: "12/2021",
    },
    {
      id: 6,
      nome: "Web Developer",
      tipo: "Freelancer",
      desc: "Javascript, Python, HTML, TailwindCSS, NextJs(React)",
      start: "12/2021",
      end: "Momento",
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
    <div className="block">
      <div className="mx-auto">
        <div className="flex flex-col">
          <p className="py-24 text-center text-3xl font-bold text-slate-800">
            {"Resume"}
          </p>

          {jobs.map((job) => {
            return (
              <div
                key={job.id}
                className="py-8 text-center  text-slate-800 even:bg-sky-500 even:text-white "
              >
                <section className=" max-w-fit mx-auto py-16">
                  <p className="grid grid-rows-2 leading-tight"></p>
                  <span className="font-semibold text-xl"> {job.nome}</span>
                  <span className="font-light"> {" (" + job.tipo + ")"}</span>
                  <p className="pt-4">{job.start + " até " + job.end}</p>
                </section>
                <section className="px-20 pt-8 leading-loose">
                  <p className=" font-serif font-semibold italic">{job.desc}</p>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
