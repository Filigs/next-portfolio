import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Socials() {
  const iconStyles =
    "hover:text-indigo-600 dark:hover:text-orange-500 text-lg lg:text-2xl rounded-xl";
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
      <li className="items-center p-1 lg:p-2 text-inherit">
        <a
          href={contacts.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
          alt="LinkedIn Profile"
        >
          <BsLinkedin />
          <span className="sr-only">{"Linkedin Profile"}</span>
        </a>
      </li>

      <li className="items-center p-1 lg:p-2 text-inherit">
        <a
          href={contacts.github}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
          alt="Github Profile"
        >
          <BsGithub />
          <span className="sr-only">{"Github Profile"}</span>
        </a>
      </li>
    </ul>
  );
}
