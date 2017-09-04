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

  Team1HandleClick(teamId, isSelected = true) {
      const team1 = this.state.unAssignedgroup.slice()
      const index = this.state.unAssignedgroup.findIndex(function(user){
        return this.user.teamId === teamId
      })

      this.unAssignedgroup[index].isSelected = isSelected
      this.setState({unAssignedgroup})

      this.unAssignedgroup[index].teamId = 2
      this.setState({unAssignedgroup})
  }

  Team2HandleClick(teamId, isSelected = true) {
      const team2 = this.state.unAssignedgroup.slice()
      const index = this.state.unAssignedgroup.findIndex(function(user){
        return user.teamId === teamId
      })
      unAssignedgroup[index].isSelected = isSelected
      this.setState({unAssignedgroup})

      unAssignedgroup[index].teamId = 3
      this.setState({unAssignedgroup})
  }


  UnAssignedHandleClick (teamId, isSelected = true) {
    const unAssigned = this.state.unAssignedgroup.slice()
    const index = this.state.unAssignedgroup.findIndex(function(user){
      return user.teamId === teamId
    })
    this.unAssignedgroup[index].isSelected = isSelected
    this.setState({unAssignedgroup})
  }

  render() {


  const unAssignedList = this.state.unAssignedgroup.map(function(user){
    return <UnAssigned
    name={UnAssigned.name}
    teamId = {UnAssigned.teamId}
    isSelected = {UnAssigned.isSelected}
     />
   })

  const team1 = this.state.unAssignedgroup.map(function(user){
   return <team1
   name={Team1.name}
   teamId = {Team1.teamId}
   isSelected = {Team1.isSelected}
   />
   })

   const team2 = this.state.unAssignedgroup.map(function(user){
     return <team2
     name={Team2.name}
     teamId = {Team2.teamId}
     isSelected = {Team2.isSelected}
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
