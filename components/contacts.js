import { BsLinkedin } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

export default function Contacts() {
  const contactCardStyles =
    "flex flex-col items-center gap-6 py-4 rounded-xl bg-inherit";
  const contactTextStyles =
    "text-xl lg:text-2xl text-sky-500 flex-wrap font-bold";
  const contacts = {
    phone: "91 820 31 69",
    // email: "filipemartins.business@gmail.com",
    github: "https://github.com/Filigs",
    linkedIn: "https://tinyurl.com/2ac7stjl",
  };
  // links _blank
  // <a href="https://link.to/url" target="_blank" rel="noopener noreferrer"> ... <a/>
  return (
    <div className="flex flex-col items-center justify-center leading-normal rounded-xl border-x-0 border-t-0 border-b-4 border-zinc-700 bg-inherit my-2">
      <div id={"contacts"} className="grid grid-flow-col text-center gap-6">
        <div className={contactCardStyles}>
          <p className={contactTextStyles}> {"LinkedIn"}</p>
          <section className="items-end text-3xl lg:text-4xl px-2 pt-2 rounded-xl border-x-2 border-b-4 border-t-2 border-blue-600 hover:shadow-md hover:shadow-blue-500 text-blue-600">
            <button>
              <a
                href={contacts.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
            </button>
          </section>
        </div>
        <div className={contactCardStyles}>
          <p className={contactTextStyles}> {"GitHub"}</p>
          <section className="items-end text-3xl lg:text-4xl px-2 pt-2 rounded-xl border-x-2 border-b-4 border-t-2 border-blue-600 hover:shadow-md hover:shadow-blue-500 text-blue-600">
            <button>
              <a
                href={contacts.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GoMarkGithub />
              </a>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
