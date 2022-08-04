import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Socials() {
  // const contactCardStyles = "flex flex-col items-center rounded-xl bg-inherit";
  // const contactTextStyles =
  //   "text-xl lg:text-2xl flex-wrap font-bold hover:text-indigo-600 dark:hover:text-orange-500";
  const iconStyles =
    "hover:text-indigo-600 dark:hover:text-orange-500 text-lg lg:text-2xl rounded-xl";
  const contacts = {
    phone: "91 820 31 69",
    // email: "filipemartins.business@gmail.com",
    github: "https://github.com/Filigs",
    linkedIn: "https://tinyurl.com/2ac7stjl",
  };
  // links _blank
  // <a href="https://link.to/url" target="_blank" rel="noopener noreferrer"> ... <a/>
  return (
    <ul id={"contacts"} className="flex rounded-xl border-0 md:flex-row gap-2">
      {/* <li className="items-center text-lg lg:text-2xl"> */}
      <span className="sr-only">{"Social Links"}</span>
      {/* </li> */}
      <li className="items-center text-inherit">
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

      <li className="items-center text-inherit">
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
