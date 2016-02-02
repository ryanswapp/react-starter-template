import 'style/index'
require.context('./images', true, /^\.\//)
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, match } from 'react-router'
import routes from 'config/routes.js'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { syncHistory, routeReducer } from 'redux-simple-router'
import createHistory from 'history/lib/createHashHistory'
import Actions from 'redux/actions.js'
import Reducers from 'redux/reducers.js'

const history = createHistory()
const reducer = combineReducers(Object.assign({}, Reducers, {
  routing: routeReducer
}))

const reduxRouterMiddleware = syncHistory(history)

let finalCreateStore = compose(
  applyMiddleware(
    thunkMiddleware,
    reduxRouterMiddleware
  )
)(createStore)

const store = finalCreateStore(reducer)

render(
  <Provider store={store}>
    <div>
      <Router history={history} routes={routes} />
    </div>
  </Provider>,
  document.getElementById('app')
)
