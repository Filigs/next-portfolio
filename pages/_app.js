import "../styles/globals.css";
import React from "react";
import Layout from "../components/layout";
<<<<<<< Updated upstream
import { Analytics } from "@vercel/analytics/react";

=======
import Router from "next/router";
import LoadingImage from "../components/loader";
import { SessionProvider } from "next-auth/react";
>>>>>>> Stashed changes
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
<<<<<<< Updated upstream
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
=======
    <SessionProvider session={pageProps.session}>
      <ThemeProvider
        forcedTheme={Component.theme || undefined}
        attribute="class"
      >
        <Layout>
          {loading ? <LoadingImage /> : <Component {...pageProps} />}
        </Layout>
      </ThemeProvider>
    </SessionProvider>
>>>>>>> Stashed changes
  );
}
