import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import MainMenu from 'App/shared/MainMenu';
import Notifications from 'App/shared/Notifications';

const App = ({children}) => (
	<div>
	  <MainMenu />
    <Notifications />
		{ children }
	</div>
);

export default App;
