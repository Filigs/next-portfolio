export default function Experience() {
  // array com escolas
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
  // array com trabalhos
  const jobs = [
    {
      nome: "T Informática",
      tipo: "Estágio",
      desc: "Técnico de Informática, Atendimento ao Cliente",
      start: "01/2011",
      end: "07/2011",
    },
    {
      nome: "Lar dos Usados",
      tipo: "Trabalho por conta própria",
      desc: "Técnico de Informática, Negociação de Produtos, Serviço ao domicilio",
      start: "06/2016",
      end: "07/2017",
    },
    {
      nome: "Intermarché",
      tipo: "Colaborador polivalente",
      desc: "Atendimento ao cliente, Folhas de caixa, Reposição, Cafetaria",
      start: "08/2017",
      end: "04/2018",
    },
    {
      nome: "Cepsa",
      tipo: "Colaborador polivalente",
      desc: "Manutenção, caixa e atendimento ao cliente",
      start: "04/2018",
      end: "07/2018",
    },
    {
      nome: "Unicâmbio S.A",
      tipo: "Responsável de Loja / Tesouraria",
      desc: "Atendimento ao Cliente, Vendas, Negociação de câmbios",
      start: "09/2018",
      end: "12/2021",
    },
    {
      nome: "Web Developer",
      tipo: "Freelancer",
      desc: "Javascript, Python, HTML, CSS... Frameworks: TailwindCSS, NextJs(React)",
      start: "12/2021",
      end: "Momento",
    },
  ];

  for (let i = 0; i < jobs.length; i++) {
    const element = jobs[i];

    return (
      <div className="grid grid-cols-2 gap-4 border-2 shadow-sm sm:container mx-auto rounded-md p-2 ">
        <div className="text-right py-2">
          <p>{element.nome}</p>
          <p className="align-bottom">
            {element.start} {"->"} {element.end}
          </p>
        </div>
        <div className="text-left py-2">
          <p className="">{element.tipo}</p>
          <p>{element.desc}</p>
        </div>
      </div>
    );
  }
}
