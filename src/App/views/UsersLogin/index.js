import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Actions from 'App/state/actions.js';
import LoginForm from './components/LoginForm';

class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(data) {
    console.log(data);
  }
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <h1 className="page-header text-center">Login</h1>
            <div className="light-well">
              <div className="panel-body">
                <div className="row">
                  <div className="col-sm-8 col-sm-offset-2">
                    <h3 className="panel-title"></h3>
                    <LoginForm onSubmit={ this.handleSubmit } />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};



export default UserLogin;
