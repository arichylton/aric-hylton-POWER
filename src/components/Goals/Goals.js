import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import './Goals.css';

class Goals extends React.Component {
	constructor() {
		super();

		this.state = {
			weight: 0,
			wilks: 0,
			startDate: new Date(),
			type: '',
			value: 'lbs',
			goalsList: []
		};
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		this.setState({ goalsList: this.props.user.goalsList });
	}

	handleChange = (date) => this.setState({ startDate: date });

	onSubmitModal = () => {
		if (this.state.wilks === 0 && this.state.weight === 0) {
			return alert('Please put in a correct number!');
		} else {
			fetch('https://aric-hylton-power-api.herokuapp.com/goals', {
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					weight: this.state.weight,
					wilks: this.state.wilks,
					type: this.state.type,
					value: this.state.value,
					date: this.state.startDate,
					email: this.props.user.email,
					id: this.props.user.id
				})
			})
				.then((response) => response.json())
				.then((data) => {
					this.setState({ goalsList: data });
				})
				.catch((err) => console.log(err));
		}
	};

	renderGoalsWeightList() {
		return this.state.goalsList.filter((goal) => goal.type === 'weight').map((goal, index) => {
			return (
				<div key={index} className="list-group-item wilks-item goalsList-weight-item">
					<h3>
						Goal Type: <span style={{ color: 'lightgreen' }}>{goal.type}</span>
					</h3>{' '}
					<h3>
						{goal.weight} {goal.value}
					</h3>
					<h3>by {moment(goal.date).format('ll').toString()}</h3>
					<button onClick={() => this.onClickDeleteScore(goal.id)} className="btn btn-danger grow">
						Delete
					</button>
				</div>
			);
		});
	}

	renderWilksGoalsList() {
		return this.state.goalsList.filter((goal) => goal.type === 'wilks').map((goal, index) => {
			return (
				<div key={index} className="list-group-item wilks-item goalsList-wilks-item">
					<h3>
						Goal Type: <span style={{ color: 'lightgreen' }}>{goal.type}</span>
					</h3>{' '}
					<h3>
						{goal.wilks} {goal.value}
					</h3>
					<h3>by {moment(goal.date).format('ll').toString()}</h3>
					<button onClick={() => this.onClickDeleteScore(goal.id)} className="btn btn-danger grow">
						Delete
					</button>
				</div>
			);
		});
	}

	onClickDeleteScore = (id) => {
		this.setState({ goalsList: this.state.goalsList.filter((el) => el.id !== id) });
		fetch(`https://aric-hylton-power-api.herokuapp.com/goals/${this.props.user.email}/${id}`, {
			method: 'delete',
			headers: { 'Content-Type': 'application/json' }
		});
	};

	renderModalWilks() {
		return (
			<div>
				<form>
					<div className="form-group">
						<label htmlFor="wilks">Wilks</label>
						<div className="goal-buttons">
							<input
								autoComplete="off"
								type="number"
								className="form-control"
								id="wilks"
								aria-describedby="wilksHelp"
								placeholder="Enter Wilks"
								onChange={(e) => this.setState({ wilks: e.target.value })}
							/>
							<div className="btn-group" role="group" aria-label="Basic example">
								<button
									type="button"
									className={`btn ${this.state.value === 'lbs' ? 'btn-info' : 'btn-secondary'}`}
									onClick={() => this.setState({ value: 'lbs' })}
								>
									lbs
								</button>
								<button
									type="button"
									className={`btn ${this.state.value === 'kgs' ? 'btn-info' : 'btn-secondary'}`}
									onClick={() => this.setState({ value: 'kgs' })}
								>
									kgs
								</button>
							</div>
						</div>

						<small id="wilksHelp" className="form-text text-muted">
							Your wilks is safe with us
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="date">When?</label>
						<DatePicker selected={this.state.startDate} onChange={this.handleChange} withPortal />
					</div>
				</form>
			</div>
		);
	}

	renderModalWeight() {
		return (
			<div>
				<form>
					<div className="form-group">
						<label htmlFor="weight">Weight</label>
						<div className="goal-buttons">
							<input
								autoComplete="off"
								type="number"
								className="form-control"
								id="weight"
								aria-describedby="weightHelp"
								placeholder="Enter desired bodyweight"
								onChange={(e) => this.setState({ weight: e.target.value })}
							/>
							<div className="btn-group" role="group" aria-label="Basic example">
								<button
									type="button"
									className={`btn ${this.state.value === 'lbs' ? 'btn-info' : 'btn-secondary'}`}
									onClick={() => this.setState({ value: 'lbs' })}
								>
									lbs
								</button>
								<button
									type="button"
									className={`btn ${this.state.value === 'kgs' ? 'btn-info' : 'btn-secondary'}`}
									onClick={() => this.setState({ value: 'kgs' })}
								>
									kgs
								</button>
							</div>
						</div>

						<small id="weightHelp" className="form-text text-muted">
							Weight is just saved up energy
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">When?</label>
						<DatePicker selected={this.state.startDate} onChange={this.handleChange} withPortal />
					</div>
				</form>
			</div>
		);
	}

	renderModals() {
		return (
			<div>
				<div className="modal-buttons container">
					<button
						type="button"
						className="btn btn-primary"
						data-toggle="modal"
						data-target="#wilks"
						onClick={() => this.setState({ type: 'wilks' })}
					>
						Create Wilks Goal
					</button>
					<button
						type="button"
						className="btn btn-primary"
						data-toggle="modal"
						data-target="#weight"
						onClick={() => this.setState({ type: 'weight' })}
					>
						Create Bodyweight Goal
					</button>
				</div>

				<div
					className="modal fade"
					id="wilks"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalCenterTitle">
									Wilks Goal
								</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">{this.renderModalWilks()}</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">
									Close
								</button>
								<button
									type="button"
									className="btn btn-primary"
									data-dismiss="modal"
									onClick={this.onSubmitModal}
								>
									Create
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					className="modal fade"
					id="weight"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalCenterTitle">
									Weight Goal
								</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">{this.renderModalWeight()}</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">
									Close
								</button>
								<button
									type="button"
									className="btn btn-primary"
									data-dismiss="modal"
									onClick={this.onSubmitModal}
								>
									Create
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	renderGoalsJumbo() {
		return (
			<div className="jumbotron jumbotron-fluid goals">
				<div className="container centered">
					<h1 className="display-4 animated fadeIn">Goals</h1>
					<p className="lead" style={{ fontWeight: 400 }}>
						Steady progress comes internally.
					</p>
				</div>
			</div>
		);
	}

	renderGoalsData() {
		if (this.props.user.name && this.state.goalsList !== 0) {
			return (
				<div className="wilks-data container mt-3">
					<h1 className="scores-header">{this.props.user.name}'s goals</h1>
					<div className="list-group">
						<h3 className="m-4">Wilks</h3>
						{this.renderWilksGoalsList()}
					</div>
					<div className="list-group  mt-3">
						<h3 className="m-4">Bodyweight</h3>
						{this.renderGoalsWeightList()}
					</div>
				</div>
			);
		} else {
			return null;
		}
	}

	render() {
		if (!this.props.isSignedIn) {
			return (
				<div>
					{this.renderGoalsJumbo()}
					<div className="m-4">Hey! Please Sign-In or Register to create or see goals.</div>
				</div>
			);
		} else if (this.state.goalsList.length === 0) {
			return (
				<div>
					{this.renderGoalsJumbo()}
					<div className="m-4">Create a new goal!</div>
					{this.renderModals()}
				</div>
			);
		} else {
			return (
				<div>
					{this.renderGoalsJumbo()}
					<div className="m-4">{this.renderGoalsData()}</div>
					{this.renderModals()}
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return { isSignedIn: state.signin.isSignedIn, user: state.user };
};

export default connect(mapStateToProps)(Goals);
