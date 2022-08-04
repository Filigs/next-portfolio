import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Socials() {
  const contacts = {
    // email: "filipemartins.business@gmail.com",
    github: "https://github.com/Filigs",
    linkedIn: "https://tinyurl.com/2ac7stjl",
  };
  // links _blank
  // <a href="https://link.to/url" target="_blank" rel="noopener noreferrer"> ... <a/>
  return (
    <ul id={"contacts"} className="flex rounded-xl border-0 md:flex-row">
      {/* <li className="items-center text-lg lg:text-2xl"> */}
      <span className="sr-only">{"Social Links"}</span>
      {/* </li> */}
      <li className="items-center p-1 lg:p-2 hover:-translate-y-1 hover:scale-110 text-inherit hover:text-indigo-600 hover:bg-indigo-600 dark:hover:text-sky-600 text-lg lg:text-2xl rounded-xl transition-all duration-300">
        <a
          href={contacts.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          // className="hover:text-indigo-600 dark:hover:text-blue-300 dark:hover:bg-blue-300 text-lg lg:text-2xl rounded-xl transition-colors duration-150"
          alt="LinkedIn Profile"
        >
          <BsLinkedin />
          <span className="sr-only">{"Linkedin Profile"}</span>
        </a>
      </li>

      <li className="items-center p-1 lg:p-2 hover:-translate-y-1 hover:scale-110 text-inherit hover:text-indigo-600 hover:bg-indigo-600 dark:hover:text-sky-600 text-lg lg:text-2xl rounded-xl transition-all duration-300">
        <a
          href={contacts.github}
          target="_blank"
          rel="noopener noreferrer"
          // // className="hover:text-indigo-600 dark:hover:text-blue-300 dark:hover:bg-blue-300 text-lg lg:text-2xl rounded-xl transition-colors duration-150"
          alt="Github Profile"
        >
          <BsGithub />
          <span className="sr-only">{"Github Profile"}</span>
        </a>
      </li>
    </ul>
  );
}
