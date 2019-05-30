import React from 'react';

import './Header.css';
import dumbell from '../../pics/dumbell.png';

class Header extends React.Component {
	render() {
		return (
			<div className="header-background fixed-top">
				<nav className="navbar navbar-light">
					<a className="navbar-brand grow " href="/#">
						<img src={dumbell} width="30" height="30" className="d-inline-block align-center" alt="" />
						<span className="v-mid">POWER</span>
					</a>
				</nav>
			</div>
		);
	}
}

export default Header;
