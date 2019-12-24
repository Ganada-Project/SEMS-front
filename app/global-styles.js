import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR|Raleway&display=swap');  html,
  body {

    box-sizing: border-box
  }

  body {
    font-family: 'Noto Sans KR', sans-serif !important;
  }

  body.fontLoaded {
    font-family: 'Noto Sans KR', sans-serif !important;
  }

  #app {
    height: 100vh;
    width: 100vw;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  a {
    color: ${props => props.theme.textColor};
    &:hover {
      color: ${props => props.theme.textColor};
    }
  }

  p,h1,h2,h3,h4,h5,h6,
  label {
    font-family: 'Noto Sans KR', sans-serif !important;
    line-height: 1.5em;
  }
  @-webkit-keyframes fadein {
    from {bottom: 0; opacity: 0;} 
    to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes expand {
    from {min-width: 50px} 
    to {min-width: 350px}
}

@keyframes expand {
    from {min-width: 50px}
    to {min-width: 350px}
}
@-webkit-keyframes stay {
    from {min-width: 350px} 
    to {min-width: 350px}
}

@keyframes stay {
    from {min-width: 350px}
    to {min-width: 350px}
}
@-webkit-keyframes shrink {
    from {min-width: 350px;} 
    to {min-width: 50px;}
}

@keyframes shrink {
    from {min-width: 350px;} 
    to {min-width: 50px;}
}

@-webkit-keyframes fadeout {
    from {bottom: 30px; opacity: 1;} 
    to {bottom: 60px; opacity: 0;}
}

@keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 60px; opacity: 0;}
}
`;

export default GlobalStyle;
