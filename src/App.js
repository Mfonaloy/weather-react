import React from "react";
import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Hello  from React </h1>
        I am trying to set this up, but this is taking too long.
        <Weather city="Abuja"/>
      </header>
    </div>
  );
}

export default App;
