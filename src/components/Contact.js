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

    onDeleteClick = (e) => {
        this.props.deleteClickHander();
    }

  render() {
    let contact = this.props.contact;
    const {showContactInfo} = this.state;
    return (
      <div className="card card-body mb-3">
        <h6>
          {contact.name} 
          <i 
          style={{cursor: 'pointer'}} 
          className="fas fa-sort-down" 
          onClick={this.toggleAccordian}>
          </i>
          <i 
          style={{cursor: 'pointer' , float: 'right', color: 'red'}} 
          className="fas fa-times" 
          onClick={this.onDeleteClick}
         >
          </i>
        </h6>

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
  deleteClickHander: PropTypes.func.isRequired
};
export default Contact;
