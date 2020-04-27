import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header branding="Contact manager" />
      
      <div className="container">
        <Contacts />
      </div>

    </div>
  );
}

export default App;
