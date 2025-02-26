import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Roboto, Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #F5F5F5;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
