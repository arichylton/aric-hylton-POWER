import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser, getWilks, register } from '../../actions/index';

class Register extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			registerEmail: '',
			registerPassword: '',
			name: ''
		};
	}

	onNameChange = (event) => {
		this.setState({ name: event.target.value });
	};

	onEmailChange = (event) => {
		this.setState({ registerEmail: event.target.value });
	};

	onPasswordChange = (event) => {
		this.setState({ registerPassword: event.target.value });
	};

	onSubmitRegister = () => {
		this.props.register();
		fetch('https://aric-hylton-power-api.herokuapp.com/register', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: this.state.registerEmail,
				password: this.state.registerPassword,
				name: this.state.name
			})
		})
			.then((response) => response.json())
			.then((user) => {
				this.props.getUser(user);
		})
		.catch(err => console.log(err));
	};

	render() {
		return (
			<div className="signin">
				{' '}
				<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
					<main className="pa4 black-80">
						<div className="measure">
							<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
								<legend className="f1 fw6 ph0 mh0 white">Register</legend>
								<div className="mt3">
									<label className="db fw6 lh-copy f6 white" htmlFor="name">
										Name
									</label>
									<input
										onChange={this.onNameChange}
										className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
										type="text"
										name="name"
										id="name"
									/>
								</div>
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
											className="b ph3 pv2 input-reset ba b--white br1 white bg-transparent grow pointer f6 dib"
											type="submit"
											value="Register"
											onClick={this.onSubmitRegister}
										/>
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

export default connect(mapStateToProps, { getUser, getWilks, register })(Register);