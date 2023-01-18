import { GoCalendar } from "react-icons/go";
export default function Experience() {
  const jobs = [
    {
      id: 1,
      nome: "Web Developer",
      tipo: "Freelancer",
      desc: "Javascript, Python, Django, HTML, TailwindCSS, React (NextJS), Supabase",
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
  // array com trabalhos

  return (
    <div className="block bg-light dark:bg-dark rounded-t-xl">
      <div className="mx-auto">
        <div className="flex flex-col gap-4">
          <section className="p-10 border-0 lg:p-14 bg-light dark:bg-dark rounded-xl">
            <p className="p-4 mx-auto my-8 text-4xl font-black text-center cursor-default lg:text-6xl max-w-fit dark:after:text-light rounded-xl ">
              <span>{"Previous "}</span>
              <span className="text-cta dark:text-darkCta">{"Jobs"}</span>
            </p>
            {jobs.map((job) => {
              return (
                <div
                  key={job.id}
                  className="items-center py-8 my-2 text-center border-t-0 border-b-2 dark:bg-dark xl:mx-36 border-x-0 border-slate-200 dark:border-slate-700"
                >
                  <section className="mx-auto my-4 max-w-fit">
                    <div className="grid grid-flow-row leading-relaxed">
                      {" "}
                      <p className="p-4 text-2xl font-bold text-cta lg:text-3xl xl:text-4xl dark:text-darkCta">
                        {" "}
                        {job.nome}
                      </p>
                      <p className="text-xl font-normal lg:text-2xl xl:text-3xl">
                        {" "}
                        {" (" + job.tipo + ")"}
                      </p>
                    </div>
                    <div className="grid items-center justify-center grid-flow-col grid-rows-2 p-8 my-4 text-lg font-normal gap-x-4 lg:text-xl">
                      <div className="row-span-2 text-4xl lg:text-5xl text-cta dark:text-darkCtaHover">
                        <span>
                          {" "}
                          <GoCalendar />
                        </span>
                      </div>
                      <div className="col-span-2 baseline text-start ">
                        <span> {job.start}</span>
                      </div>
                      <div className="col-span-2 row-span-1 text-start ">
                        <span> {job.end}</span>
                      </div>
                    </div>
                  </section>
                  <section className="px-8 pt-8 leading-loose lg:px-10">
                    <p className="p-4 text-lg font-bold text-cta lg:text-2xl rounded-xl dark:text-darkCtaHover">
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
