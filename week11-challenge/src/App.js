import React, { Component } from 'react';
import './App.css';
import UnAssigned from "./UnAssigned";
import Team1 from './Team1';
import Team2 from './Team2';

class App extends Component {
  constructor(){
    super();
    this.state = {
      unAssignedgroup : [
     {name: "Martin Lawerance",
      teamId: 1,
      isSelected: false
   },
     {name: "Teenia Marie",
     teamId: 1,
     isSelected: false
   },
     {name: "Bobby Brown",
     teamId: 1,
     isSelected: false
   },
     {name: "Michael Jackson",
      teamId: 1,
      isSelected: false,
    },
     {name: "Halli Berry",
      teamId: 1,
      isSelected: false
   }
    ]
   };
  }

  Team1HandleClick = (teamId,isSelected = true) => {
      const team1 = this.state.unAssignedgroup.slice()
      const index = this.state.unAssignedgroup.findIndex(function(user){
        return user.teamId = 2
      })

      team1[index].isSelected = isSelected
      this.setState({team1})
  }

  Team2HandleClick = (teamId,isSelected = true) => {
      const team2 = this.state.unAssignedgroup.slice()
      const index = this.state.unAssignedgroup.findIndex(function(user){
        return user.teamId = 3
      })
      team2[index].isSelected = isSelected
      this.setState({team2})
  }


  UnAssignedHandleClick = (teamId, isSelected = true) => {
    const unAssigned = this.state.unAssignedgroup.slice()
    const index = this.state.unAssignedgroup.findIndex(function(user){
      return user.teamId === teamId
    })
    unAssigned[index].isSelected = isSelected
    this.setState({unAssigned})
  }

  render() {


  const unAssignedList = this.state.unAssignedgroup.map((user) => {
    return <UnAssigned
    name={user.name}
    teamId = {user.teamId}
    isSelected = {user.isSelected}
    Team2HandleClick = {this.Team2HandleClick}
    Team1HandleClick = {this.Team1HandleClick}
     />
   })

  const team1 = this.state.unAssignedgroup.map((user) => {
   return <Team1
   name={user.name}
   teamId = {user.teamId}
   isSelected = {user.isSelected}
   Team2HandleClick = {this.Team2HandleClick}
   UnAssignedHandleClick = {this.UnAssignedHandleClick}
   />
   })

   const team2 = this.state.unAssignedgroup.map((user) => {
     return <Team2
     name={user.name}
     teamId = {user.teamId}
     isSelected = {user.isSelected}
     UnAssignedHandleClick = {this.UnAssignedHandleClick}
     Team1HandleClick = {this.Team1HandleClick}
    />
  })
    return (
      <div>
        <div className="unAssigned">
          <h1>UnAssigned</h1>
          {unAssignedList}
        </div>
        <div className="Team2">
          <h1>Team 2</h1>
          {Team1}
        </div>
        <div className="Team1">
          <h1>Team 1</h1>
          {Team2}
        </div>
      </div>
    );
  }
}


export default App;
