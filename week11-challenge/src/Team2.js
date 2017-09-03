import React from "react"

function Team2(props){
return <div className ="Team2">
          <h2><button onClick={() => props.Team1HandleClick(props.teamId, true)>Team1</button> {props.name} <button onClick={() => props.UnAssignedHandleClick(props.teamId, true)>UnAssigned</button></h2>
      </div>


}


export default Team2;
