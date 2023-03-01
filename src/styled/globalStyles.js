import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  header {
    background: ${({ theme }) => theme.body === '#FFF' ? 'rgb(50, 128, 111)': 'rgb(29, 36, 29)'}
  }
  button {
    background: ${({ theme }) => theme.body === '#FFF' ? 'rgb(212, 255, 241)' : 'rgb(250, 242, 192)'}
  }
  `
