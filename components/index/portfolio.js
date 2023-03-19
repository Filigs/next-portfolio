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
    <div className="mt-30 bg-light dark:bg-darkDarker">
      <div className="max-w-screen-xl py-8 mx-auto lg:py-16 ">
        <div className="max-w-screen-sm mx-auto mb-10 text-center lg:mb-20">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-6xl text-darkDarker dark:text-light">
            {"Welcome to my "}
            <span className="text-primaryHover dark:text-primary">
              {"Portfolio"}
            </span>
          </h2>
          <p className="mt-16 text-xl tracking-wide font-base text-darkDarker dark:text-white lg:text-2xl xl:text-3xl">
            {
              "Stay updated with the current project I'm working at and my best past development experiences!"
            }
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mx-4 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="max-w-screen-xl shadow-lg rounded-xl bg-light dark:bg-darkDarker"
              >
                <div className="relative overflow-hidden h-72 rounded-t-xl">
                  <Image
                    alt={project.title + "'s image"}
                    src={project.image}
                    className="object-cover w-full h-full"
                    layout="fill"
                  />
                </div>
                <div className="px-6 py-8">
                  <h2
                    className="mb-4 text-3xl font-bold tracking-tight text-primaryHover dark:text-primary"
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
                      <HiExternalLink className="ml-2" />
                    </Link>
                  </h2>
                  <p
                    className="mb-4 text-lg font-light text-darkDarker dark:text-white"
                    key={project.description}
                  >
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span
                      key={project.type}
                      className="inline-block px-3 py-1 text-base font-medium rounded-full bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800"
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
