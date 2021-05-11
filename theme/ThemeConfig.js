import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: '#FFF',
  text: '#2F404D',
  toggleBorder: '#FFF',
  background: '#FFF',
  mainBlue: '#317873',
  hover: '#FF9760',
  menuHover: '#FF9760'
}

export const darkTheme = {
  body: '#112222',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#112222',
  mainBlue: '#85EBD9',
  hover: '#fe60bf',
  menuHover: '#00FFFF'
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`