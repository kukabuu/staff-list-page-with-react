import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/teamwork.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className="logo">
			<Link to='/'>
				<img src={logo} alt="logo" className="logo-img" />
				<h1 className="logo-name">Lorem</h1>
			</Link>
			
		</div>
	);
};

export default Logo;