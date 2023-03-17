import Head from "next/head";
import Experience from "../components/experience";
// import Hero from "../components/index/hero";
import Landing from "../components/index/landing";
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
      <main>
        {/* <NavBar /> */}
        <div>
          <section>
            {/* <Hero /> */}
            <Landing />
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
