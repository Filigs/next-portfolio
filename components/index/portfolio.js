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
        "My first website using React, it showcases my skills and projects in an interesting way. You can follow up all my progress by clicking the GitHub link.",
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
    <div className="bg-light dark:bg-dark">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 ">
        <div className="max-w-screen-sm mx-auto mb-10 text-center lg:mb-20">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight lg:text-4xl text-dark dark:text-light">
            {"Welcome to my "}
            <span className="text-hoverLight dark:text-secondaryDark">
              {"Portfolio"}
            </span>
          </h2>
          <p className="font-light text-slate-500 sm:text-xl dark:text-slate-400">
            {
              "Stay updated with the current project I'm working at and my best past development experiences!"
            }
          </p>
        </div>
        {/* + "grid-cols-" + projects.length */}
        <div className={"grid grid-flow-row lg:grid-flow-col gap-8 "}>
          {" "}
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="max-w-screen-xl p-6 border rounded-lg shadow-md bg-slate-50 border-slate-200 dark:bg-slate-800 dark:border-slate-700"
              >
                <div className="flex items-center justify-between mb-5 text-slate-500">
                  <span
                    key={project.type}
                    className="inline-flex items-center text-sm font-medium rounded bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800"
                  >
                    {project.type}
                  </span>
                  <span key={project.start} className="text-sm">
                    {project.start}
                  </span>
                </div>
                <div className="items-center mx-auto my-8 rounded-lg ">
                  <Image
                    alt={project.title + "'s image"}
                    src={project.image}
                    className="rounded-lg "
                    layout="responsive"
                  />
                </div>
                <h2
                  className="mb-4 text-2xl font-bold tracking-tight text-hoverLight dark:text-secondaryDark"
                  key={project.url}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="My portfolio website"
                    className="inline-flex items-center hover:underline"
                  >
                    <span key={project.title}> {project.title}</span>
                    <HiExternalLink className="ml-2 text-dark dark:text-ringDark" />{" "}
                  </a>
                </h2>
                <p
                  className="mb-5 font-light text-dark dark:text-light "
                  key={project.description}
                >
                  {project.description}
                </p>
                <div
                  className="flex items-center justify-end"
                  key={project.github}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="My portfolio website"
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline text-hoverLight dark:text-secondaryDark"
                  >
                    <span>Github</span>{" "}
                    <HiExternalLink className="ml-2 text-black dark:text-ringDark" />
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
