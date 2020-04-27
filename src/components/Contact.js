import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
    state = {
        showContactInfo: false 
    };

    toggleAccordian = ( e ) => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        })

    }

  render() {
    let contact = this.props.contact;
    const {showContactInfo} = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {contact.name} 
          <i className="fas fa-sort-down" onClick={this.toggleAccordian}></i>
        </h4>

        {
            showContactInfo ? (<ul className="list-group">
            <li className="list-group-item">{contact.email}</li>
            <li className="list-group-item">{contact.phone}</li>
          </ul>) : null 
        }
        
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default Contact;
