import { BsLinkedin } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

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
    <ul id={"contacts"} className="flex rounded-lg border-0 md:flex-row gap-2">
      {/* <li className="items-center text-lg lg:text-2xl"> */}
      <span className="font-light text-xl mr-2">{"Socials "}</span>
      {/* </li> */}
      <li className="items-center">
        <a
          href={contacts.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          <BsLinkedin />
        </a>
      </li>

      <li className="items-center">
        <a
          href={contacts.github}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          <GoMarkGithub />
        </a>
      </li>
    </ul>
  );
}
