import React from "react"

function Team1(props){
return <div className ="assignedList">
          <h2><button>Team2</button> {props.name} <button onClick={() =>props.Team1HandleClick(props.teamId, true)>UnAssigned</button></h2>
      </div>


}


export default Team1;
