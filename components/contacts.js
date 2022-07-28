import { HiMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

export default function Contacts() {
  const contactIconStyles =
    "items-center text-2xl lg:text-3xl rounded-full border-4 px-2 pt-2 text-sky-500 border-sky-500";
  const contactCardStyles =
    "flex flex-col items-center gap-4 p-8 rounded-lg border-0 border-sky-400 shadow-lg shadow-sky-900 bg-white";
  const contactTextStyles = "text-md lg:text-lg font-mono flex-wrap font-bold ";
  const contacts = {
    phone: "918203169",
    email: "filipemartins.business@gmail.com",
    github: "https://github.com/Filigs",
  };

  return (
    <div className="flex flex-col lg:justify-around lg:items-stretch items-center justify-center leading-normal bg-sky-500 p-20">
      <div
        id={"contacts"}
        className="grid grid-flow-row lg:grid-flow-col gap-6 text-center"
      >
        <div className={contactCardStyles}>
          <section className={contactIconStyles}>
            <button>
              <BsFillTelephoneFill />
            </button>
          </section>
          <p className={contactTextStyles}> {contacts.phone}</p>
          {/* {phone} */}
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

        {/* <icon>
          <h1>
          <p> */}
      </div>
    </div>
  );
}
