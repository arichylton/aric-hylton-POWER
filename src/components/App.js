import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import Header from './Header/Header';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="tc">
					<Header />
					<Switch>
						<Route path="/" exact component={Home} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
