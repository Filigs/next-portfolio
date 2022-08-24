import Head from "next/head";
import Experience from "../components/experience";
import Hero from "../components/index/hero";
import Portfolio from "../components/index/portfolio";
const titleName = "Filipe Martins - Web Developer";

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
        {/* <NavBar /> */}
        <div>
          <section>
            <Hero />
          </section>

          <section>
            <Experience />
          </section>
          <section>
            <Portfolio />
          </section>
        </div>
      </main>
    </div>
  );
}
