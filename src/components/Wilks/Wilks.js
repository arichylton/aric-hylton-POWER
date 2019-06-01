import React from 'react';
import { connect } from 'react-redux';

import { getWilks } from '../../actions/index';
import './Wilks.css';

class Wilks extends React.Component {
	constructor() {
		super();

		this.state = {
			weight: 0,
			total: 0,
			wilks: 0,
			gender: '',
			type: 'lbs'
		};
	}

	calcWilks = () => {
		let { total, weight, gender, type } = this.state;

		if (gender === 'male' && type === 'kgs') {
			let num =
				total *
				(500 /
					(-216.0475144 +
						16.2606339 * weight +
						-0.002388645 * weight ** 2 +
						-0.00113732 * weight ** 3 +
						7.01863e-6 * weight ** 4 +
						-1.291e-8 * weight ** 5));
			this.setState({ wilks: num.toFixed(2) });
		} else if (gender === 'female' && type === 'kgs') {
			let num =
				total *
				(500 /
					(594.31747775582 +
						-27.23842536447 * weight +
						0.82112226871 * weight ** 2 +
						-0.00930733913 * weight ** 3 +
						4.731582e-5 * weight ** 4 +
						-9.054e-8 * weight ** 5));
			this.setState({ wilks: num.toFixed(2) });
		} else if (gender === 'male' && type === 'lbs') {
			let num =
				total /
				2.205 *
				(500 /
					(-216.0475144 +
						16.2606339 * (weight / 2.205) +
						-0.002388645 * (weight / 2.205) ** 2 +
						-0.00113732 * (weight / 2.205) ** 3 +
						7.01863e-6 * (weight / 2.205) ** 4 +
						-1.291e-8 * (weight / 2.205) ** 5));
			this.setState({ wilks: num.toFixed(2) });
		} else if (gender === 'female' && type === 'lbs') {
			let num =
				total /
				2.205 *
				(500 /
					(594.31747775582 +
						-27.23842536447 * (weight / 2.205) +
						0.82112226871 * (weight / 2.205) ** 2 +
						-0.00930733913 * (weight / 2.205) ** 3 +
						4.731582e-5 * (weight / 2.205) ** 4 +
						-9.054e-8 * (weight / 2.205) ** 5));
			this.setState({ wilks: num.toFixed(2) });
		}
		
	};

