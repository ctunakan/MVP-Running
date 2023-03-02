import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import NavBar from './NavBar.jsx';
import AddRun from './components/AddRun.jsx';
// import SideBar from './components/SideBar.jsx';
import HomePage from './components/HomePage.jsx';
import RunsList from './components/RunsList.jsx';
import { ThemeProvider } from 'styled-components';
import { StyledMain, StyledMainWidget, StyledSideBar } from './styled/App.styled.js';
import { GlobalStyles } from './styled/globalStyles.js';
import { lightTheme, darkTheme } from './styled/Themes.js';

Modal.setAppElement('#root');

const App = () => {
  const [modalIsOpen, setModal] = useState(false);
  const [theme, setTheme] = useState('light');
  const [runLog, setRunLog] = useState([]);
  const [mainAvg, setMainAvg] = useState({});
  const [paceTrend, setPaceTrend] = useState({});
  const [distanceTrend, setDistanceTrend] = useState({});
  const [durationTrend, setDurationTrend] = useState({});
  const [lastRun, setLastRun] = useState({});

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  const openModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }

  const roundTwoDecimals = (num) => {
    let rounded = Math.round(num * 100) / 100;
    return rounded;
  }
  const convertSec = (minNum) => {
    const min = parseInt(minNum);
    const seconds = roundTwoDecimals((minNum - min) * 60);
    const result = '' + min + ':' + seconds;
    return result; 
  }

  useEffect(() => {
    axios.get('/runs')
      .then(runLogData => {
        setRunLog(prev => ([
          ...prev,
          runLogData.data]));
      })
      .then(() => {
        axios.get('/monthlyAvg')
        .then(data => {
          let avgPace = roundTwoDecimals(data.data.avgPace);
          let minMile = convertSec(60 / data.data.avgPace)
          let avgDistance = roundTwoDecimals(data.data.avgDistance);
          let avgDuration = convertSec(data.data.avgDuration);
          const rounded = { avgPace, minMile, avgDistance, avgDuration };
          setMainAvg(rounded)
        })
      })
      .then(() => {
        axios.get('/trends')
          .then(trendData => {
            const roundedPace = roundTwoDecimals(trendData.data.paceTrend);
            const roundedDistance = roundTwoDecimals(trendData.data.distanceTrend);
            const roundedDuration = Math.round(trendData.data.durationTrend);
            const paceUp = roundedPace > 0;
            const distanceUp = roundedDistance > 0;
            const durationUp = roundedDuration > 0;
            setPaceTrend({paceTrendValue: roundedPace, paceTrendUp: paceUp});
            setDistanceTrend({distanceTrendValue: roundedDistance, distanceTrendUp: distanceUp});
            setDurationTrend({durationTrendValue: roundedDuration, durationTrendUp: durationUp});
          })
      })
      .then(() => {
        axios.get('/lastRun')
          .then((last) => {
            const obj = last.data;
            // console.log(last)
            const data = {};
            const date = new Date(obj.workoutDate);
            data.date = date.toDateString();
            data.indoor = obj.indoor;
            data.duration = convertSec(obj.durationMinutes);
            data.averagePace = roundTwoDecimals(obj.pace.average);
            data.minPerMile = convertSec(60 / obj.pace.average);
            data.distance = roundTwoDecimals(obj.distance);
            data.caloriesBurned = obj.activeEnergy;
            data.elevationGained = obj.elevationGained;

            setLastRun(data);
          })
      });
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <NavBar openModal={openModal}/>
        <StyledMain> 
        {/* Main Content to render here */}
        <StyledMainWidget>
          <HomePage mainAvg={mainAvg}
            paceTrend={paceTrend}
            distanceTrend={distanceTrend}
            durationTrend={durationTrend}
            lastRun={lastRun}/>
          <RunsList runLog={runLog}/>
        </StyledMainWidget>
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <AddRun/>
          </Modal>
        {/* <StyledSideBar> */}
          {/* <button onClick={/**add state changer */}
          {/* <SideBar /> */}
        {/* </StyledSideBar> */}
        </StyledMain>
      </>
    </ThemeProvider>
  )
}

export default App;
