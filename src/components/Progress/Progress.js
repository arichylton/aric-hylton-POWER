import React from 'react';

import './Progress.css';

class Progress extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="progress-body">
				<div className="jumbotron jumbotron-progress bg-transparent jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Progress</h1>
						<p className="lead">The longest yard</p>
					</div>
				</div>

				<div class="progress">
					<div
						class="progress-bar"
						role="progressbar"
						style={{ width: '95%' }}
						aria-valuenow="25"
						aria-valuemin="0"
						aria-valuemax="100"
					>
					1 YARD LEFT
					</div>
				</div>
				<div
					className="diet-card text-black bg-white br3 ba b--black-10 w-100 w-50-m w-25-l shadow-5 center"
					style={{ maxWidth: '65vw' }}
				>
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title">You gotta burn it to earn it</h2>
							<div className="card-text diet-text">
								<h4 className="underline">Progress</h4>
								<p>The underlying factor most people don't present is discipline. Displicine is the entire drive that defines our character. Keeping to a program or regimen is often associated with motivation, however, motivation can change drastically and on short notice. Having the discipline to get up on days where you don't feel motivated or you think "one bite won't hurt" is what seperates the people who make progress and those who stay on the hamster wheel.</p>

								<h4 className="underline">Training Routine</h4>
								<p>A gym routine can vary massively depending on the goals of the athlete. Since there are so many ways of working out, in general, the information will be for powerlifting.</p>

								<p className="lh-copy">
									<span className="underline b">Cardio</span> is sometimes seen as a negative when it comes to strength training due the muscle burning myths that surround it. Now, the true benefits to the introduction of cardio in a workout regimen are plentiful. 
								</p>
								<ul>
									<li>Improves recovery between training sessions</li>
									<li>Helps control and/or reduce body fat levels</li>
									<li>Improves immune function</li>
									<li>Reduces cortisol levels</li>
									<li>Improves strength</li>
								</ul>

								<p className="lh-copy">
									<span className="underline b">Warm ups</span> are very important to safety and they help get the CNS used to the future working sets. They also allow mind muscle connections to increase your ability to specifically target that muscle group. The ability to get form down while conserving energy for future workloads.
								</p>

								<p className="lh-copy">
									<span className="underline b">Working Sets</span> can be widely varied depending on the main program of the lifter. In general keeping reps in the 3-6 rep range is what would obtain the most strength. Hypertrophy, however, is huge factor in terms of strengh development as well. Having a bigger base for most lifts will result in greater stability and in some cases less ROM. They are both indirectly affecting each other. Essentially if you gain one the other will soon follow.<br /><br />
									In most cases, keeping to a program that progressivly overloads is the best choice. More volume, means more ability for the muscles to break down and grow even bigger. <br /><br />
									Since the squat, deadlift and bench are huge compound movements and are the main lifts for every powerlifter. Introducing other movements that will assist or improve the big 3 is the goal.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Progress;