	onSubmitGetWilks = () => {
		fetch('http://localhost:3000/wilks', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				weight: this.state.weight,
				total: this.state.total,
				wilks: this.state.wilks,
				type: this.state.type,
				id: this.props.user.id
			})
		})
			.then((response) => response.json())
			.then((data) => {
				this.props.getWilks(data);
			})
			.catch(err => console.log(err));
	};

	onSubmitGetWilksAndCalcWilks = async () => {

		await this.calcWilks();
		if (this.props.user.id) {
			this.onSubmitGetWilks();
		}
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
				<div className="row wilks-calc">
					<div className="col">
						<div className="my-1 mb-4">
							<label className="" htmlFor="inlineFormCustomSelect">
								Gender
							</label>
							<select
								className="custom-select"
								id="inlineFormCustomSelect"
								required
								onChange={(event) => this.setState({ gender: event.target.value })}
							>
								<option value>Choose...</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="weight">Weight</label>
							<input
								type="text"
								required
								className="form-control"
								id="weight"
								aria-describedby="weightHelp"
								placeholder={`Enter weight in ${this.state.type}`}
								onChange={(e) => this.setState({ weight: e.target.value })}
							/>
							<small id="weightHelp" className="form-text text-muted">
								Weight of the lifter in {this.state.type}
							</small>
						</div>
						<div className="form-group">
							<label htmlFor="exampleInputPassword1">Total</label>
							<input
								type="text"
								required
								className="form-control"
								id="total"
								placeholder={`Enter total in ${this.state.type}`}
								onChange={(e) => this.setState({ total: e.target.value })}
							/>
							<small id="totalHelp" className="form-text text-muted">
								Total weight of the 3 big lifts in {this.state.type}. Deadlift / Squat / Bench
							</small>
						</div>
						<div className="wilks-buttons">
							<div className="btn-group" role="group" aria-label="Basic example">
								<button
									type="button"
									className={`btn ${this.state.type === 'lbs' ? 'btn-info' : 'btn-secondary'}`}
									onClick={() => this.setState({ type: 'lbs' })}
								>
									lbs
								</button>
								<button
									type="button"
									className={`btn ${this.state.type === 'kgs' ? 'btn-info' : 'btn-secondary'}`}
									onClick={() => this.setState({ type: 'kgs' })}
								>
									kgs
								</button>
							</div>
							<button type="button" className="btn btn-primary" onClick={this.onSubmitGetWilksAndCalcWilks}>
								Submit
							</button>
						</div>
					</div>

					<div className="col centered">
						<h1 className="display-3">{this.state.wilks}</h1>
					</div>
				</div>
			</form>
		);
	}

	renderWilksDataList() {
		return this.props.wilksData.map(stream => {
			return (
				<div className='item' key={stream.date}>
					Hello
				</div>
			)
		})
	}

	renderWilksData() {
		if (this.props.user.id) {
			return (
				<div className="wilks-data">
					{this.renderWilksDataList()}
				</div>
			)
		}	
	}

	renderWilksChart() {
		return (
			<div className="container table-responsive">
				<table className="table table-dark graph-section table-hover">
					<thead className="thead-light">
						<tr>
							<th scope="col">Mass lbs / kg</th>
							<th scope="col">Un-trained</th>
							<th scope="col">Novice</th>
							<th scope="col">Intermediate</th>
							<th scope="col">Advanced</th>
							<th scope="col">Elite</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">114 / 52</th>
							<td>116</td>
							<td>193</td>
							<td>227</td>
							<td>321</td>
							<td>416</td>
						</tr>
						<tr>
							<th scope="row">123 / 56</th>
							<td>116</td>
							<td>193</td>
							<td>230</td>
							<td>321</td>
							<td>416</td>
						</tr>
						<tr>
							<th scope="row">132 / 60</th>
							<td>117</td>
							<td>195</td>
							<td>231</td>
							<td>320</td>
							<td>414</td>
						</tr>
						<tr>
							<th scope="row">148 / 67</th>
							<td>118</td>
							<td>197</td>
							<td>236</td>
							<td>326</td>
							<td>416</td>
						</tr>
						<tr>
							<th scope="row">165 / 75</th>
							<td>119</td>
							<td>198</td>
							<td>236</td>
							<td>326</td>
							<td>415</td>
						</tr>
						<tr>
							<th scope="row">181 / 82</th>
							<td>120</td>
							<td>201</td>
							<td>239</td>
							<td>329</td>
							<td>418</td>
						</tr>
						<tr>
							<th scope="row">198 / 90</th>
							<td>121</td>
							<td>201</td>
							<td>241</td>
							<td>329</td>
							<td>416</td>
						</tr>
						<tr>
							<th scope="row">220 / 100</th>
							<td>121</td>
							<td>202</td>
							<td>243</td>
							<td>330</td>
							<td>415</td>
						</tr>
						<tr>
							<th scope="row">242 / 110</th>
							<td>123</td>
							<td>204</td>
							<td>242</td>
							<td>329</td>
							<td>412</td>
						</tr>
						<tr>
							<th scope="row">275 / 125</th>
							<td>122</td>
							<td>203</td>
							<td>241</td>
							<td>326</td>
							<td>408</td>
						</tr>
						<tr>
							<th scope="row">319 / 145</th>
							<td>121</td>
							<td>202</td>
							<td>240</td>
							<td>324</td>
							<td>405</td>
						</tr>
						<tr>
							<th scope="row">319+ / 145+</th>
							<td>124</td>
							<td>206</td>
							<td>245</td>
							<td>330</td>
							<td>413</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}

	renderWilksInformation() {
		if (this.state.wilks === 0) {
			return null;
		} else {
			return (
				<h3>
					({this.state.gender}){' '}
					<span style={{ color: 'lightgreen' }}>{Number(this.state.total).toFixed(0)}</span>
					{this.state.type} total @<span style={{ color: 'orange' }}>
						{Number(this.state.weight).toFixed(1)}
					</span>
					{this.state.type} bodyweight = <span style={{ color: 'lightblue' }}>{this.state.wilks}</span>
				</h3>
			);
		}
	}

	render() {
		return (
			<div>
				<div>{this.renderWilksJumbo()}</div>
				<div className="wilks-section">{this.renderWilksCalc()}</div>
				<div>{this.renderWilksData()}</div>
				<div className="wilks-chart">
					<h1>Wilks Comparison Chart</h1>
					{this.renderWilksInformation()}
					{this.renderWilksChart()}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { user: state.user, wilksData: Object.values(state.wilksData) }
}

export default connect(mapStateToProps, { getWilks })(Wilks);
