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
			<div class="container listGrid">
				<div class="list-col grow">
				<span>Plan</span>
					<img src={workout} alt="" />
				</div>
				<div class="list-col grow">
				<span>Diet</span>
					<img src={food} alt="" />
				</div>
				<div class="list-col grow">
				<span>Progress</span>
					<img src={sword} alt="" />
				</div>
				<div class="list-col grow">
					<span>Stretching</span>
					<img src={stretching} alt="" />
				</div>
				<div class="list-col grow">
				<span>Meditation</span>
					<img src={meditation} alt="" />
				</div>
				<div class="list-col grow">
				<span>Partners</span>
					<img src={friend} alt="" />
				</div>
			</div>
		);
	}

	renderCover() {
		return (
			<div>
				Cover
			</div>
		)
	}

	render() {
		return (
			<div className="home">
				{this.renderCover()}
				{this.renderItemsList()}				
			</div>
		);
	}
}

export default Home;
