import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import MainMenu from 'screens/App/menus/MainMenu';

const App = ({children}) => (
	<div>
	  <MainMenu />
		{children}
	</div>
)

export default App;