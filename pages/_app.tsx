import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";
import Head from "next/head";
import "./_app.css";
import { AppProps } from "next/app";

const desc =
  "Ciara Heights is a truly mesmerizing boutique estate situated close to the cascading Greenvale Reservoir Park. The canvas of this premium land in Greenvale has been both, painted by Mother Nature and crafted by our experts. Presenting to you the opportunity of enhancing your life, Ciara Heights is all set to cater to your every need. Experiences for enriched living await you here.";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Ellen-Luff";
    src: url("/fonts/EllenLuff-LarkenMedium.otf");
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: "Ellen-Luff";
    src: url("/fonts/EllenLuff-LarkenRegular.otf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  body {
    font-family: 'Poppins', sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
`;

const theme = {
  colors: {
    blue: "#002951",
    gold: "#d3c48f",
    darkgold: "#c8ba87",
    gray: "#f5f5f5",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [curr, setCurr] = useState("");
  useEffect(() => {
    // console.log(router.pathname);
    setCurr(router.pathname);
  }, [router.pathname]);

  return (
    <div>
      <Head>
        <title>Ciara Heights</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content={desc} />
        <meta property="og:title" content="Ciara Heights" key="ogtitle" />
        <meta property="og:description" content={desc} key="ogdesc" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar curr={curr} />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

// App.getServer = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };

// App.getInitialProps = async ({ Component, ctx }) => {
//   const pageProps = Component.getInitialProps
//     ? await Component.getInitialProps(ctx)
//     : {};
//   if (Object.keys(pageProps).length > 0) {
//     return { pageProps };
//   } else {
//     return {};
//   }
// };
