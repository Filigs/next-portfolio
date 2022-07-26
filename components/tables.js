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
      desc: "Javascript, Python, HTML, CSS... Frameworks: TailwindCSS, NextJs(React)",
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
      <div className="my-4 p-4 mx-auto">
        {/* <div className="bg-sky-600 rounded-full w-6 h-6 mx-auto">
          <a className="invisible text-center">*</a>
        </div> */}
        <div className="flex flex-col">
          {jobs.map((job) => {
            return (
              <div key={job.id} className="text-center px-4 space-y-4">
                <p>
                  {job.nome}
                  {"(" + job.tipo + ")"}
                </p>

                <p className="align-bottom">
                  {job.start} {"->"} {job.end}
                </p>
                <p className="">{job.tipo}</p>
                <p>{job.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
