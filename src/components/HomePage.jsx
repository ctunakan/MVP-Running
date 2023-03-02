import React from 'react';
import {BiTrendingUp, BiTrendingDown} from "react-icons/bi";

const HomePage = ({ mainAvg, paceTrend, distanceTrend, durationTrend, lastRun }) => {
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
        <h5>{mainAvg.avgPace}&nbsp;({mainAvg.minMile})</h5>
        <p>{paceTrend.paceTrendValue}</p>
        {paceTrend.paceTrendUp ? <BiTrendingUp style={upTrend}/> : <BiTrendingDown style={downTrend}/>}
        <h4>Distance</h4>
        <h5>{mainAvg.avgDistance}</h5>
        <p>{distanceTrend.distanceTrendValue}</p>
        {distanceTrend.distanceTrendUp ? <BiTrendingUp style={upTrend}/> : <BiTrendingDown style={downTrend}/>}
        <h4>Duration</h4>
        <h5>{mainAvg.avgDuration}</h5>
        <p>{durationTrend.durationTrendValue}</p>
        {durationTrend.durationTrendUp ? <BiTrendingUp style={upTrend}/> : <BiTrendingDown style={downTrend}/>}
      </div>
      <div>
       <h2>Last Run</h2>
       <h4>{lastRun.indoor ? 'Indoor Run ' : 'Outdoor Run '}on&nbsp;{lastRun.date}</h4>
       <h4>Distance: {lastRun.distance}&nbsp;mi</h4> 
       <h4>Time: {lastRun.duration}&nbsp;</h4>
       <h4>Pace: {lastRun.averagePace}mph ({lastRun.minPerMile})</h4>
       {!lastRun.indoor ? <h4>Elevation Gain: {lastRun.elevationGained}cm</h4> : null}
       <h4>Calories Burned: {lastRun.caloriesBurned}</h4>
      </div>
    </div>
  )
}

export default HomePage;
