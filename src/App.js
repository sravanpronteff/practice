import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';


function App() {
  return (
    <div className="App">
      <Greet name="sravan kumar" />
      <Welcome name="sravan reddy"></Welcome>
      <Hello name="sravan vudem" />

      <Message/>
    </div>
  );
}

export default App;
