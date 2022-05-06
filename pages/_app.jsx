import SiteLayout from "components/SiteLayout";
import Head from "next/head";
import { Suspense } from "react";
import styled from "styled-components";
import ThemeProvider from "../context/ThemeProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <title>Explore React</title>
      </Head>
      <ThemeProvider>
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
