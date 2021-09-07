import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
      --lightGray: #E5E5E5;
      --orangeCore: #F67537;
      --darkGray: #B7B9B9;
      --grayHome: #D1D3D4;
      --white: #fff;
      --lightOrange: #FFBC33;
      --fontDarkGray: #817878;
      --fontLightGray: #B7B9B9;
      --orangeStandOut: #E99C00;
      --greenFormBkgd: #A0AF29;
      --greenInputBkgd: #C7DA39;
      --red: #DA4C39;
      --black: #000;
      --grayStandOut: #7E7E7E;
  }

  body {
    background-color: var(---lightGray);
    font-family: 'Comfortaa', cursive;
    -webkit-font-smoothing: antialiased !important
  }

  body, input, button {
    font-family: 'Comfortaa', cursive;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }
`;
