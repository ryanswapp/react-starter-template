import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Actions from 'App/state/actions.js';
import SignupForm from './components/SignupForm';


class UsersNew extends React.Component {
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
            <h1 className="page-header text-center">Join Us</h1>
            <div className="light-well">
              <div className="panel-body">
                <div className="row">
                  <div className="col-sm-8 col-sm-offset-2">
                    <h3 className="panel-title">Create Your Account</h3>
                    <SignupForm onSubmit={ this.handleSubmit } />
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

export default connect()(UsersNew);
