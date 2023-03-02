import React from "react";
import { Run } from "../../server/dbFiles/models";
import RunTile from "./RunTile.jsx";

const RunsList = ({ runLog }) => {
  // console.log(runLog)
  return (
    <div>
      <h3>Run Log</h3>
      <>
      {runLog.map((runObj, index) => (
        <div key={index}>
          <RunTile runObj={runObj}/>
        </div>
      ))}
      </>
    </div>
  )
}

export default RunsList
