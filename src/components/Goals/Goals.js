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
			goalsList: []
		};
	}

	componentDidMount() {
		this.setState({ goalsList: this.props.user.goalsList });
	}

	handleChange = (date) => this.setState({ startDate: date });

	onSubmitModal = () => {
		fetch('http://localhost:3000/goals', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				weight: this.state.weight,
				wilks: this.state.wilks,
				type: this.state.type,
				date: this.state.startDate,
				id: this.props.user.id
			})
		})
			.then((response) => response.json())
			.then((data) => {
				this.setState({ goalsList: data });
			})
			.catch((err) => console.log(err));
	};

	renderGoalsList() {
		console.log(this.state.goalsList);
		if (!this.props.isSignedIn) {
			return <div>Hey, please Sign-In or Register to see or create new goals!</div>;
		} else {
			return <div>{moment(this.state.startDate.toUTCString()).format('ll').toString()}</div>;
		}
	}

	renderModalWilks() {
		return (
			<div>
				<form>
					<div className="form-group">
						<label htmlFor="wilks">Wilks</label>
						<input
							autoComplete="off"
							type="number"
							className="form-control"
							id="wilks"
							aria-describedby="wilksHelp"
							placeholder="Enter Wilks"
							onChange={(e) => this.setState({ wilks: e.target.value })}
						/>
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
						<input
							autoComplete="off"
							type="number"
							className="form-control"
							id="weight"
							aria-describedby="weightHelp"
							placeholder="Enter Weight"
							onChange={(e) => this.setState({ weight: e.target.value })}
						/>
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
						Create a new Wilks Goal
					</button>
					<button
						type="button"
						className="btn btn-primary"
						data-toggle="modal"
						data-target="#weight"
						onClick={() => this.setState({ type: 'weight' })}
					>
						Create a new Weight Goal
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

	render() {
		if (!this.props.isSignedIn) {
			return (
				<div>
					{this.renderGoalsJumbo()}
					{this.renderGoalsList()}
				</div>
			);
		} else {
			return (
				<div>
					{this.renderGoalsJumbo()}
					{this.renderGoalsList()}
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
