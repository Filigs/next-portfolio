import Head from "next/head";
// import Image from "next/image";
import Experience from "../components/tables";
import Hero from "../components/hero";
import Contacts from "../components/contacts";

const titleName = "Curriculo Filipe Martins";

// links _blank
// <a href="https://link.to/url" target="_blank" rel="noopener noreferrer"> ... <a/>

export default function Home() {
  // if (
  //   localStorage.theme === "dark" ||
  //   (!("theme" in localStorage) &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches)
  // ) {
  //   document.documentElement.classList.add("dark");
  // } else {
  //   document.documentElement.classList.remove("dark");
  // }
  // localStorage.theme = "dark";
  return (
    <div className="antialiased bg-white dark:bg-zinc-900 text-black dark:text-white">
      <Head>
        <title>{titleName}</title>
        <meta
          name="description"
          content="Curriculo pertencente a Filipe Martins"
        />

        {/* */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          {/* fazer uma lista com about minimalista, fazer flex col em lg:viewport */}
          <section>
            <Hero />
            <Contacts />
          </section>

          <section>
            <Experience />
          </section>
        </div>

        {/* content here */}
      </main>

      <footer>{/* social links here */}</footer>
    </div>
  );
}
