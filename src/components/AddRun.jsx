import React from "react";
import axios from 'axios';


const AddRun = () => {


  const handleTextInput = (e, changeFunc) => {
    changeFunc(e.target.value);
  }

  const sumbitHandler = () => {

  }

  return (
    <div>
      <h3>Add A Run!</h3>
      <form onSubmit={sumbitHandler}>
        <label>When did you run?<i style={{'color': 'red'}}>*</i><br/>
          <input name="date" type="date" onChange={(e) => handleTextInput(e, /**put set State func here */)} required/>
        </label><br/>
        <label>How long did you run for?<i style={{'color': 'red'}}>*</i><br/>
          <input name="duration" placeholder="44" type="text" onChange={(e) => handleTextInput(e, /**put set State func here */)} required />&nbsp;minutes
        </label><br/>
        <label>How far did you run?<i style={{'color': 'red'}}>*</i><br/>
          <input name="distance" placeholder="4.82" type="text" onChange={(e) => handleTextInput(e, /**put set State func here */)} required />&nbsp;miles
        </label><br/>
        <label>How fast did you run?<i>(optional)</i><br/>
          <input name="pace" placeholder="6.2" type="text" onChange={(e) => handleTextInput(e, /**put set State func here */)}/>&nbsp;<i>(mph)</i>
        </label><br/>
        <label>Any hills?<i>(optional)</i><br/>
          <input name="elevationGained" placeholder="575" type="text" onChange={(e) => handleTextInput(e, /**put set State func here */)}/>&nbsp;<i>(cm)</i>
        </label><br/>
        <input type="submit" value="Add"/>
      </form>
    </div>

  )
}

export default AddRun;
