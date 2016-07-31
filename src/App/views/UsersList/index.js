import React from 'react';
import Actions from 'App/state/actions.js';
import { connect } from 'react-redux';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {

    const { dispatch } = this.props;

    dispatch({type: 'FETCH_USERS_REQUESTED'});
  }
  render () {
    const { users } = this.props;
    return (
      <div className="container">
        <h1>Users List</h1>
        <div className="users-list">
          <ul className="list-group">
            { users.map((user, i) => {
              return <li key={ i } className="list-group-item">{ user.name }</li>;
            }) }
          </ul>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
	return { 
    users: state.users
  };
}

export default connect(mapStateToProps)(UsersList);
