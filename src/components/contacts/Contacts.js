import React, { Component } from "react";
import Contact from "./Contact";
import {Consumer} from '../../context'

class Contacts extends Component {
 

  deleteContact = (id) => {

    const {contacts} = this.state;
    
    let newContacts = contacts.filter( contact => (
            contact.id !== id
        )
    );

    this.setState({
        contacts: newContacts
    })

  };
  render() {

    return (
      <Consumer>
        {
          value => {
            const { contacts } = value;

            return (
              <div>
                {contacts.map((contact) => (
                  <Contact
                    key={contact.id}
                    contact={contact}
                    deleteClickHander={this.deleteContact.bind(this , contact.id)}
                  />
                ))}
              </div>
            );
          }
        }
      </Consumer>
    )
   
  }
}

export default Contacts;
