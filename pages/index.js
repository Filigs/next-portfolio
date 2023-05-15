import Head from "next/head";
import Experience from "../components/index/experience";
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
          content="Nuno Filipe Martins, a web developer that uses React technologies to build responsive, lightweight and UX friendly apps or websites"
        />

        {/* */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        {/* <NavBar /> */}
        <div>
          <section>
            <Hero />
          </section>
          <section>
            <Portfolio />
          </section>
          <section>
            <Experience />
          </section>
        </div>
      </main>
    </div>
  );
}
