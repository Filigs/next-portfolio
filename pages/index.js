import Head from "next/head";
// import Image from "next/image";
import Experience from "../components/tables";
import Hero from "../components/hero";
import Contacts from "../components/contacts";

const titleName = "Curriculo Filipe Martins";

export default function Home() {
  return (
    <div className="antialiased bg-zinc-900">
      <Head>
        <title>{titleName}</title>
        <meta
          name="description"
          content="Curriculo pertencente a Filipe Martins"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans">
        <div>
          {/* fazer uma lista com about minimalista, fazer flex col em lg:viewport */}
          <section>
            <Hero />
          </section>
          <section>
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
