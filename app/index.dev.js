import 'style/index.css'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import routes from 'config/routes.js'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import createHistory from 'history/lib/createHashHistory'
import Actions from 'redux/actions.js'
import Reducers from 'redux/reducers.js'
import DevTools from './containers/DevTools.js'

const history = createHistory()
const reducer = combineReducers(Object.assign({}, Reducers, {
  routing: routeReducer
}))

let finalCreateStore;
if (process.env.NODE_ENV === 'production') {
	finalCreateStore = compose(
	  applyMiddleware(
	    thunkMiddleware
	  )
	)(createStore)
} else {
	finalCreateStore = compose(
	  applyMiddleware(
	    thunkMiddleware
	  ),
	  DevTools.instrument()
	)(createStore)
}

const store = finalCreateStore(reducer);

syncReduxAndRouter(history, store)

// store.dispatch(Actions.initiateSocket());

if (process.env.NODE_ENV === 'production') {
	render(
		<Provider store={store}>
			<div>
		  	<Router history={history}>
		  		{ routes }
		  	</Router>
	  	</div>
		</Provider>,
		document.getElementById('app')
	)
} else {
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
}

