import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css);
  @import url(https://fonts.googleapis.com/css?family=Muli|Ovo);

  html,
  body {
    height: 100%;
    width: 100%;
    font-family: 'Muli', sans-serif;
    color: #212121;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Ovo', serif;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  a {
    color: #03A9F4;
    text-decoration: none;
    &:hover{
      color: #0288D1;
    }
  }

  a.white {
    color: #fff;
    text-decoration: none;
    &:hover{
      font-weight: bold;
    }
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
