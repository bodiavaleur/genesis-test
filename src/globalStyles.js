import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #FF8B37;
    --white: #fff;
    --semi-orange: #FFF3EB;
    --orange-light: #FFAC70;
    --orange-dark: #E87928;
    --bg-gray: #F5F5F7;
    --border: #D0D0D8;
    --text-black: #1C1C21;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  html {
    font-size: 16px;
  }

  html,body, #root {
    width: 100%;
    height: 100%;
  }

  #root {
    display: flex;
  }

  @media screen and (min-width: 1440px) {
    html {
      font-size: 24px;
    }
  }

  @media screen and (min-width: 2560px) {
    html {
      font-size: 40px;
    }
  }
`;
