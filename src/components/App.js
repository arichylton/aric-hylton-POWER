import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import Header from './Header/Header';
import Wilks from './Wilks/Wilks';
import Signin from './Signin/Signin'
import './App.css';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="tc">
					<Header />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/wilks" exact component={Wilks} />
						<Route path="/signin" exact component={Signin} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
