import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
  }

  html {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100%;
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Lato', serif;
    font-size: 1.6rem;
    margin: 0;
  }
`