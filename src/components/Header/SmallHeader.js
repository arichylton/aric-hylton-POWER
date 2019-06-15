import React from 'react';
import { Link } from 'react-router-dom';
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBCollapse,
	MDBContainer,
	MDBHamburgerToggler
} from 'mdbreact';
import { connect } from 'react-redux';

import { signOut } from '../../actions/index';
import './SmallHeader.css';

class SmallHeader extends React.Component {
	state = {
		collapse1: false,
		collapseID: ''
	};

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	toggleCollapse = (collapseID) => () => {
		this.setState((prevState) => ({ collapseID: prevState.collapseID !== collapseID ? collapseID : '' }));
	};

	toggleSingleCollapse = (collapseId) => {
		this.setState({
			...this.state,
			[collapseId]: !this.state[collapseId]
		});
	};

	renderIsSignedIn() {
		if (!this.props.user.email) {
			return (
				<div>
					<MDBNavItem>
						<MDBNavLink to="/signin" onClick={() => this.toggleSingleCollapse('collapse1')}>Sign In</MDBNavLink>
					</MDBNavItem>
					<MDBNavItem>
						<MDBNavLink to="/register" onClick={() => this.toggleSingleCollapse('collapse1')}>Register</MDBNavLink>
					</MDBNavItem>
				</div>
			);
		} else {
			return (
				<MDBNavItem>
					<MDBNavLink to="/">
						<span onClick={() => this.props.signOut()}>Sign Out</span>
					</MDBNavLink>
				</MDBNavItem>
			);
		}
	}

	render() {
		return (
			<div className="nav-container big-ghost">
				<MDBContainer>
					<MDBNavbar color="bg-purple lighten-4" dark>
						<MDBContainer>
							<MDBNavbarBrand>
								<span className="tc-white">
									<Link to="/" onClick={() => this.toggleSingleCollapse('collapse1')}>POWER</Link>
								</span>
							</MDBNavbarBrand>
							<MDBHamburgerToggler
								color="white"
								id="hamburger1"
								onClick={() => this.toggleSingleCollapse('collapse1')}
							/>
							<MDBCollapse isOpen={this.state.collapse1} navbar>
								<MDBNavbarNav left>
									<MDBNavItem>
										<MDBNavLink to="/wilks" onClick={() => this.toggleSingleCollapse('collapse1')}>Wilks</MDBNavLink>
									</MDBNavItem>
									<MDBNavItem>
										<MDBNavLink to="/goals" onClick={() => this.toggleSingleCollapse('collapse1')}>Goals</MDBNavLink>
									</MDBNavItem>
									{this.renderIsSignedIn()}
								</MDBNavbarNav>
							</MDBCollapse>
						</MDBContainer>
					</MDBNavbar>
				</MDBContainer>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { isSignedIn: state.signin.isSignedIn, user: state.user };
};

export default connect(mapStateToProps, { signOut })(SmallHeader);
