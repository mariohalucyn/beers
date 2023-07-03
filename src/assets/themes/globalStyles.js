import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
  }
  
  *, *::before, *::after {
    box-sizing: inherit;
  }
  
  body {
    color: ${({ theme }) => theme.colors.black};
  }
  
  a, button {
    color: ${({ theme }) => theme.colors.black};
  }
`
