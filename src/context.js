import React, { Component } from "react";
import axios from 'axios'
const Context = React.createContext();


const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type ) {
        case 'DELETE_CONTACT': 
         return {
             ...state , 
             contacts: state.contacts.filter( contact => (
                contact.id !== action.payload
             ))
         };
         case 'ADD_CONTACT': 
         return {
             ...state , 
              contacts: [action.payload , ...state.contacts]
            
         };
         default: 
            return state;
    }
}

export class Provider extends Component {

  componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => this.setState({
      contacts: res.data
    }))

    
  }
  state = {
    contacts: [
     
    ],
// dispatch is a part of state
    dispatch: action => {
        this.setState(state => reducer(state,  action))
    }
  };

  render() {
      return (
          <Context.Provider value={this.state}>
              {this.props.children}
          </Context.Provider>
      )
  }
}

export const Consumer = Context.Consumer;