import React from 'react';

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
				<div className="list-col grow">
					<span>Plan</span>
					<img src={workout} alt="" width="300px" height="auto" />
				</div>
				<div className="list-col grow">
					<span>Diet</span>
					<img src={food} alt="" width="300px" height="auto" />
				</div>
				<div className="list-col grow">
					<span>Progress</span>
					<img src={sword} alt="" width="300px" height="auto" />
				</div>
				<div className="list-col grow">
					<span>Stretching</span>
					<img src={stretching} alt="" width="300px" height="auto" />
				</div>
				<div className="list-col grow">
					<span>Meditation</span>
					<img src={meditation} alt="" width="300px" height="auto" />
				</div>
				<div className="list-col grow">
					<span>Partners</span>
					<img src={friend} alt="" width="300px" height="auto" />
				</div>
			</div>
		);
	}

	renderCover() {
		return (
			<div className="jumbotron jumbotron-fluid">
				<div className="container centered">
					<h1 className="display-4">POWER</h1>
					<p className="lead animated fadeIn">
						Got Wilks?
					</p>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div>
				{this.renderCover()}
				<h2 className="centered">Guide</h2>
				{this.renderItemsList()}
			</div>
		);
	}
}

export default Home;
