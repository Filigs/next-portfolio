import { BsLinkedin } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

export default function Contacts() {
  const contactCardStyles =
    "flex flex-col items-center gap-2 py-4 rounded-xl bg-inherit";
  const contactTextStyles =
    "text-xl lg:text-2xl flex-wrap font-bold hover:text-orange-500";
  const iconStyles = "text-orange-500";
  const contacts = {
    phone: "91 820 31 69",
    // email: "filipemartins.business@gmail.com",
    github: "https://github.com/Filigs",
    linkedIn: "https://tinyurl.com/2ac7stjl",
  };
  // links _blank
  // <a href="https://link.to/url" target="_blank" rel="noopener noreferrer"> ... <a/>
  return (
    <div className="flex flex-col items-center justify-center leading-normal rounded-xl border-0 bg-inherit my-2">
      <div id={"contacts"} className="grid grid-flow-col text-center gap-6">
        <div className={contactCardStyles}>
          <section className="items-end text-3xl lg:text-4xl px-2 pt-2 rounded-full">
            <button className={iconStyles}>
              <BsLinkedin />
            </button>
          </section>
          <a
            href={contacts.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className={contactTextStyles}
          >
            {" "}
            {"LinkedIn"}
          </a>
        </div>
        <div className={contactCardStyles}>
          <section className="items-end text-3xl lg:text-4xl px-2 pt-2 rounded-full">
            <button className={iconStyles}>
              <GoMarkGithub />
            </button>
          </section>
          <p className={contactTextStyles}>
            {" "}
            <a
              href={contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className={contactTextStyles}
            >
              {" "}
              {"GitHub"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
