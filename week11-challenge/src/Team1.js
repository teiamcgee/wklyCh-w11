import React from "react"

function Team1(props){
return <div className ="assignedList">
          <h2><button onClick={() => props.Team2HandleClick(props.teamId, true)}>Team2</button> {props.name} <button onClick={() => props.UnAssignedHandleClick(props.teamId, true)}>UnAssigned</button></h2>
      </div>


}


export default Team1;
