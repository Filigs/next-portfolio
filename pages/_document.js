import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo&display=swap"
          rel="stylesheet"
        />

        <Script id="show-banner" strategy="lazyOnload">
          {`
            if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        } else {
        document.documentElement.classList.remove('dark')
        }
        `}
        </Script>
      </Head>

      <body className="antialiased bg-white dark:bg-zinc-900 text-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
