import 'style/index.css'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, match } from 'react-router'
import routes from 'config/routes.js'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import createHistory from 'history/lib/createBrowserHistory'
import Actions from 'redux/actions.js'
import Reducers from 'redux/reducers.js'

const history = createHistory()
const reducer = combineReducers(Object.assign({}, Reducers, {
  routing: routeReducer
}))

let finalCreateStore = compose(
  applyMiddleware(
    thunkMiddleware
  )
)(createStore)


const store = finalCreateStore(reducer);

syncReduxAndRouter(history, store)

// store.dispatch(Actions.initiateSocket());

render(
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
    </div>
  </Provider>,
  document.getElementById('app')
)
