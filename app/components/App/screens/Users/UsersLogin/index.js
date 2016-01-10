import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Actions from 'redux/actions.js';

const UserLogin = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    let self = this;

    let email = e.target.email.value;
    let password = e.target.password.value;

    let session = {
      email: email,
      password: password
    }

    alert(`Email: ${email}. \nPassword: ${password}`);
  },
  render () {
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className="form-control email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" className="form-control password" />
          </div>
          <input type="submit" className="btn btn-default" />                   
        </form>
      </div>
    )
  }
});



export default UserLogin