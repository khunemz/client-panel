import React from 'react';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header branding="Contact manager" />
      <Contact name="John Doe"
        email="jdoe@gmail.com"
        phone="+6697-333-6569"
      />

      <Contact name="Karen Smith"
        email="smith@gmail.com"
        phone="+6697-333-5678"
      />
    </div>
  );
}

export default App;
