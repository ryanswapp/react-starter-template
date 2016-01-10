import axios from 'axios'

const Actions = {}


// Example: this is an example of an async action that
// fetches users from an API

Actions.fetchUsers = function fetchPosts() {
  return dispatch => {
    axios.get('http://pokeapi.co/api/v1/pokedex/1')
      .then(function (response) {
        if (response.status === 200) {
          let firstTen = response.data.pokemon.splice(0, 9);
          dispatch({
            type: 'FETCH_USERS',
            users: firstTen
          });
        } else {
          dispatch({
            type: 'FAILED_FETCH_USERS',
            error: response
          })
        }
      })
      .catch(function(response) {
        dispatch({
          type: 'FAILED_FETCH_USERS',
          error: response
        })
      });
  }
};


export default Actions;
