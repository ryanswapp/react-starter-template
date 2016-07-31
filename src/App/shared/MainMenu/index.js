import React from 'react';
import { connect } from 'react-redux';
import Actions from 'App/state/actions.js';
import style from './style';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';

const MainMenu = React.createClass({
	componentDidMount() {
    const { currentUser, dispatch } = this.props;

		if (!currentUser) {
			// dispatch(Actions.getCurrentUser());
			// 
      console.log('Example of fetching the current user with an action');
		}
	},
	render() {
		return (
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="#">React Starter Template</a>
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						{ !!this.props.currentUser ? (
							<LoggedInLinks />
						) : (
							<LoggedOutLinks />
						) }
          </div>
        </div>
      </nav>
    );
	}
});

class LoggedInLinks extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    console.log('An example logout action');
  }
  render() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{ this.props.currentUser.email } <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#" onClick={ this.logout }>Logout</a></li>
          </ul>
        </li>
      </ul>
    );
  }
};

class LoggedOutLinks extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users List</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    );
  }
};

export default CSSModules(MainMenu, style);
