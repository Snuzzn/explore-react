import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  

  body {
    margin: 0;
    font-family:  'DM Sans', 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #181819;
    color: white;
    font-size: 18pt;
  }

  :root {
    color-scheme: dark;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }


  input:focus {
    outline: none !important;
    border: 2px solid #5773FF;
    box-shadow: 0 0 2px #425ad3;
  }

  /* https://www.joshwcomeau.com/css/custom-css-reset/
    License: none (public domain)
  */

  /*
  Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
  box-sizing: border-box;
  }

  /*
  Remove default margin
  More appropriate line heights for normal text and headings
  */
  * {
  line-height: calc(1em + 0.5rem);
  }



  /*
  Improve text rendering
  */
  body {
  -webkit-font-smoothing: antialiased;
  }

  /*
  Improve media defaults
  */
  img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
  }

  /*
  Remove built-in form typography styles
  */
  input, button, textarea, select {
  font: inherit;
  }

  /*
  Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
  }

  /*
  Create a root stacking context to avoid z-index issues
  with ui elements like modals
  */
  #root, #__next {
  isolation: isolate;
  }


  html, body, #root, #__next {
    height: 100%;
  }
  

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
