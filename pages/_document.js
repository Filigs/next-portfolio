import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import Script from "next/script";

class myDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Exo&display=swap"
            rel="stylesheet"
          />
          <Script src="..\node_modules\flowbite\dist\flowbite.js" />
        </Head>
        {/* <!-- Google tag (gtag.js) --> */}
        {/* <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K87HSVX1J2"
        />
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
            function gtag(){
              dataLayer.push(arguments);
            }
            gtag('js', new Date());

                gtag('config', 'G-K87HSVX1J2');
            `}
        </Script> */}

        <body className="text-zinc-900 bg-white dark:bg-slate-900 dark:text-white transition-colors duration-300 antialiased">
          <div id="modal-root"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default myDocument;
