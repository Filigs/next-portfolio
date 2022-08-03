import { BsLinkedin } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

export default function Socials() {
  const contactCardStyles = "flex flex-col items-center rounded-xl bg-inherit";
  const contactTextStyles =
    "text-xl lg:text-2xl flex-wrap font-bold hover:text-indigo-600 dark:hover:text-orange-500";
  const iconStyles = "hover:text-indigo-600 dark:hover:text-orange-500";
  const contacts = {
    phone: "91 820 31 69",
    // email: "filipemartins.business@gmail.com",
    github: "https://github.com/Filigs",
    linkedIn: "https://tinyurl.com/2ac7stjl",
  };
  // links _blank
  // <a href="https://link.to/url" target="_blank" rel="noopener noreferrer"> ... <a/>
  return (
    <ul
      id={"contacts"}
      className="flex flex-col p-4 mt-4 bg-zinc-50 rounded-lg border border-zinc-100 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-zinc-800 md:dark:bg-zinc-900 dark:border-zinc-700"
    >
      <li className="items-center text-xl lg:text-2xl px-2 pt-2 rounded-xl">
        <a
          href={contacts.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          <BsLinkedin />
        </a>
      </li>

      <li className="items-center text-xl lg:text-2xl px-2 pt-2 rounded-xl">
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
