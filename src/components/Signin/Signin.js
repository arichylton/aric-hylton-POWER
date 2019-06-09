import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn, getUser, getWilks } from '../../actions/index';

import './Signin.css';

class Signin extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			signInEmail: '',
			signInPassword: '',
		};
	}	

	onEmailChange = (event) => {
		this.setState({ signInEmail: event.target.value });
	};

	onPasswordChange = (event) => {
		this.setState({ signInPassword: event.target.value });
	};

	onSubmitSignIn = () => {
		
		fetch('https://aric-hylton-power-api.herokuapp.com/signin', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
			.then((response) => response.json())
			.then((user) => {
				
				if (!user.email) {
					alert('Incorrect credentials. Please try again');
				} else {
					this.props.signIn();
					this.props.getUser(user);
					this.props.getWilks(this.props.wilksData);
				}
		});
	};

	render() {
		return (
			<div className="signin">
				{' '}
				<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
					<main className="pa4 black-80">
						<div className="measure">
							<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
								<legend className="f1 fw6 ph0 mh0 white">Sign In</legend>
								<div className="mt3">
									<label className="db fw6 lh-copy f6 white" htmlFor="email-address">
										Email
									</label>
									<input
										onChange={this.onEmailChange}
										className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
										type="email"
										name="email-address"
										id="email-address"
									/>
								</div>
								<div className="mv3">
									<label className="db fw6 lh-copy f6 white" htmlFor="password">
										Password
									</label>
									<input
										onChange={this.onPasswordChange}
										className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
										type="password"
										name="password"
										id="password"
									/>
								</div>
							</fieldset>
							<div>
								<div className="">
									<Link to="/">
										<input
											className="b ph3 pv2 input-reset ba b--white br1 bg-transparent grow pointer f6 dib white"
											type="submit"
											value="Sign in"
											onClick={this.onSubmitSignIn}
										/>
									</Link>
								</div>
								<div className="lh-copy mt3">
									<Link to='/register' className="f6 link dim black db pointer white">
										Register
									</Link>
								</div>
							</div>
						</div>
					</main>
				</article>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { wilksData: Object.values(state.wilksData) }
}

export default connect(mapStateToProps, { signIn, getUser, getWilks })(Signin);
