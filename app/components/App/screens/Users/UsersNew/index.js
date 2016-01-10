import React from 'react';
// import { Socket } from "vendor/phoenix";
import axios from 'axios';
import { connect } from 'react-redux';


const UsersNew = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    let self = this;

    let username = e.target.username.value;
    let email = e.target.email.value;
    let password = e.target.password.value;

    let user = {
      username: username,
      email: email,
      password: password
    }

    alert(`Username: ${username}. \nEmail: ${email}. \nPassword: ${password}.`);
    
  },
  render () {
    return (
      <div className='container'>
        <h1>New User</h1>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" className="form-control username" />
        </div>
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

export default connect()(UsersNew);