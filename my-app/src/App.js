import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Info/>
      <List/>    
    </div>
  );
}

export default App;
