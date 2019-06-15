import React from 'react';

import './Progress.css';

import powerlifting from '../../pics/powerlifting.png';

class Progress extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="progress-body" style={{marginBottom: 0}}>
				<div className="jumbotron jumbotron-progress bg-transparent jumbotron-fluid">
					<div className="container">
						<h1 className="display-4 animated slideInLeft">Progress</h1>
						<p className="lead animated slideInRight">The longest yard</p>
					</div>
				</div>

				<img src={powerlifting} alt='' className='progress-img animated zoomIn'/>

						
				<div
					className="diet-card text-black bg-white br3 ba b--black-10 w-100 w-50-m w-25-l shadow-5 center"
					style={{ maxWidth: '65vw' }}
				>
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title">You gotta burn it to earn it</h2>
							<div className="card-text diet-text">
								<h4 className="underline">Progress</h4>
								<p>
									The underlying factor most people don't present is discipline. Displicine is the
									entire drive that defines our character. Keeping to a program or regimen is often
									associated with motivation, however, motivation can change drastically and on short
									notice. Having the discipline to get up on days where you don't feel motivated or
									you think "one bite won't hurt" is what seperates the people who make progress and
									those who stay on the hamster wheel.
								</p>

								<h4 className="underline">Training Routine</h4>
								<p>
									A gym routine can vary massively depending on the goals of the athlete. Since there
									are so many ways of working out, in general, the information will be for
									powerlifting.
								</p>

								<p className="lh-copy">
									<span className="underline b">Cardio</span> is sometimes seen as a negative when it
									comes to strength training due the muscle burning myths that surround it. Now, the
									true benefits to the introduction of cardio in a workout regimen are plentiful.
								</p>
								<ul>
									<li>Improves recovery between training sessions</li>
									<li>Helps control and/or reduce body fat levels</li>
									<li>Improves immune function</li>
									<li>Reduces cortisol levels</li>
									<li>Improves strength</li>
								</ul>

								<p className="lh-copy">
									<span className="underline b">Warm ups</span> are very important to safety and they
									help get the CNS used to the future working sets. They also allow mind muscle
									connections to increase your ability to specifically target that muscle group. The
									ability to get form down while conserving energy for future workloads is also
									beneficial.
								</p>

								<p className="lh-copy">
									<span className="underline b">Working Sets</span> can be widely varied depending on
									the main program of the lifter. In general keeping reps in the 3-6 rep range is what
									would obtain the most strength. Hypertrophy, however, is huge factor in terms of
									strengh development as well. Having a bigger base for most lifts will result in
									greater stability and in some cases less ROM. They are both indirectly affecting
									each other. Essentially if you gain one the other will soon follow.<br />
									<br />
									In most cases, sticking to a program that progressivly overloads is the best choice.
									More volume, means more ability for the muscles to break down and grow even bigger.{' '}
									<br />
									<br />
									Since the squat, deadlift and bench are huge compound movements and are the main
									lifts for every powerlifter. Introducing other movements that will assist or improve
									the big 3 is the goal. Movements like OHP or utilizing pause reps more often for the
									bench can help. Squats and deadlifts generally work the same bodyparts with
									different amounts of EMG for each muscle group. Accessory work that strengthen the
									lower lumbar, glutes and upper back can help the athelete see massive progress in
									those lifts.
								</p>

								<h4 className="underline">Plateauing</h4>
								<p className="lh-copy">
									As long as you are steadily progressing by adding on more weight and keeping things
									safe, then things are going good. It's not to say you couldn't improve faster, but,
									for the most part progress is always better than plateauing. There are many reasons
									an athlete could plateau: Diet, training, recovery. If your bodyweight is staying
									the same, increasing caloric intake will help. If its a specific exercise that needs
									work, try introducing accessory movements that work on the weaker aspects of your
									lifts. It's crucial to always be adding weight overtime to make sure your muscles
									are still getting broken down. If weights are getting to easy for accessory
									movements and the rep range is high then its time to add weight. For the compound
									movements working on form and different cues and also increase how much weight you
									are putting on the bar. <br />
									<br />
									For the most part, if none of the above is helping, then it might be time to change
									the workout plan. Try experimenting and see what works best for you. Challenge
									yourself.
								</p>

								<p>
									Resources: <br />
									<i>
										<cite>
											<a href="https://www.t-nation.com/training/plateau-busters" target="_blank" rel="noopener noreferrer">
												5 GUARANTEED Ways to Analyze and Break Through Plateaus
											</a>
										</cite>{' '}
										by Mike Robertson | 04-23-2017
									</i>{' '}
									<br />{' '}
									<i>
										<cite>
											<a
												href="https://www.muscleandfitness.com/workouts/workout-tips/7-powerlifting-strength-secrets"
												target="_blank"
												rel="noopener noreferrer"
											>
												7 Powerlifting Strategies to boost Strength and Recovery
											</a>
										</cite>{' '}
										by Eric Velazquez
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

export default Progress;
