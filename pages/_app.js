import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Router from "next/router";
import LoadingImage from "../components/loader";
import { Analytics } from "@vercel/analytics/react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      // console.log("start");
      setLoading(true);
    };
    const end = () => {
      // console.log("finished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <Layout>
        {loading ? <LoadingImage /> : <Component {...pageProps} />}
        <Analytics />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
