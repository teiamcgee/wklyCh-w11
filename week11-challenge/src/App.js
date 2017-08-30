import React, { Component } from 'react';
import './App.css';
import './UnAssigned'

class App extends Component {
  const unAssigned : [
   {name: "Martin Lawerance"},
   {name: "Teenia Marie"},
   {name: "Bobby Brown"},
   {name: "Michael Jackson"},
   {name: "Halli Berry"}
 ]

const unAssignedList = unAssigned.map(function(user){
  return <Unassigned name={this.prop.name}>
})

  render() {
    return (
      <div className="unAssigned">
      {unAssignedList}
      </div>
    );
  }
}

export default App;
