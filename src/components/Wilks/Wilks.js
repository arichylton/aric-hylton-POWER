import React from 'react';

import './Wilks.css';
import { thisTypeAnnotation } from '@babel/types';

class Wilks extends React.Component {
	constructor() {
		super();

		this.state = {
			weight: 0,
			total: 0,
			wilks: 0
		};
    }
    
    calcWilks = () => {
        this.setState({ wilks: (Number(this.state.weight) + Number(this.state.total))})
    }

	renderWilksJumbo() {
		return (
			<div className="jumbotron jumbotron-fluid wilks">
				<div className="container centered">
					<h1 className="display-4 animated fadeIn">Wilks</h1>
					<p className="lead" style={{ fontWeight: 400 }}>
						The Wilks Formula is a coefficient that can be used to measure the strength of a powerlifter
						against other powerlifters despite the different weights of the lifters.
					</p>
				</div>
			</div>
		);
	}

	renderWilksCalc() {
		return (
			<form className="container">
				<div className="row">
					<div className="col">
						<div className="form-group">
							<label htmlFor="weight">Weight</label>
							<input
								type="text"
								className="form-control"
								id="weight"
								aria-describedby="weightHelp"
								placeholder="Enter Weight"
								onChange={(e) => this.setState({ weight: e.target.value })}
							/>
							<small id="weightHelp" className="form-text text-muted">
								Weight of the lifter.
							</small>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Total</label>
							<input
								type="text"
								className="form-control"
								id="total"
								placeholder="Enter Total"
								onChange={(e) => this.setState({ total: e.target.value })}
							/>
							<small id="totalHelp" className="form-text text-muted">
								Total weight of the 3 big lifts. Deadlift / Squat / Bench
							</small>
						</div>
						<div className="btn-group" role="group" aria-label="Basic example">
							<button type="button" className="btn btn-secondary">
								Left
							</button>
							<button type="button" className="btn btn-primary" onClick={this.calcWilks}>
								Submit
							</button>
						</div>
					</div>

					<div className="col centered">
						<h1 className="display-4">{this.state.wilks}</h1>
					</div>
				</div>
			</form>
		);
	}

	render() {
		return (
			<div>
				<div>{this.renderWilksJumbo()}</div>
				<div className="wilks-section">{this.renderWilksCalc()}</div>
			</div>
		);
	}
}

export default Wilks;
