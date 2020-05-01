import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import axios from "axios";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  toggleAccordian = (e) => {
    this.setState({
      showContactInfo: !this.state.showContactInfo,
    });
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      // this.props.deleteClickHander();
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

      dispatch({
        type: "DELETE_CONTACT",
        payload: id,
      });
    } catch (e) {
      dispatch({
        type: "DELETE_CONTACT",
        payload: id,
      });
    }
  };

  render() {
    let contact = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h6>
                {contact.name}
                <i
                  style={{ cursor: "pointer" }}
                  className="fas fa-sort-down"
                  onClick={this.toggleAccordian}
                ></i>

                <i
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  className="fas fa-times"
                  onClick={this.onDeleteClick.bind(this, contact.id, dispatch)}
                ></i>

                <Link to={`contact/edit/${contact.id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem",
                    }}
                  ></i>
                </Link>
              </h6>

              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{contact.email}</li>
                  <li className="list-group-item">{contact.phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  // deleteClickHander: PropTypes.func.isRequired
};
export default Contact;
