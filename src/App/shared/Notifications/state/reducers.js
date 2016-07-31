export function notifications(state=[], action) {
  let newState;
  switch (action.type) {
  case 'ADD_NOTIFICATION':
    newState = [].concat(state, action.notification);
    return newState;

  case 'REMOVE_NOTIFICATION':
    newState = state.filter(function(notification) {
      return action.notification.id !== notification.id;
    });
    return newState;

  case 'HIDE_ALL_NOTIFICATIONS':
    newState = [];
    return newState;

  default:
    return state;
  }
}
