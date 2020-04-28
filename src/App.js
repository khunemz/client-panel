import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header';
import {Provider} from './context'


function App() {
  return (
   <Provider>
      <div className="App">
      <Header branding="Contact manager" />
      
      <div className="container">
        <Contacts />
      </div>
    </div>
   </Provider>
  );
}

export default App;
