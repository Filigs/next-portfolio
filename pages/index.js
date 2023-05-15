import Head from "next/head";
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
      <main>
        {/* <NavBar /> */}
        <div>
          <>
            <Hero />
          </>
          <>
            <Portfolio />
          </>
        </div>
      </main>
    </div>
  );
}
