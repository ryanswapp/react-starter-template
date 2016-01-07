import React from 'react';
import { pushState } from 'redux-router';
import Actions from 'redux/actions.js';
import { connect } from 'react-redux';

const UsersList = React.createClass({
  componentDidMount () {

    // const { dispatch, socket, currentUser, channels } = this.props;

    // if (!localStorage.phoenix_auth_token) {
    //   dispatch(pushState(null, "/"));
    // }
    
    // dispatch(Actions.joinNewUsersChannel(socket));

    // if (channels.newUsers) {
    //   channels.newUsers.on("new:user", payload => {
    //     console.log("There is a new user!");
    //     dispatch(Actions.addUser(payload.user));
    //   });
    // }

    // this.props.dispatch(Actions.fetchUsers());
  },
  render () {
  	// const { users } = this.props;
    // {users.map((user, i) => {
    //    return <li key={i} className='list-group-item'>{user.email}</li> 
    // })}
    return (
      <div className='container'>
        <h1>Users List</h1>
        <div className='users-list'>
          <ul className='list-group'>
            <li className='list-group-item'>some@email.com</li>
          </ul>
        </div>
      </div>
    )
  }
});

// function mapStateToProps(state) {
// 	return { 
//     socket: state.socket,
//     channels: state.channels,
//     users: state.users,
//     currentUser: state.currentUser
//   }
// }

// export default connect(mapStateToProps)(UsersList);
export default UsersList