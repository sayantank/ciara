import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

const desc =
  "Ciara Heights is a truly mesmerizing boutique estate situated close to the cascading Greenvale Reservoir Park. The canvas of this premium land in Greenvale has been both, painted by Mother Nature and crafted by our experts. Presenting to you the opportunity of enhancing your life, Ciara Heights is all set to cater to your every need. Experiences for enriched living await you here.";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta charSet="utf-8" />
          <meta name="description" content={desc} />
          <meta property="og:title" content="Ciara Heights" key="ogtitle" />
          <meta property="og:description" content={desc} key="ogdesc" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
