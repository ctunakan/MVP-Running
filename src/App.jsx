import React, { useState, useEffect } from 'react';
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
  const [mainAvg, setMainAvg] = useState({avgPace: '', avgDistance: ''});
  const [paceTrend, setPaceTrend] = useState ({paceTrendValue: 0, paceTrendUp: false});
  const [distanceTrend, setDistanceTrend] = useState ({distanceTrendValue: 0, distanceTrendUp: false});

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const roundTwoDecimals = (num) => {
    let rounded = Math.round(num * 100) / 100;
    return rounded;
  }

  useEffect(() => {
    axios.get('/monthlyAvg')
      .then(data => {
        let avgPace = roundTwoDecimals(data.data.avgPace);
        let avgDistance = roundTwoDecimals(data.data.avgDistance);
        let avgDuration = data.data.avgDuration;
        const rounded = { avgPace, avgDistance, avgDuration };
        setMainAvg(rounded)
      })
      .then(() => {
        axios.get('/trends')
          .then(trendData => {
            const roundedPace = roundTwoDecimals(trendData.data.paceTrend);
            const roundedDistance = roundTwoDecimals(trendData.data.distanceTrend);
            const paceUp = roundedPace > 0;
            const distanceUp = roundedDistance > 0;
            setPaceTrend({paceTrendValue: roundedPace, paceTrendUp: paceUp});
            setDistanceTrend({distanceTrendValue: roundedDistance, distanceTrendUp: distanceUp});
          })
      });
    

  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <NavBar/>
        <StyledMain> 
        {/* Main Content to render here */}
        <StyledMainWidget>
          <HomePage mainAvg={mainAvg}
            paceTrend={paceTrend}
            distanceTrend={distanceTrend}/>
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
