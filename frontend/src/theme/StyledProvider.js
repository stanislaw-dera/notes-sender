import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {theme} from './theme'

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 20px;
  }
  
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }
`;


export default function StyledProvider({children}) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            {children}
        </ThemeProvider>
    )
}
