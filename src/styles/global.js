import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto:300,400,700');
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background-image: -webkit-linear-gradient(45deg, #d74177, #ffe98a);
    background-image: linear-gradient(45deg, #d74177, #ffe98a);
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  .App {
    width: 100%;
    min-width: 320px;
    max-width: 960px;
    margin: 0 auto;
  }

  ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: #c1c1c1;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #c1c1c1;
    opacity:  1;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #c1c1c1;
    opacity:  1;
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #c1c1c1;
  }
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: #c1c1c1;
  }
  ::placeholder { /* Most modern browsers support this now. */
    color: #c1c1c1;
  }
`;

export default GlobalStyles;
