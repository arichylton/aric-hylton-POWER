import React from 'react';

import './Diet.css';

import food from '../../pics/food.png';
import nuts from '../../pics/nuts.jpg';
import fruits from '../../pics/fruits.jpg';
import bread from '../../pics/bread.jpg';
import vegetable from '../../pics/vegetable.jpg';

const Diet = () => {
	return (
		<div className="diet">
			<div className="jumbotron bg-transparent jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">Diet</h1>
					<p className="lead">
						This is a modified jumbotron that occupies the entire horizontal space of its parent.
					</p>
				</div>
			</div>

			<div className="grid-diet">
				<img src={bread} alt="" className="grid-diet-item" />
				<img src={nuts} alt="" className="grid-diet-item" />
				<img src={fruits} alt="" className="grid-diet-item" />
				<img src={vegetable} alt="" className="grid-diet-item" />
			</div>

			<div
				className="diet-card text-black bg-white br3 ba b--black-10 w-100 w-50-m w-25-l shadow-5 center"
				style={{ maxWidth: '65vw' }}
			>
				<div className="col-md-8">
					<div className="card-body">
						<h2 className="card-title">Hard work starts in the kitchen</h2>
						<p className="card-text">
							
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Diet;
