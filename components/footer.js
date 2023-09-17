import Socials from "./socials";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.container}`}>
        <div className="inline-flex flex-col items-center gap-2 text-center lg:flex-row lg:justify-evenly">
          <p className={`${styles.paragraph}`}>
            {"© 2023 "}
            <Link href="https://www.nunomartins.dev">
              <span
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {"Filipe Martins™"}
              </span>
            </Link>
          </p>
          <p className={`${styles.paragraph}`}>{"All Rights Reserved"}</p>
        </div>

        <div className={`${styles.socials}`}>
          <Socials />
        </div>
      </div>
    </footer>
  );
}
