import React from 'react';
import {BiTrendingUp, BiTrendingDown} from "react-icons/bi";

const HomePage = ({ mainAvg, paceTrend, distanceTrend }) => {
  const upTrend = {
    'color': 'green'
  }
  const downTrend = {
    'color': 'red'
  }

  return (
    <div>
      <div>
        <h2>Trends</h2>
        <h4>Pace</h4>
        <h5>{mainAvg.avgPace}</h5>
        <p>{paceTrend.paceTrendValue}</p>
        {paceTrend.paceTrendUp ? <BiTrendingUp style={upTrend}/> : <BiTrendingDown style={downTrend}/>}
        <h4>Distance</h4>
        <h5>{mainAvg.avgDistance}</h5>
        <p>{distanceTrend.distanceTrendValue}</p>
        {distanceTrend.distanceTrendUp ? <BiTrendingUp style={upTrend}/> : <BiTrendingDown style={downTrend}/>}
      </div>
      <div>
       <h2>Last Run</h2>
      </div>
    </div>
  )
}

export default HomePage;
