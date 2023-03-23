import { GoCalendar } from "react-icons/go";
import { jobs } from "../../lib/jobs";

export default function Experience() {
  return (
    <div className="mx-4 my-8 bg-lighter dark:bg-gray-800 rounded-t-xl">
      <div className="grid grid-flow-row mt-16">
        <div className="mt-16 bg-lighter dark:bg-gray-800 rounded-xl">
          <h1 className="mx-auto mt-8 text-4xl font-black text-center text-gray-900 cursor-default lg:text-6xl max-w-fit dark:text-gray-100">
            <span>Professional </span>
            <span className="text-primary dark:text-primaryHover">
              Experience
            </span>
          </h1>
        </div>
        <div className="grid gap-8 mt-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="grid max-w-md grid-cols-1 gap-6 p-8 mx-auto mt-16 border-2 border-gray-200 rounded-md shadow-md bg-lightest dark:bg-darkMedium dark:border-gray-600"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-primary lg:text-4xl xl:text-5xl dark:text-primaryHover">
                  {job.nome}
                </h2>
                <p className="text-xl font-normal text-gray-700 lg:text-2xl xl:text-3xl dark:text-gray-300">
                  {"(" + job.tipo + ")"}
                </p>
              </div>
              <div className="flex items-center justify-center mt-6">
                <GoCalendar className="mr-4 text-4xl text-primary lg:text-5xl dark:text-primaryHover" />
                <div>
                  <p className="text-xl text-gray-700 text-start dark:text-gray-300">
                    {job.start}
                  </p>
                  <p className="text-xl text-gray-700 text-start dark:text-gray-300">
                    {job.end}
                  </p>
                </div>
              </div>
              <section className="mt-6">
                <p className="text-xl font-bold text-center text-primary lg:text-2xl dark:text-primaryHover">
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
