import React from 'react';
import Tilt from 'react-tilt';

import brain from '../../pics/brain.png';
import './Meditation.css';


class Meditation extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="meditation-body">
				<div className="jumbotron jumbotron-meditation bg-transparent jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Meditation</h1>
						<p className="lead">The underdog</p>
					</div>
				</div>

				<div className="ma4 mt0">
					<Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }}>
						<div className="Tilt-inner pa3">
							<img style={{ paddingTop: '25px' }} alt="logo" src={brain} />
						</div>
					</Tilt>
				</div>

				<div
					className="diet-card text-black bg-white br3 ba b--black-10 w-100 w-50-m w-25-l shadow-5 center"
					style={{ maxWidth: '65vw' }}
				>
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title">The safe way</h2>
							<div className="card-text diet-text">
								<h4 className="underline">Meditation</h4>
								<p>
									Overall, meditation isn't something for everyone. It can however be beneficial to most people in many ways whether that be helping them with stress, anxiety and more. It's hard to deny the overwhelming amount of literature that supports meditation.
								</p>

								<h4 className="underline">Benefits</h4>

								
									<ul>
                                        <li>Reduces Stress</li>
                                        <li>Controls Anxiety</li>
                                        <li>Promotes Emotional Health</li>
                                        <li>Enhances Self-Awareness</li>
                                        <li>Lengthens Attention Span</li>
                                        <li>May Reduce Age-Related Memory Loss</li>
                                        <li>Can Generate Kindness</li>
                                        <li>May Help Fight Addictions</li>
                                        <li>Improves Sleep</li>
                                        <li>Helps Control Pain</li>
                                        <li>Can Decrease Blood Pressure</li>
                                    </ul>
								

								<h4 className="underline">Summary</h4>
								<p className="lh-copy">
									 Meditation is a tool in anyones arsenal of health choices they can choose to partake in. In terms of overall strength and aesthetics, it might not seem like meditating helps that much, however, in the long run it can make sure you stay disciplined and stay healthy minded through out the harder parts of your program.
								</p>

								<p>
									Resources: <br />
									<i>
										<cite>
											<a
												href="https://www.healthline.com/nutrition/12-benefits-of-meditation"
												target="_blank"
												rel="noopener noreferrer"
											>
												12 Science-Based Benefits of Meditation
											</a>
										</cite>{' '}
										by Matthew Thorpe, MD, PhD on July 5, 2017
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

export default Meditation;
