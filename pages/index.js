import Head from "next/head";
// import Image from "next/image";
import Experience from "../components/tables";
import About from "../components/about";

const titleName = "Portfolio Filipe Martins";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{titleName}</title>
        <meta
          name="description"
          content="Portfolio generated by create next app and made by Filipe Martins"
        />
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="grid grid-cols-2 mx-auto" id="layout">
          {/* avatar e nome */}

          <section>
            <About />
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
