import React from 'react';


function UnAssigned(props){
  return(
    <div>
      <h2><button onClick={() => props.Team1HandleClick(props.teamId, true)>Team1</button> {props.name} <button onClick={() => props.Team2HandleClick(props.teamId, true)>Team2</button></h2>
  </div>
  )
  };









export default UnAssigned;
