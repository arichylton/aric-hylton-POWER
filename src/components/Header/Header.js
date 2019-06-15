import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signOut } from '../../actions/index';
import './Header.css';
import dumbell from '../../pics/dumbell.png';

class Header extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	renderIsSignedIn() {
		if (!this.props.user.email) {
			return (
				<div>
					<Link to="/signin" className="navbar-brand ghost">
						<span className="v-mid m-4">Sign-In</span>
					</Link>
					<Link className="navbar-brand ghost" to="/register">
						<span className="v-mid">Register</span>
					</Link>
				</div>
			);
		} else {
			return (
				<Link to="/" className="navbar-brand ghost" onClick={() => this.props.signOut()}>
					<span className="v-mid m-4">Sign-Out</span>
				</Link>
			);
		}
	}

	render() {
		return (
			<div className="header-background fixed-top">
				<nav className="navbar navbar-light nav-container">
					<div className="ghost-header">
						<Link to="/" className="navbar-brand">
							<img src={dumbell} width="30" height="30" className="align-center ghost" alt="" />
							<span className="v-mid mr-4">POWER</span>
						</Link>
						<div className="hamburger">
							<div class="navbar-header">
								<div class="container navbar-toggle collapsed" onclick="myFunction(this)" data-toggle="collapse">
									<div class="bar1" />
									<div class="bar2" />
									<div class="bar3" />
								</div>
							</div>

							<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								<ul class="nav navbar-nav">
									<li>
										<a href="index.php">Home</a>
									</li>
									<li>
										<a href="about.php">About</a>
									</li>
									<li>
										<a href="#portfolio">Portfolio</a>
									</li>
									<li>
										<a href="#">Blog</a>
									</li>
									<li>
										<a href="contact.php">Contact</a>
									</li>
								</ul>
							</div>
						</div>

						<Link to="/wilks" className="navbar-brand ghost">
							<span className="v-mid mr-4">Wilks</span>
						</Link>
						<Link to="/goals" className="navbar-brand ghost">
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
