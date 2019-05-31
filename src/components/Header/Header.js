import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import dumbell from '../../pics/dumbell.png';

class Header extends React.Component {
	render() {
		return (
			<div className="header-background fixed-top">
				<nav className="navbar navbar-light nav-container">
					<div>
						<Link to="/" className="navbar-brand">
							<img src={dumbell} width="30" height="30" className="d-inline-block align-center" alt="" />
							<span className="v-mid mr-4">POWER</span>
						</Link>
						<Link to="/wilks" className="navbar-brand">
							<span className="v-mid mr-4">Wilks</span>
						</Link>
						<Link to="/goals" className="navbar-brand">
							<span className="v-mid">Goals</span>
						</Link>
					</div>

					<div>
						<a className="navbar-brand" href="/#">
							<span className="v-mid m-4">Sign-In</span>
						</a>
						<a className="navbar-brand" href="/#">
							<span className="v-mid">Register</span>
						</a>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;
