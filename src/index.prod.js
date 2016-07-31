import 'App/style/index';
require.context('./images', true, /^\.\//);
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, match, browserHistory } from 'react-router';
import routes from 'config/routes.js';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { syncHistory, routeReducer } from 'react-router-redux';
import Actions from 'App/state/actions.js';
import Reducers from 'App/state/reducers.js';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'App/state/sagas.js';
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers(Object.assign({}, Reducers, {
  form: formReducer,
  routing: routeReducer
}));

const reduxRouterMiddleware = syncHistory(browserHistory);

const sagaMiddleware = createSagaMiddleware();

let finalCreateStore = compose(
  applyMiddleware(
    thunkMiddleware,
    reduxRouterMiddleware,
    sagaMiddleware
  )
)(createStore);

const store = finalCreateStore(reducer);

sagaMiddleware.run(rootSaga);

render(
  <Provider store={ store }>
    <div>
      <Router history={ browserHistory } routes={ routes } />
    </div>
  </Provider>,
  document.getElementById('app')
);
