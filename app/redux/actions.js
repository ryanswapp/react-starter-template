import axios from 'axios'
// import { Socket } from 'vendor/phoenix.js';

const Actions = {}

// SOCKET
//
// Example: this is an example of how you could initiate a socket 
// when using Phoenix
//
// Actions.initiateSocket = function initiateSocket() {
//   return dispatch => {
//     let socket = new Socket("ws://localhost:4000/socket");
//     socket.connect();
//     console.log("Connected..");
//     dispatch({
//       type: 'INITIATE_SOCKET',
//       socket: socket
//     });
//   }
// };

// USERS
//
// Example: this is an example of joining a channel in Phoenix
//
// Actions.joinNewUsersChannel = function joinNewUsersChannel(socket) {
//   return dispatch => {
//     let channel = socket.channel("users:new", {});

//     channel.join()
//       .receive("ok", chan => {
//         dispatch({
//           type: 'JOINED_NEW_USERS_CHANNEL',
//           channel: channel
//         });
//       })
//       .receive("error", chan => {
//         dispatch({
//           type: 'FAILED_CHANNEL_JOIN',
//           error: "Faild to join New Users Channel"
//         });
//       });
//   }
// };

// Example: this is an example of fetching users from an API
//
Actions.fetchUsers = function fetchPosts() {
  // return dispatch => {
  //   axios.get('http://localhost:4000/api/v1/users', {
  //     headers: {'Authorization': localStorage.phoenix_auth_token}
  //   })
  //     .then(function (response) {
  //       if (response.status === 200) {
  //         dispatch({
  //           type: 'FETCH_USERS',
  //           users: response.data.data
  //         });
  //       } else {
  //         dispatch({
  //           type: 'FAILED_FETCH_USERS',
  //           error: response
  //         })
  //       }
  //     })
  //     .catch(function(response) {
  //       dispatch({
  //         type: 'FAILED_FETCH_USERS',
  //         error: response
  //       })
  //     });
  // }
  return {
  	type: 'FETCH_USERS',
  	// I'm just stubbing data here because we don't have any yet. You wouldn't
  	// do this in a real app
  	users: [
  		{
  			name: 'Ryan',
  			email: 'ryancswapp@gmail.com'
  		},
  		{
  			name: 'Example User',
  			email: 'user@example.com'
  		}
  	]
  }
};

// Actions.addUser = function addUser(user) {
//   return {
//     type: 'ADD_USER',
//     user: user
//   }
// };

// Actions.logout = function logout() {
//   delete localStorage.phoenix_auth_token;

//   return {
//     type: 'LOG_OUT'
//   }
// };

// Example: this is an example of fetching the currentUser's data
// from an API
//
// Actions.getCurrentUser = function getCurrentUser() {
//   return dispatch => {
//     axios.get('http://localhost:4000/api/v1/current_user', {
//       headers: {'Authorization': localStorage.phoenix_auth_token},
//       params: {
//         jwt: localStorage.phoenix_auth_token
//       }
//     })
//       .then(function (response) {
//         if (response.status === 200) {
//           dispatch({
//             type: 'CURRENT_USER',
//             user: response.data.data
//           })
//         } else {
//           dispatch({
//             type: 'NOT_LOGGED_IN'
//           })
//         }
//       })
//       .catch(function(response) {
//         console.log("Not logged in.");
//         dispatch({
//             type: 'NOT_LOGGED_IN'
//           })
//       });

//   }
// }


export default Actions;
