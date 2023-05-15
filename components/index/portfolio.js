import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../../lib/projects";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="mx-4 bg-transparent mt-30 dark:bg-transparent">
      <div className="max-w-screen-xl py-8 mx-auto lg:py-16">
        <div className="max-w-screen-sm mx-auto mb-10 text-center lg:mb-20">
          <h2 className="mb-4 text-4xl font-extrabold tracking-wider lg:text-6xl text-primaryHover dark:text-primary">
            {"Welcome to my "}
            <span className="text-primaryHover dark:text-primary">
              {"Portfolio"}
            </span>
          </h2>
          <p className="mt-16 text-xl leading-8 tracking-wide font-base text-darkDarker dark:text-white lg:text-2xl xl:text-3xl">
            {
              "Stay updated with the current project I'm working at and my best past development experiences!"
            }
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            return (
              <Link href={project.url} key={project.id}>
                <motion.div
                  className="max-w-screen-xl transition-shadow duration-300 bg-transparent shadow-lg rounded-xl dark:bg-transparent hover:shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative h-64 overflow-hidden sm:h-72 md:h-80 lg:h-96 rounded-t-xl">
                    <Image
                      alt={project.title + "'s image"}
                      src={project.image}
                      className="object-cover w-full h-full imageContainer"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-8 card-content">
                    <h3 className="mb-4 text-3xl font-bold tracking-tight text-primaryHover dark:text-primary">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-lg font-light leading-relaxed text-darkDarker dark:text-white">
                      {project.description.slice(0, 100) +
                        (project.description.length > 100 ? "..." : "")}
                    </p>

                    <div className="flex flex-wrap items-center justify-between">
                      <span className="inline-block px-3 py-1 mb-2 mr-2 text-base font-medium rounded-full bg-primaryHover text-lighter dark:bg-primary dark:text-light">
                        {project.type}
                      </span>
                      <span className="text-sm text-darkLighter dark:text-lightest">
                        {project.start}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
