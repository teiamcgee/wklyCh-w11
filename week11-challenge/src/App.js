import React, { Component } from 'react';
import './App.css';
import UnAssigned from './UnAssigned'

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
      <div className="unAssigned">
      {unAssignedList}
      </div>
    );
  }
}

export default App;
