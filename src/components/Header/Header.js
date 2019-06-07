import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signOut } from '../../actions/index';
import './Header.css';
import dumbell from '../../pics/dumbell.png';

class Header extends React.Component {

	renderIsSignedIn() {
		if (!this.props.user.email) {
			return (
				<div>
					<Link to="/signin" className="navbar-brand">
						<span className="v-mid m-4">Sign-In</span>
					</Link>
					<Link className="navbar-brand" to='/register'>
						<span className="v-mid">Register</span>
					</Link>
				</div>
			);
		} else {
			return (
				<Link to="/" className="navbar-brand" onClick={() => this.props.signOut()}>
					<span className="v-mid m-4">Sign-Out</span>
				</Link>
			)
		}
	}

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

					{this.renderIsSignedIn()}
				</nav>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { isSignedIn: state.signin.isSignedIn, user: state.user };
};

export default connect(mapStateToProps, { signOut })(Header);
