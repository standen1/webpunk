import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: 'radial-gradient(circle, #fff 10%, #e2e5de 90%)',
  text: '#2F404D',
  toggleBorder: '#FFF',
  background: '#FFF',
  headerBackground: '#fff',
  mainBlue: '#317873',
  hover: '#FF9760',
  menuHover: '#FF9760',
  space: 'invert(100%)'
}

export const darkTheme = {
  body: 'radial-gradient(circle, #112222 30%, #000 80%)',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#112222',
  headerBackground: '#000',
  mainBlue: '#85EBD9',
  hover: '#fe60bf',      
  menuHover: '#00FFFF',
  space: 'none'
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 1s linear;
  }
`