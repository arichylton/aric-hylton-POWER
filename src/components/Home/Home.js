import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Home.css';
import workout from '../../pics/workout.png';
import sword from '../../pics/sword.png';
import stretching from '../../pics/stretching.png';
import meditation from '../../pics/meditation.png';
import friend from '../../pics/friend.png';
import food from '../../pics/food.png';

class Home extends React.Component {
	renderItemsList() {
		return (
			<div className="container listGrid">
				<Link to="/plan">
					<div className="list-col grow">
						<span className="link black hover-bg-light-blue">Plan</span>
						<img src={workout} alt="" width="300px" height="auto" />
					</div>
				</Link>
				<Link to="/plan">
					<div className="list-col grow">
						<span className="link black hover-bg-light-blue">Diet</span>
						<img src={food} alt="" width="300px" height="auto" />
					</div>
				</Link>
				<Link to="/plan">
					<div className="list-col grow">
						<span className="link black hover-bg-light-blue">Progress</span>
						<img src={sword} alt="" width="300px" height="auto" />
					</div>
				</Link>
				<Link to="/plan">
					<div className="list-col grow">
						<span className="link black hover-bg-light-blue">Stretching</span>
						<img src={stretching} alt="" width="300px" height="auto" />
					</div>
				</Link>
				<Link to="/plan">
					<div className="list-col grow">
						<span className="link black hover-bg-light-blue">Meditation</span>
						<img src={meditation} alt="" width="300px" height="auto" />
					</div>
				</Link>

				<Link to="/plan">
					<div className="list-col grow">
						<span className="link black hover-bg-light-blue">Partners</span>
						<img src={friend} alt="" width="300px" height="auto" />
					</div>
				</Link>
			</div>
		);
	}

	renderCover() {
		return (
			<div className="jumbotron jumbotron-fluid home">
				<div className="container centered">
					<h1 className="display-4 animated pulse infinite header-home">POWER</h1>
					<p className="lead animated fadeIn">Got Wilks?</p>
				</div>
			</div>
		);
	}

	renderTips() {
		if (this.props.user.name) {
			return <h2>{this.props.user.name}'s Tips</h2>;
		} else {
			return <h2>Tips</h2>;
		}
	}

	render() {
		return (
			<div>
				{this.renderCover()}
				<div className="centered">{this.renderTips()}</div>

				{this.renderItemsList()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { user: state.user };
};

export default connect(mapStateToProps)(Home);
