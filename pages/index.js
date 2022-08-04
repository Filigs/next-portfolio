import Head from "next/head";
// import Image from "next/image";
import Experience from "../components/tables";
import Hero from "../components/hero";
import NavBar from "../components/navbar";

const titleName = "Filipe Martins, Web Developer &";

export default function Home() {
  return (
    <div>
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
        <NavBar />
        <div>
          {/* fazer uma lista com about minimalista, fazer flex col em lg:viewport */}
          <section>
            <Hero />
          </section>

          <section>
            <Experience />
          </section>
        </div>
        {/* <section>
          <ContactForm />
        </section> */}
      </main>

      <footer>{/* social links here */}</footer>
    </div>
  );
}
