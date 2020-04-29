import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "./context";

import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import About from "./components/pages/About";
import NotFound from './components/pages/NotFound'
import Test from "./components/tests/Test";

function App() {
  return (
    <Provider>
      <Router>
        
        <div className="App">
          <Header branding="Contact manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/about" component={About} />   
              <Route exact path="/about/:id" component={About} /> 
              <Route exact path="/test" component={Test} /> 
              <Router component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
