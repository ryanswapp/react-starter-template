import 'style/index'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import routes from 'config/routes.js'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { syncHistory, routeReducer } from 'redux-simple-router'
import createHistory from 'history/lib/createBrowserHistory'
import Actions from 'redux/actions.js'
import Reducers from 'redux/reducers.js'
import DevTools from './containers/DevTools.js'

const history = createHistory()
const reducer = combineReducers(Object.assign({}, Reducers, {
  routing: routeReducer
}))

const reduxRouterMiddleware = syncHistory(history)

let finalCreateStore = compose(
  applyMiddleware(
    thunkMiddleware,
    reduxRouterMiddleware
  ),
  DevTools.instrument()
)(createStore)

const store = finalCreateStore(reducer)

reduxRouterMiddleware.listenForReplays(store)

render(
	<Provider store={store}>
		<div>
	  	<Router history={history}>
	  		{ routes }
	  	</Router>
	  	<DevTools />
  	</div>
	</Provider>,
	document.getElementById('app')
)

