import "../styles/globals.css";
import React from "react";
import Layout from "../components/layout";
import { Analytics } from "@vercel/analytics/react";
// import { SessionProvider } from "next-auth/react";

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
    <Layout>
      {/* <SessionProvider session={session}> */}
      <Component {...pageProps} />
      <Analytics />
      {/* </SessionProvider> */}
    </Layout>
  );
}
