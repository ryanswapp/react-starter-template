import React from 'react';
import { Route, Link, IndexRoute } from 'react-router';

// Components
import App from 'App';
import Home from 'App/views/Home';
import UsersList from 'App/views/UsersList';
import UsersNew from 'App/views/UsersNew';
import UsersLogin from 'App/views/UsersLogin';

const routes = (
	<Route path="/" component={ App }>
		<IndexRoute component={ Home } />
		<Route path="users" component={ UsersList } />
		<Route path="signup" component={ UsersNew } />
		<Route path="login" component={ UsersLogin } />
	</Route>
);

export default routes;
