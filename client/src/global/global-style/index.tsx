import { createGlobalStyle } from 'styled-components'
import appConfig from '../app/config'
import theme from '../theme'

export const GlobalStyle = createGlobalStyle`
  html {
    overflow-x: hidden;
    font-size: 62.5%;
    font-family: 'archivo', 'arial', sans-serif;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }


  body {
    background: ${theme.color.white};

    margin: 0;
    font-size: 1.6rem;

    &, button, input, option, select, textarea {
      outline: none;
    }

    &.fontLoaded {
      &, button, input, option, select, textarea {
        font-family: ${appConfig.defaultFont}, "Arial", sans-serif;
      }
    }
  }

  .overflowHidden {
    overflow: hidden;
    position: fixed;
  }

  a[class] {
    text-decoration: none;
  }

  button {
    background: none;
    padding: 0;
  }

  ul {
    padding: 0;
    list-style: none;
  }
`
