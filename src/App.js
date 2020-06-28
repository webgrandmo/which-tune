import React from 'react';
import Container  from './Container';
import Header from './header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header logo="Which Tune App Logo" />
      <Container />
    </div>
  );
}

export default App;
