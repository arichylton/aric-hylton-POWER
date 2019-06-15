import React, { useState } from 'react';

import './Footer.css';

const Footer = () => {
	const [ hovered, setHovered ] = useState(false);
	const toggleHover = () => setHovered(!hovered);

	return (
		<footer className='centered'>
			<div className="centered">
				<h4
					style={{ wordSpacing: 2, letterSpacing: 1, fontSize: '100%', marginBottom: 0 }}
					className="grow"
					onMouseEnter={toggleHover}
					onMouseLeave={toggleHover}
				>
					{' '}
					Made with <ion-icon name="heart" style={hovered ? { color: 'lightblue' } : { color: 'red' }} /> by Aric
					Hylton &copy; 2019
				</h4>
			</div>
		</footer>
	);
};

export default Footer;
