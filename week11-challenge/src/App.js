import React, { Component } from 'react';
import './App.css';
import UnAssigned from "./UnAssigned";
import Team1 from './Team1';
import Team2 from './Team2';

class App extends Component {
  constructor(){
    super();
    this.state = {unAssignedgroup : [
     {name: "Martin Lawerance",
      teamId: 1
   },
     {name: "Teenia Marie"
     teamId: 1,
     isSelected: false
   },
     {name: "Bobby Brown",
     teamId: 1,
     isSelected: false
   },
     {name: "Michael Jackson",
      teamId: 1
      isSelected: false,
    },
     {name: "Halli Berry",
      teamId: 1,
     isSelected: false
   }
   ]};
  }
  changeStatus = (id,isCompleted = true) => {
    const users = this.state.users.slice()
    const index = this.state.users.findIndex(function(user){
      return user.id === id
    })
    users[index].isCompleted = isCompleted
    this.setState({users})
  }
  Team1HandleClick(index){
    let team1 = this.state.unAssignedgroup.slice();
  }
  Team2HandleClick()
  UnAssignedHandleClick = (teamId, isSelected = true)=>{

  }
  render() {


  const unAssignedList = unAssignedgroup.map(function(user){
    return <UnAssigned name={user.name} />
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
