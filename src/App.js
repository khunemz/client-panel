import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header branding="Contace Manager" />
      <Contact name="John Doe"
        email="jdoe@gmail.com"
        phone="+6697-333-6569"
      />
    </div>
  );
}

export default App;
