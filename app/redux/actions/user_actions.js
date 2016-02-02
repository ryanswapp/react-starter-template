import axios from 'axios'
import { routeActions } from 'redux-simple-router'
import config from './config'
import Helpers from './helpers'
import notificationActions from './notification_actions'
//USERS
let userActions = {}

userActions.fetchUsers = function fetchUsers() {
  return dispatch => {
    axios.get('http://pokeapi.co/api/v1/pokedex/1')
      .then(function (response) {
        if (response.status === 200) {
          let firstTen = response.data.pokemon.splice(0, 9)
          dispatch({
            type: 'FETCH_USERS',
            users: firstTen
          })
        }
      })
      .catch(function(response) {
        console.log('Fail')
        dispatch(notificationActions.addNotification('danger', 'The server threw an error'))
        dispatch({
          type: 'FAILED_FETCH_USERS',
          error: response
        })
      })
  }
}

export default userActions
