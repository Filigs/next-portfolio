import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Socials() {
  const contacts = {
    github: "https://github.com/Filigs",
    linkedIn: "https://www.linkedin.com/in/nunomartinsdev/",
  };
  return (
    <ul id={"contacts"} className="flex border-0 rounded-xl md:flex-row">
      <span className="sr-only">{"Social Links"}</span>
      <li className="items-center p-1 text-lg lg:p-2 text-dark dark:text-light hover:text-primaryHover dark:hover:text-primaryHover lg:text-2xl xl:text-4xl rounded-xl">
        <a
          href={contacts.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          alt="LinkedIn Profile"
        >
          <BsLinkedin />
          <span className="sr-only">{"Linkedin Profile"}</span>
        </a>
      </li>

      <li className="items-center p-1 text-lg lg:p-2 text-dark dark:text-light hover:text-primaryHover dark:hover:text-primaryHover lg:text-2xl xl:text-4xl rounded-xl">
        <a
          href={contacts.github}
          target="_blank"
          rel="noopener noreferrer"
          alt="Github Profile"
        >
          <BsGithub />
          <span className="sr-only">{"Github Profile"}</span>
        </a>
      </li>
    </ul>
  );
}
