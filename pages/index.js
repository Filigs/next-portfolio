import Head from "next/head";
// import Image from "next/image";
import Experience from "../components/tables";
import Hero from "../components/hero";
import NavBar from "../components/navbar";
import Portfolio from "../components/portfolio";
import Footer from "../components/footer";

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
        <NavBar />
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

      <Footer />
    </div>
  );
}
