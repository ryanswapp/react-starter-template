const Reducers = {}

// Example: this is a simple example of a reducer function for users

Reducers.users = function users(state=[], action) {
	switch (action.type) {
    case 'FETCH_USERS':
      var newState = action.users;
      return newState;
    case 'FAILED_FETCH_USERS':
      return state;
    default:
      return state;
  }
}

export default Reducers