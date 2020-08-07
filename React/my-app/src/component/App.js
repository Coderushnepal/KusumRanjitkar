import React from "react";
import "./App.css";

import Counter from "./counter";

import {EnhancedUser} from './User'
function App() {
  const nameList=["kusum","neha", "alisha","Kirtika","Srijana","Bishika","Neeta",];
  const names = [
    "kusum",
    "neha",
    "Kirtika",
    "alisha",
    "Srijana",
    "Bishika",
    "Neeta",
    "Elisha",
    "Kirtee",
    "Trija",
    "Rachana",
    "sami",
    
  ];
  return (
    <div className="App">
      <div className="first">
      <h1>Assignment-1</h1>
      {names.map((name, index) => {
        return <Counter key={name.concat(index)} name={name} />;
      })}
      </div>

      <div className="userList">
        <h1>Assignment-3</h1>
      {nameList.map((name, index) => {
        return <EnhancedUser key={name.concat(index)} name={name} />
      
  }  )}
      </div>   
    </div>
  );
}

export default App;