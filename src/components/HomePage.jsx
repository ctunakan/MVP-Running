import React from 'react';
import {BiTrendingUp, BiTrendingDown} from "react-icons/bi";

const HomePage = ({ mainAvg }) => {

  return (
    <div>
      <div>
      <h2>Goals & Trends</h2>
      <h4>Pace</h4>
      <p>{mainAvg.avgPace}</p>
      <h4>Distance</h4>
      <p>{mainAvg.avgDistance}</p>
      </div>
      <div>
      <h2>Last Run</h2>
      </div>
    </div>
  )
}

export default HomePage;
