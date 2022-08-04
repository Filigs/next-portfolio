import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class myDocument extends Document {
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
        </Head>

        <body className="text-zinc-900 bg-white dark:bg-slate-900 dark:text-white transition-colors duration-300 antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default myDocument;
