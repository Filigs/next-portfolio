import { HiMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

export default function Contacts() {
  const contactIconStyles =
    "items-center text-2xl lg:text-3xl rounded-xl border-4 px-2 pt-2 text-blue-600 border-blue-600";
  const contactCardStyles =
    "flex flex-col items-center gap-4 p-8 rounded-xl bg-inherit";
  const contactTextStyles =
    "text-lg lg:text-xl text-sky-500 font-mono flex-wrap font-bold";
  const contacts = {
    phone: "918203169",
    email: "filipemartins.business@gmail.com",
    github: "https://github.com/Filigs",
  };

  return (
    <div className="flex flex-col lg:justify-around items-center justify-center leading-normal bg-inherit p-20">
      <div
        id={"contacts"}
        className="grid grid-flow-row lg:grid-flow-col gap-4 text-center"
      >
        <div className={contactCardStyles}>
          <section className={contactIconStyles}>
            <button>
              <BsFillTelephoneFill />
            </button>
          </section>
          <p className={contactTextStyles}> {contacts.phone}</p>
        </div>
        <div className={contactCardStyles}>
          <section className={contactIconStyles}>
            <button>
              <HiMail />
            </button>
          </section>

          <p className={contactTextStyles}> {contacts.email}</p>
        </div>
        <div className={contactCardStyles}>
          <section className={contactIconStyles}>
            <button>
              <GoMarkGithub />
            </button>
          </section>

          <p className={contactTextStyles}> {contacts.github}</p>
        </div>
      </div>
    </div>
  );
}
