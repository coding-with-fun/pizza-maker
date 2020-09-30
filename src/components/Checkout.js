import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Pizzaman from '../assets/PizzaMan.png';

export default function Checkout({ ingredients }) {
	const history = useHistory();
	const [success, setSuccess] = useState(false);

	return (
		<div className='checkout'>
			<div className='checkout__ingredients'>
				<h1>My Ingredients</h1>

				<div>
					<button
						className='checkout__button'
						onClick={() => history.push('/')}
					>
						Go Back
					</button>
					<button
						onClick={() => setSuccess(true)}
						className='checkout__button'
						style={{ marginLeft: 10 }}
					>
						Confirm
					</button>
				</div>
			</div>
			<div className='checkout__confirmation'>
				{success && (
					<div className='checkout__confirmation__container'>
						<img src={Pizzaman} alt='pizzaman' height='300px' />
						<div className='checkout__confirmation_message'>
							We have received your order, Thank you
						</div>
						<div className='checkout__confirmation__order_no'>
							Order #{Math.round(Math.random() * 100000)}
						</div>
						<div className='checkout__confirmation__time_estimation'>
							Will be ready in 20-30 min.
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
