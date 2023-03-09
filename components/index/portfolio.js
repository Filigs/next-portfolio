import { HiExternalLink } from "react-icons/hi";
import Image from "next/image";
import acepipePic from "/public/acepipe.png";
import portfolioPic from "/public/portfolio.png";
import voilacryptoPic from "/public/voilacrypto.png";
import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      id: 0,
      type: "Website",
      start: "July, 2022",
      title: "Personal CV Website",
      description:
        "My first website using React, it showcases my skills and projects in an interesting way. You can follow up all my progress by clicking the GitHub link.",
      url: "https://nunomartins.dev",
      image: portfolioPic,
    },
    {
      id: 1,
      type: "Website",
      start: "April, 2022",
      title: "en.acepipe.pt - local ice cream shop",
      description:
        "The very first website I made commercially as a Freelancer, made in vanilla JS, HTML5 and CSS3, gathered a lot of information from this project.",
      url: "https://sandbox.acepipe.pt/",
      image: acepipePic,
    },
    {
      id: 2,
      type: "Website",
      start: "December, 2022",
      title: "voilacrypto.io - Gambling / Crypto News",
      description:
        "This is a challenging project and the very base for a future project. This is a juicy one, lots of animations and morden UI practices 🚀",
      url: "https://voilacrypto.io/",
      image: voilacryptoPic,
    },
  ];

  return (
    <div className="mt-30 bg-light dark:bg-dark">
      <div className="max-w-screen-xl py-8 mx-auto lg:py-16 ">
        <div className="max-w-screen-sm mx-auto mb-10 text-center lg:mb-20">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-6xl text-dark dark:text-light">
            {"Welcome to my "}
            <span className="text-primaryHover dark:text-primary">
              {"Portfolio"}
            </span>
          </h2>
          <p className="mt-16 text-xl tracking-wide font-base text-dark dark:text-white lg:text-2xl xl:text-3xl">
            {
              "Stay updated with the current project I'm working at and my best past development experiences!"
            }
          </p>
        </div>
        {/* + "grid-cols-" + projects.length */}
        <div
          className={
            "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mx-4"
          }
        >
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="max-w-screen-xl drop-shadow-lg rounded-xl bg-slate-50 dark:bg-slate-800 "
              >
                <div className="bg-cover rounded-lg h-72">
                  <Image
                    alt={project.title + "'s image"}
                    src={project.image}
                    className="object-cover w-full h-full rounded-t-xl"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="mx-4 mt-8">
                  <h2
                    className="text-3xl font-bold tracking-tight text-primaryHover dark:text-primary"
                    key={project.url}
                  >
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="My portfolio website"
                      className="inline-flex items-center hover:underline"
                    >
                      <span key={project.title}> {project.title}</span>
                    </Link>
                  </h2>
                  <p
                    className="mt-4 text-lg font-light text-dark dark:text-light "
                    key={project.description}
                  >
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mt-8 mb-5 text-slate-500 dark:text-slate-400">
                    <span
                      key={project.type}
                      className="inline-flex items-center text-base font-medium rounded bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800"
                    >
                      {project.type}
                    </span>
                    <span key={project.start} className="text-sm">
                      {project.start}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
