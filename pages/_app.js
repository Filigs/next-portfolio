import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
  usePageViews(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <GoogleAnalytics />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
