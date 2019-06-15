import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import Header from './Header/Header';
import Wilks from './Wilks/Wilks';
import Signin from './Signin/Signin';
import Register from './register/Register';
import Goals from './Goals/Goals';
import Plan from './Plan/Plan';
import Progress from './Progress/Progress';
import Stretching from './Stretching/Stretching';
import Partners from './Partners/Partners';
import Diet from './Diet/Diet';
import Meditation from './Meditation/Meditation';
import Footer from './Footer/Footer';
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
						<Route path="/plan" exact component={Plan} />
						<Route path="/diet" exact component={Diet} />
						<Route path="/progress" exact component={Progress} />
						<Route path="/stretching" exact component={Stretching} />
						<Route path="/meditation" exact component={Meditation} />
						<Route path="/partners" exact component={Partners} />
						<Route path="/register" exact component={Register} />
						<Route path="/goals" exact component={Goals} />
					</Switch>

					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
