import { createGlobalStyle } from 'styled-components';

import { medias } from '~/styles';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto:300,400,700');
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
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

  &::-webkit-scrollbar {
    width: 4px;
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color:  #d74177;
  }

  .react-calendar {
    border: none !important;
    width: 100% !important;

    @media ${medias.sm} {
      width: 80% !important;
    }

    font-family: 'Roboto Condensed', sans-serif !important;
    text-decoration: none !important;
    margin: 0 auto;

    .react-calendar__month-view__days__day {
      color: #111;
    }

    .react-calendar__navigation {
      background: #e3717d !important;
      margin: 0;

      button {
        background: #e3717d !important;
        color: #fff !important;

        &:hover {
          background: #e57b7d !important;
        }
      }
    }

    .react-calendar__tile {
      background: #f9f9f9;
    }

    .react-calendar__month-view__days__day--neighboringMonth {
      color: #969696;
    }

    .react-calendar__tile--now {
      color: #d74177;
      font-weight: 900;
    }
  }

  @keyframes pulse {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
        background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
        background-color: rgba(165, 165, 165, 0.1);
    }
  }
`;

export default GlobalStyles;
