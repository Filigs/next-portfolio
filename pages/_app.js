import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
