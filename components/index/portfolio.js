import { HiExternalLink } from "react-icons/hi";
import Image from "next/image";
import acepipePic from "/public/acepipe.png";
import portfolioPic from "/public/portfolio.png";

export default function Portfolio() {
  const projects = [
    {
      id: 0,
      type: "Website",
      start: "July, 2022",
      title: "Personal CV Website",
      description:
        "My first website using React, it showcases my skills and projects in an interesting way.",
      url: "https://tinyurl.com/227wlcg4",
      github: "https://github.com/Filigs/next-portfolio",
      image: portfolioPic,
    },
    {
      id: 1,
      type: "Website",
      start: "April, 2022",
      title: "Acepipe, local ice cream shop",
      description:
        "The very first website I made commercially as a Freelancer, made in vanilla JS, HTML5 and CSS3, gathered a lot of information from this project.",
      url: "https://sandbox.acepipe.pt/",
      github: "https://github.com/Filigs/Acepipe",
      image: acepipePic,
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900">
      <div className="py-8 px-4 lg:py-16 lg:px-6 mx-auto max-w-screen-xl ">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-20 mb-10">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-slate-900 dark:text-white">
            Welcome to my{" "}
            <span className="text-indigo-600 dark:text-sky-500">Portfolio</span>
          </h2>
          <p className="font-light text-slate-500 sm:text-xl dark:text-slate-400">
            {
              "Keep updated with the current project I'm working at and my best past development experiences!"
            }
          </p>
        </div>
        <div className={"grid gap-8 lg:grid-cols-" + projects.length}>
          {" "}
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="p-6 bg-slate-50 rounded-lg border border-slate-200 shadow-md dark:bg-slate-800 dark:border-slate-700 max-w-screen-lg"
              >
                <div className="flex justify-between items-center mb-5 text-slate-500">
                  <span
                    key={project.type}
                    className="bg-primary-100 text-primary-800 text-sm font-medium inline-flex items-center rounded dark:bg-primary-200 dark:text-primary-800"
                  >
                    {project.type}
                  </span>
                  <span key={project.start} className="text-sm">
                    {project.start}
                  </span>
                </div>
                <div className="mx-auto items-center my-8 rounded-lg ">
                  <Image
                    alt={project.title + "'s image"}
                    src={project.image}
                    className="rounded-lg "
                    layout="responsive"
                  />
                </div>
                <h2
                  className="mb-4 text-2xl font-bold tracking-tight text-indigo-600 dark:text-sky-500"
                  key={project.url}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="My portfolio website"
                    className="hover:underline inline-flex items-center"
                  >
                    <span key={project.title}> {project.title}</span>
                    <HiExternalLink className="ml-2 text-slate-900 dark:text-sky-300" />{" "}
                  </a>
                </h2>
                <p
                  className="mb-5 font-light text-slate-900 dark:text-white "
                  key={project.description}
                >
                  {project.description}
                </p>
                <div
                  className="flex justify-end items-center"
                  key={project.github}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="My portfolio website"
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline text-indigo-600 dark:text-sky-500"
                  >
                    <span>Github</span>{" "}
                    <HiExternalLink className="ml-2 text-black dark:text-sky-300" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
