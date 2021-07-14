import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    color: #212121;
  }

  body {
    background-color: #212121;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  @media(max-width: 480px) {
    html {
      font-size: 81.25%;
    }
  }

  @media(max-width: 360px) {
    html {
      font-size: 75%;
    }
  }
`;
