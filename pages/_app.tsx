/* eslint-disable react/jsx-key */
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import Store from "store";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "styles/global";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
        <title>Pokedex Next</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
