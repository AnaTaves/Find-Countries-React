import React, { useState } from "react";
import { Routes ,Route } from 'react-router-dom'

import { ThemeProvider } from "styled-components";

import * as S from "./App-styles";
import { lightTheme, darkTheme, GlobalStyle } from "./themes/themes";

import Homepage from './pages/Homepage/Homepage.component';

function App() {
  const [theme, setTheme] = useState("light");

  const ThemeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyle/>
     <S.HeaderContainer>
      <h2>Where in the world?</h2>
      <S.LogoContainer onClick={ThemeToggle}>
        <S.MoonLogo/>
      </S.LogoContainer>
    </S.HeaderContainer>
  
   <Routes>
     <Route exact path='/' element={<Homepage/>}/>
   </Routes>
    </ThemeProvider>
   
  )}

export default App;
