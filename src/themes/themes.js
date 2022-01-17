import { createGlobalStyle } from 'styled-components';

const White = 'hsl(0, 0%, 100%)'
const DarkBlue = 'hsl(209, 23%, 22%)'
const VeryDarkBlue = 'hsl(207, 26%, 17%)'
const LightGray = 'hsl(200, 15%, 8%)'
const VeryLightGray = 'hsl(0, 0%, 98%)'
const LightBoxShadow = '0 10px 5px #F3F3F3'
const DarkBoxShadow = '0 10px 5px #212738'


export const lightTheme = {
body : VeryLightGray,
color : LightGray,
input: White,
headerBackground: White,
boxShadow: LightBoxShadow,
cardBackground : White,
linkBackground: White,
selectBackground:White
}

export const darkTheme = {
body: VeryDarkBlue,
color: White,
input: DarkBlue,
headerBackground: DarkBlue,
boxShadow: DarkBoxShadow,
cardBackground: DarkBlue,
linkBackground: DarkBlue,
selectBackground:DarkBlue
}


export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nunito Sans',sans-serif;
    background: ${(props) => props.theme.body};
    color:  ${(props) => props.theme.color};
    transition: all 0.50s linear;
    text-align: center;
    box-sizing:border-box;
    margin: 0 auto;
    font-size:16px;
    a{
      text-decoration:none;
      color:${(props) => props.theme.color};
      border:1px solid black;
    }
  }
  input{
   background: ${(props) => props.theme.input};
  }
  header{
    background:${(props) => props.theme.headerBackground};
    box-shadow:${(props) => props.theme.boxShadow};
  }
  section{
    background:${(props) => props.theme.cardBackground}
  }
  a{
    background:${(props) => props.theme.linkBackground}
  }
  select{
    background:${(props) => props.theme.selectBackground};
    color:${(props) => props.theme.color};
  }
  `