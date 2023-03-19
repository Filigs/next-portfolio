import { GoCalendar } from "react-icons/go";

const jobs = [
  {
    id: 1,
    nome: "Web Developer",
    tipo: "Freelancer",
    desc: "Javascript, Python, Django, HTML, TailwindCSS, React (NextJS), restAPI, GROQ",
    start: "December 2021",
    end: "Currently",
  },
  {
    id: 2,
    nome: "Unicâmbio S.A",
    tipo: "Store Manager and Treasury",
    desc: "Customer service, Sales, Currency exchange",
    start: "September 2018",
    end: "December 2021",
  },
];

export default function Experience() {
  return (
    <div className="block my-8 bg-light dark:bg-darkDarker rounded-t-xl">
      <div className="grid grid-flow-row mt-16">
        <div className="mt-16 bg-light dark:bg-darkDarker rounded-xl">
          <h1 className="mx-auto mt-8 text-4xl font-black text-center cursor-default lg:text-6xl max-w-fit dark:after:text-light rounded-xl">
            <span>Professional </span>
            <span className="text-primary dark:text-primary">Experience</span>
          </h1>
        </div>
        <div className="block mt-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="grid h-auto max-w-xl grid-flow-row pb-12 mx-auto mt-16 text-center border-b rounded-md dark:bg-darkDarker border-slate-200 dark:border-slate-500"
            >
              <div className="grid grid-flow-row leading-relaxed">
                <h2 className="text-3xl font-bold text-primary lg:text-4xl xl:text-5xl dark:text-primary">
                  {job.nome}
                </h2>
                <p className="text-xl font-normal lg:text-2xl xl:text-3xl">
                  {"(" + job.tipo + ")"}
                </p>
              </div>
              <div className="grid h-auto grid-cols-2 mx-auto mt-16 justify-items-center">
                <div className="self-stretch inline-block h-full">
                  <GoCalendar className="text-4xl lg:text-5xl text-primary dark:text-primaryHover " />
                </div>
                <div className="grid self-stretch grid-flow-row">
                  <p className="inline text-xl text-start">{job.start}</p>
                  <p className="inline text-xl text-start">{job.end}</p>
                </div>
              </div>
              <section className="px-8 mt-16 leading-loose lg:px-10">
                <p className="text-xl font-bold text-primary lg:text-2xl rounded-xl dark:text-primaryHover">
                  {job.desc}
                </p>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
