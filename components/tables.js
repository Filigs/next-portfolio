import { GoCalendar } from "react-icons/go";
export default function Experience() {
  const jobs = [
    {
      id: 1,
      nome: "Web Developer",
      tipo: "Freelancer",
      desc: "Javascript, Python, HTML, TailwindCSS, React (NextJS)",
      start: "December 2021",
      end: "Currently",
    },
    {
      id: 2,

      nome: "Unicâmbio S.A",
      tipo: "Store Manager and ",
      desc: "Customer service, Sales, Currency exchange",
      start: "September 2018",
      end: "December 2021",
    },
    {
      id: 3,
      nome: "Cepsa",
      tipo: "Multipurpose Collaborator",
      desc: "Maintenance, Cashier, Customer service",
      start: "April 2018",
      end: "July 2018",
    },
    {
      id: 4,
      nome: "Intermarché",
      tipo: "Multipurpose Collaborator",
      desc: "Customer Service, Cashier Spreadsheets, Replacement, Cafeteria",
      start: "August 2017",
      end: "April 2018",
    },
    {
      id: 5,
      nome: "Lar dos Usados",
      tipo: "Self-Employed",
      desc: "Computer Technician, Product Negotiaton, Home Service",
      start: "June 2016",
      end: "July 2017",
    },
    {
      id: 6,
      nome: "T Informática",
      tipo: "Internship",
      desc: "Computer Technician, Customer service",
      start: "January 2011",
      end: "July 2011",
    },
  ];
  // array com trabalhos

  return (
    <div className="block bg-inherit rounded-t-xl">
      <div className="mx-auto">
        <div className="flex flex-col gap-4">
          <section className="p-10 lg:p-14 bg-inherit dark:bg-inherit span rounded-xl border-0">
            <p className="cursor-default text-center text-4xl lg:text-6xl font-black my-8 max-w-fit mx-auto dark:after:text-white p-4 rounded-xl ">
              {" "}
              <span>{"Previous "}</span>
              <span className="text-indigo-700 dark:text-sky-500">
                {"Jobs"}
              </span>
            </p>
            {jobs.map((job) => {
              return (
                <div
                  key={job.id}
                  className="text-center dark:bg-slate-900 items-center my-2 py-8 xl:mx-36 border-x-0 border-t-0 border-b-2 border-slate-200 dark:border-slate-700"
                >
                  <section className="max-w-fit mx-auto my-4">
                    <div className="grid grid-flow-row leading-relaxed">
                      {" "}
                      <p className="font-bold p-4 text-2xl lg:text-3xl xl:text-4xl text-indigo-600 dark:text-sky-500">
                        {" "}
                        {job.nome}
                      </p>
                      <p className="font-normal text-xl lg:text-2xl xl:text-3xl">
                        {" "}
                        {" (" + job.tipo + ")"}
                      </p>
                    </div>
                    <div className="grid grid-flow-col grid-rows-2 p-8 my-4 gap-x-4 items-center justify-center font-normal text-lg lg:text-xl">
                      <div className="row-span-2 text-4xl lg:text-5xl text-sky-600 dark:text-sky-300">
                        <span>
                          {" "}
                          <GoCalendar />
                        </span>
                      </div>
                      <div className="col-span-2 baseline text-start ">
                        <span> {job.start}</span>
                      </div>
                      <div className="row-span-1 col-span-2 text-start ">
                        <span> {job.end}</span>
                      </div>
                    </div>
                  </section>
                  <section className="px-8 lg:px-10 pt-8 leading-loose">
                    <p className="font-bold text-lg lg:text-2xl rounded-xl p-4 text-indigo-700  dark:text-sky-400">
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
