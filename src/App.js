import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import {Provider} from './context'
import AddContact from './components/contacts/AddContact';


function App() {
  return (
   <Provider>
      <div className="App">
      <Header branding="Contact manager" />
     
      <div className="container">
        <AddContact />
        <Contacts />
      </div>
    </div>
   </Provider>
  );
}

export default App;
