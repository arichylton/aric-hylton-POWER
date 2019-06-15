import React from 'react';

import './Diet.css';

import nuts from '../../pics/nuts.jpg';
import fruits from '../../pics/fruits.jpg';
import bread from '../../pics/bread.jpg';
import vegetable from '../../pics/vegetable.jpg';

class Diet extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="diet">
				<div className="jumbotron jumbotron-diet bg-transparent jumbotron-fluid">
					<div className="container">
						<h1 className="display-4 animated slideInDown">Diet</h1>
						<p className="lead animated slideInDown">Discipline will triumph</p>
					</div>
				</div>

				<div className="grid-diet animated slideInUp">
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
							<div className="card-text diet-text">
								<h4 className="underline">Nutrition</h4>
								<p className="lh-copy">
									The hardest part of progress in the gym is what is made at home. There are 3 main
									parts to the base of any program and that is: Diet, Training, and Recovery.
								</p>
								<p className="lh-copy">
									Nutrition can be the hardest to accomplish out of those 3. It takes a lot of
									discipline and sometimes the most mental investment to make any progress.{' '}
								</p>
								<h4 className="underline">Macronutrients</h4>
								<p className="lh-copy">
									{' '}
									The main building blocks to any diet begin with Micronutrients and Macronutrients.
									Macronutrients are comprised of: Protein, Fat, and Carbohydrates.{' '}
								</p>
								<p className="lh-copy">
									<span className="underline b">Protein</span>: is essential for building and
									retaining muscle mass. For a sense of how many grams you should taking for a normal
									Macronutrient breakdown, try taking in a total of 0.8g - 1.1g per lb of bodyweight
									(1.0g - 1.7g per kg) when in a caloric surplus. For athletes in a deficit, your
									protein intake should actually increase by about 0.2g - 0.4g to decrease muscle loss
									while losing weight. After you are done calculating your protein intake, your should
									compose the rest of your Macronutrients based off the remaining caloric intake you
									have.
								</p>
								<p className="lh-copy">
									<span className="underline">List of High-Protein Foods</span>
								</p>
								<ul>
									<li>Meat</li>
									<li>Fish and Seafood</li>
									<li>Eggs</li>
									<li>Nuts</li>
									<li>Milk and dairy products</li>
								</ul>

								<p className="lh-copy">
									<span className="underline b">Carbohydrates</span>: can be a hard decision based off
									of your goals and body type. It's a macronutrient you simply have to tweak and
									adjust in order to see how your body responds. Carbohydrates are the main fuel for
									the body. Re-Fueling glycogen so you can have enough energy for your next intense
									workout. It can also speed up recovery and help drive your metabolism. With that
									being said it is heavily diet dependent regarding how much you should take in. For
									most diets, making carbs compose around 30-50% of your caloric intake is a good base
									to start adjusting the amount.
								</p>
								<p className="lh-copy">
									<span className="underline">List of Foods with Healthy Carbohydrates</span>
								</p>
								<ul>
									<li>Whole-Grains</li>
									<li>Fruits</li>
									<li>Vegetables</li>
									<li>Brown Rice</li>
									<li>Legumes</li>
								</ul>

								<p className="lh-copy">
									<span className="underline b">Fat</span>: is an important part of a well balanced
									diet. The body utilizes fats differently than carbs based off of the workout at
									hand. With aerobic exercises being the biggest benifactor of a higher fat diet due
									to fats providing slower-digesting fuel for the body to metabolize. Other than the
									energy benefits fats are primarly used to regulate matabolisms and blood sugar
									levels. Another benefit is joint health and can really help with recovery. Fats
									should comprise 20-40% of your caloric intake, with the majority of those fats
									coming from Omega 3s, Polyunsaturated, and Monounsaturated fats. This amount of
									total fat consumption is varied depending on the type of diet and the goals of the
									athlete. Avoid trans while keeping saturated fats at around 20% of total fat
									consumption.
								</p>
								<p className="lh-copy">
									<span className="underline">List of Foods with Healthy Fats</span>
								</p>
								<ul>
									<li>Nuts</li>
									<li>Olive Oil</li>
									<li>Coldwater Fish</li>
									<li>Avocados</li>
									<li>Canola Oil</li>
								</ul>

								<h4 className="underline mt-4">
									<cite>Micronutrients</cite>
								</h4>
								<p className="lh-copy">Micronutrients are comprised of Vitamins and Minerals.</p>

								<p className="lh-copy">
									<span className="underline b">Vitamins</span>: are composed of A, B, C, D, E, and K.
									B and C are water-soluble and are mainly contributing to brain stimulus and
									strengthing the immune system. A contributes to vision and organ function. D
									promotes immune function and assists in calcium absorption and bone growth. E helps
									with immune function and acts as an antioxidant. Last is K which assists in blood
									clotting and proper bone development.
								</p>

								<p className="lh-copy">
									<span className="underline b">Minerals</span>: Calcium, Phosphorus, Magnesium,
									Sodium, Chloride, Potassium, Sulfur, Iron, Manganese, Copper, Zinc, Iodine,
									Fluoride, and Selenium are all important to take in daily for maintain a functional
									body.
								</p>

								<ul>
									<li>
										Calcium - Necessary for proper structure and function of your bones and teeth.
									</li>
									<li>Phosphorus - Assists in the bone and cell membran structure.</li>
									<li>Magnesium - Helps with enzyme reactions and regulates blood pressure.</li>
									<li>
										Sodium - An electrolyte that aids fluid balance and helps maintain blood
										pressure.
									</li>
									<li>
										Chloride - Helps maintain fluid balance and assists in making digestive juices.
									</li>
									<li>
										Potassium - Electrolyte that maintains fluid status and helps nerve transmission
										and muscle function.
									</li>
									<li>Sulfer - Contained in the amino acids methionine and cysteine.</li>
									<li>
										Iron - Helps provide oxygen to muscles and assists in the creaton of certain
										hormones.
									</li>
									<li>
										Manganese - Assists in carbohydrate, amino acid, and cholesterol metabolism.
									</li>
									<li>
										Copper - Required for connective tissue formation, as well as normanl brain and
										nervous system function.
									</li>
									<li>Zinc - Necessary for normal growth, immune function, and wound healing.</li>
									<li>Iodine - Assists in thyroid regulation.</li>
									<li>Fluoride - Necessary for the development of bones and teeth.</li>
									<li>
										Selenium - Important for thyroid health, reproduction, and defense against
										oxidative damage.
									</li>
								</ul>

								<p className="lh-copy">
									It's essential to get your daily intake of micronutrients and macronutrients mainly
									through solid foods and leave supplementation as that. Supplementing your diet when
									you need to. Keep all things and moderation and think more about maintaing a
									healthier lifestyle rather than just looking good.{' '}
								</p>

								<p>
									Resources: <br />
									<i>
										<cite>
											<a
												href="https://www.healthline.com/nutrition/micronutrients"
												target="_blank"
												rel="noopener noreferrer"
											>
												Micronutrients: Types, Functions, Benefits and More
											</a>
										</cite>{' '}
										by Lizzie Streit, MS, RDN, LD on September 27, 2018.
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

export default Diet;
