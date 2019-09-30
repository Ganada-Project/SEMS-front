import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR|Raleway&display=swap');  html,
  body {
    height: 100vh;
    width: 100vw;
    box-sizing: border-box
  }

  body {
    font-family: 'Noto Sans KR', sans-serif !important;
  }

  body.fontLoaded {
    font-family: 'Noto Sans KR', sans-serif !important;
  }

  #app {
    height: 100%;
    width: 100%;
  }

  p,h1,h2,h3,h4,h5,h6,
  label {
    font-family: 'Noto Sans KR', sans-serif !important;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
