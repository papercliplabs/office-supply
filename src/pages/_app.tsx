import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import React, { useEffect } from "react";
import { GlobalStyle } from "@theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Head>

  </Head>
				<GlobalStyle />
					<Component {...pageProps} />
  </>
  );
}

export default MyApp