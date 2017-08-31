import React, { Component } from 'react';
import './App.css';
import UnAssigned from "./UnAssigned";
import Team1 from './Team1';
import Team2 from './Team2';

class App extends Component {
  render() {
    const unAssignedgroup = [
     {name: "Martin Lawerance"},
     {name: "Teenia Marie"},
     {name: "Bobby Brown"},
     {name: "Michael Jackson"},
     {name: "Halli Berry"}
   ];

  const unAssignedList = unAssignedgroup.map(function(user){
    return <UnAssigned name={user.name} />
  })
    return (
      <div>
      <div className="unAssigned">
      <h1>UnAssigned</h1>
      {unAssignedList}
      </div>
      <div className="Team1">
      <h1>Team 1</h1>
      {Team1}
      </div>
      <div className="Team2">
      <h1>Team 2</h1>
      {Team2}
      </div>
      </div>
    );
  }
}

export default App;
