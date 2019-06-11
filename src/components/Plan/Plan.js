import React from 'react';

import './Plan.css';

import workout from '../../pics/workout.png';
import sword from '../../pics/sword.png';
import stretching from '../../pics/stretching.png';
import meditation from '../../pics/meditation.png';
import friend from '../../pics/friend.png';
import food from '../../pics/food.png';

class Plan extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="plan">
				<div className="cards-list">
					<h2 className="text-white">Plans</h2>
					<div
						className="card text-white bg-transparent br3 ba b--black-10 w-100 w-50-m w-25-l mw6 shadow-5 center"
						style={{ maxWidth: '65vw' }}
					>
						<div className="row no-gutters">
							<div className="col-md-4">
								<img src={workout} className="card-img" alt="..." />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h4 className="card-title">Plan</h4>
									<p className="card-text">
										Having a plan is always important. It's what makes sure our goals are being
										reached and what we can change to make us reach even further.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						className="card text-white bg-transparent br3 ba b--black-10 w-100 w-50-m w-25-l mw6 shadow-5 center"
						style={{ maxWidth: '65vw' }}
					>
						<div className="row no-gutters">
							<div className="col-md-8">
								<div className="card-body">
									<h4 className="card-title">Diet</h4>
									<p className="card-text">
										Planning out a diet can be hard. Everyone is different and there are a lot of
										programs out there that work great for most people. It's important to try out
										different diets and see what works best for you and your goals.
									</p>
								</div>
							</div>
							<div className="col-md-4">
								<img src={food} className="card-img" alt="..." />
							</div>
						</div>
					</div>
					<div
						className="card text-white bg-transparent br3 ba b--black-10 w-100 w-50-m w-25-l mw6 shadow-5 center"
						style={{ maxWidth: '65vw' }}
					>
						<div className="row no-gutters">
							<div className="col-md-4">
								<img src={sword} className="card-img" alt="..." />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h4 className="card-title">Progress</h4>
									<p className="card-text">
										Progress is something that should come with a good plan. If you are making
										progress, it's not to say you couldn't be making more. Fine tuning every aspect
										is important for a progress, however, don't stress too much about it!
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						className="card text-white bg-transparent br3 ba b--black-10 w-100 w-50-m w-25-l mw6 shadow-5 center"
						style={{ maxWidth: '65vw' }}
					>
						<div className="row no-gutters">
							<div className="col-md-8">
								<div className="card-body">
									<h4 className="card-title">Stretching</h4>
									<p className="card-text">
										Including stretches into your routine is vital to keeping on track. Keeping
										joints healthy and functional will ensure progress doesnt halt and you stay
										safe.
									</p>
								</div>
							</div>
							<div className="col-md-4">
								<img src={stretching} className="card-img" alt="..." />
							</div>
						</div>
					</div>
					<div
						className="card text-white bg-transparent br3 ba b--black-10 w-100 w-50-m w-25-l mw6 shadow-5"
						style={{ maxWidth: '65vw' }}
					>
						<div className="row no-gutters">
							<div className="col-md-4">
								<img src={meditation} className="card-img" alt="..." />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h4 className="card-title">Meditation</h4>
									<p className="card-text">
										While the phsyical benefits of meditation might not be all that appealing to
										most. The mental health benefits are too good to pass up for a good plan. It's
										important to keep the body and mind in top shape!
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						className="card text-white bg-transparent br3 ba b--black-10 w-100 w-50-m w-25-l mw6 shadow-5 center"
						style={{ maxWidth: '65vw' }}
					>
						<div className="row no-gutters">
							<div className="col-md-8">
								<div className="card-body">
									<h4 className="card-title">Partners</h4>
									<p className="card-text">
										Having a parter is one of, if not the, most important part of a good plan. The
										motivation and knowledge that someone else is there, going through the steps
										with you, can really go a long way.
									</p>
								</div>
							</div>
							<div className="col-md-4">
								<img src={friend} className="card-img" alt="..." />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Plan;
