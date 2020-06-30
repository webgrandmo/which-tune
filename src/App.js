import React from 'react';
import Container  from './Container';
import Header from './header/Header';
import Tabs from './tabs/Tab';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header logo="Which Tune App Logo" />
      <Tabs />
      <Container />
    </div>
  );
}

export default App;
