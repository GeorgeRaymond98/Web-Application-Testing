import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import Display from './components/Display';



function App() {
const [balls, setBalls] = useState(0);
const [strikes, setStrikes] = useState(0); 
  /// Strike is set to Zero when Strike reaches 3
const strike = () => {
  if(strikes === 2) {
    setStrikes(0);
    setBalls(0);
  }
  else {
    setStrikes(strikes + 1)
  }
} 
console.log(strikes);

/// Ball is set to Zero when Strike reaches 4
const ball = () => {
  if(balls === 3 ) {
    setStrikes(0);
    setBalls(0);
  }
  else {
    setBalls(balls + 1);
  }
}

// setStrikes and setBalls is set to zero when ball is hit 
const hit = () =>{
  setStrikes(0);
  setBalls(0);
}

// One foul increases setStrikes to 2 
const foul = () => {
  if(strikes === 2 ) {
    setStrikes(2)
  }
  // else if(strikes === 0 ){
  //   setStrikes(strikes + 2)
  // }
  // else if(strikes === 2 ){
  //   setStrikes(strikes  -1)
  // }
  else {
    setStrikes(strikes + 1)
  }
}

  return (
    <div className="App">
      <Dashboard ball={ball} strike={strike} foul={foul} hit={hit}/>
      <Display strikes={strikes} balls={balls}/>
    </div>
  );
}

export default App;
