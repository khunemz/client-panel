import React, { Component } from "react";
import { Consumer } from "./../../context";
import {v1 as uuid} from 'uuid'

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };

  onFormSubmit = (dispatch , e) => {
    e.preventDefault();
    const { name , email , phone} = this.state;
    const newContact = {
        id: uuid() , name , email , phone 
    };
debugger;
    dispatch({type: 'ADD_CONTACT' , 
        payload: newContact    
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add contact</div>
              <div className="card-body">
                <form onSubmit={this.onFormSubmit.bind(this , dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter name ..."
                      value={name}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter email ..."
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      name="phone"
                      type="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter Phone ..."
                      value={phone}
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn  btn-block btn-primary"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
