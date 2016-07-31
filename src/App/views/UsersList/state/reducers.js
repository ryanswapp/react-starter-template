export function users(state=[], action) {
  let newState;
  switch (action.type) {
  case 'FETCH_USERS':
    newState = action.users;
    return newState;
  case 'FETCH_USERS_FAILED':
    return state;
  default:
    return state;
  }
};
