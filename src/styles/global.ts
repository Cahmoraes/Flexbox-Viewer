import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'IBM Plex Mono', monospace;

  }

  img {
    max-width: 100%;
    display: block;
  }

  ul {
    list-style: none
  }

`