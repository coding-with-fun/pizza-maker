import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/pizza logo.png';
export default function Header() {
	return (
		<div className='header'>
			<Link to='/' className='header__elements'>
				<img src={Logo} alt='pizzalogo' height='40px' />
				<div className='header__heading'>Pizza Customization</div>
			</Link>
		</div>
	);
}
