import Document from "next/document";
import styled from "styled-components";
import { ServerStyleSheet } from "styled-components";
import MyApp from "./_app";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<MyApp {...props} ssr={true} />),
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
}

// const LoadingPage = styled.div`
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #181819;
// `;
