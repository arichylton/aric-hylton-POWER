import React, { useState } from 'react';

import './Partners.css';

const Partners = () => {
	const [ hovered, setHovered ] = useState(false);
	const toggleHover = () => setHovered(!hovered);
	return (
		<div className="partners-body">
			<div className="jumbotron jumbotron-partners bg-transparent jumbotron-fluid">
				<div className="container">
					<h1 className="display-4 animated slideInLeft">Partners</h1>
					<p className="lead animated slideInRight">Home is whenever I'm with you</p>
				</div>
			</div>
			<div onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
				<span className={hovered ? 'dot1 animated slideOutLeft' : 'dot1 animated slideInLeft'} />
				<span className={hovered ? 'dot2 animated slideOutRight' : 'dot2 animated slideInRight'} />
			</div>

			<div
				className="diet-card text-black bg-white br3 ba b--black-10 w-100 w-50-m w-25-l shadow-5 center animated slideInUp"
				style={{ maxWidth: '65vw' }}
			>
				<div className="col-md-8">
					<div className="card-body">
						<h2 className="card-title">Best Buds</h2>
						<div className="card-text diet-text">
							<h4 className="underline">Partners</h4>
							<p>
								Having someone by your side for motivation and to get a little bit more fun out of the
								gym can go a long way. Not only is it more fun with a partner but it can also be more
								safe.
							</p>

							<p className="lh-copy">
								<span className="underline b">Spotting</span> will always be the way to go when it comes
								to handling heavy weight. Even if the weight isn't too heavy, squeezing and extra rep
								out will help ensure your muscles are really getting worked. The main idea is that
								movements like benching require the ultimate need for a spotter. Nobody wants to have
								315lbs on their chest while trying to roll it down to their waist to get it off. For the
								squat, spotters might not always be needed due to the athlete having the ability to drop
								the weight behind their back. With that being said it is always recommended due to the
								risk of any random occurence the athlete might have during the lift. Spotters for other
								movements might be able to help with moving weights to get a few more reps out and
								encourage you with a few lines of motivation.
							</p>

							<p className="lh-copy">
								<span className="underline b">Keeping it Cool</span> while spotting is extremely crucial. To be a spotter you have to take things seriously. There is a huge risk that the athlete you are spotting could get hurt and it is up to you to prevent it. No being on the phone, no looking at someone you think looks good across the gym, and let the person performing the set have the moment with no unnecessary interruptions. It's ok to motivate them during the set but also make sure to pay attention to how their current set is going. If the athlete looks like they were about to fail their last rep but they are about to go for another, it's important to watch very closely to how the next rep goes.
							</p>

							<h4 className="underline">Summary</h4>
							<p>
								Partners are important to have for fun and safety. With that being said, make sure it's someone you enjoy going to the gym with and is also someone who motivates and pushes you.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partners;
