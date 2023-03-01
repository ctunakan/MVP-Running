import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import SideBar from './components/SideBar.jsx';
import HomePage from './components/HomePage.jsx';
import { ThemeProvider } from 'styled-components';
import { StyledMain, StyledMainWidget, StyledSideBar } from './styled/App.styled.js';
import { GlobalStyles } from './styled/globalStyles.js';
import { lightTheme, darkTheme } from './styled/Themes.js';


const App = () => {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <NavBar/>
        <StyledMain> 
        {/* Main Content to render here */}
        <StyledMainWidget>
          <HomePage/>
        </StyledMainWidget>
        <StyledSideBar>
          <SideBar />
        </StyledSideBar>
        </StyledMain>
      </>
    </ThemeProvider>
  )
}

export default App;
