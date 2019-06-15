import React from 'react';

import './Stretching.css';

import stretchingMale from '../../pics/stretching-male.jpg';
import stretchingWoman from '../../pics/stretching-woman.jpg';
import stretchingWomanSitting from '../../pics/stretching-sitting-woman.jpg';
import stretchingWomanStanding from '../../pics/stretching-woman-standing.jpg';

class Stretching extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="stretching-body">
				<div className="jumbotron jumbotron-stretching bg-transparent jumbotron-fluid">
					<div className="container">
						<h1 className="display-4 animated slideInDown">Stretching</h1>
						<p className="lead animated slideInDown">The underdog</p>
					</div>
				</div>

				<div className="grid-diet animated slideInUp">
					<img src={stretchingWoman} alt="" className="grid-diet-item" />
					<img src={stretchingWomanSitting} alt="" className="grid-diet-item" />
					<img src={stretchingMale} alt="" className="grid-diet-item" />
					<img src={stretchingWomanStanding} alt="" className="grid-diet-item" />
				</div>

				<div
					className="diet-card text-black bg-white br3 ba b--black-10 w-100 w-50-m w-25-l shadow-5 center"
					style={{ maxWidth: '65vw' }}
				>
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title">The safe way</h2>
							<div className="card-text diet-text">
								<h4 className="underline">Stretching</h4>
								<p>
									Starting out, many athletes disregard stretching or they will put minimal time into
									it. Stretching is important as it assists with form and helps athletes get into
									proper lifting positions. Common occurances stretching can help with is getting a
									deeper squat while avoiding rounding the lower back. If your hip flexors are tight,
									the natural movement for your hips at that point at the bottom of a deep squat is to
									pull in causing a non-neutral spinal position. A key way to fix this is stretching.
									There are of course other factors that cause the dreaded "butt wink" such as how
									deep the athletes hip sockets are, but, the science points to stretching as the main
									way to alleviate it. <br />
									<br />
									Another occurence is poor rotator cuff mobility, reducing the atheletes ability to
									get in the correct position. Of course athletes can alleviate this through
									stretching as well. Taking 10 minutes before a workout and after a workout can help
									with strength, recovery, and safety. The gains are endless.
								</p>

								<h4 className="underline">Types</h4>

								<p className="lh-copy">
									<span className="underline b">Static</span> is what most athletes think of when it
									comes to stretching. It's a held position for a set amount of time targeting
									specific tissue. Often associated negativly with higher injury rates especially when
									done cold. Depending on the duration of the static stretch, some athletes have even
									seen a decrease in strength during the soon to come workout. In general, static
									stretches are best kept in shorter durations, less than 45 seconds per stretch, with
									very little time spent in total. Warm up routines should keep static stretches to a
									minimum.
								</p>
								<p className="lh-copy">
									<span className="underline b">Dynamic</span> stretching involves a greater ROM
									targeting a specific tissue without the use of a extended hold. Dynamic stretching
									can be utilized before a workout to get the blood flowing, increase ROM and
									flexibility. Most of the time it is done to prepare for workout while static
									stretching after a workout is great for increased tissue elasticity.
								</p>

								<h4 className="underline">Summary</h4>
								<p className="lh-copy">
									Stretching, if done right, can help athletes stay safe, get in correct positions,
									and prepare the body for the workout to come. It's safe to say it is a great tool
									for any serious athlete should utilize it in their program.
								</p>

								<p>
									Resources: <br />
									<i>
										<cite>
											<a
												href="https://www.t-nation.com/training/the-5-dumbest-stretching-myths"
												target="_blank"
												rel="noopener noreferrer"
											>
												The Truth About Stretching, Performance, and Injuries
											</a>
										</cite>{' '}
										by Dr. John Rusin | 03-16-16
									</i>{' '}
									<br />{' '}
									<i>
										<cite>
											<a
												href="https://aaptiv.com/magazine/macronutrients-the-basics"
												target="_blank"
												rel="noopener noreferrer"
											>
												Macronutrients 101: Understanding the Basics
											</a>
										</cite>{' '}
										by Ross Anti
									</i>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Stretching;
