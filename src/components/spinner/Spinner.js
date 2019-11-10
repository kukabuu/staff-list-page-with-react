import React from 'react';
import spinner from '../../assets/spinner.svg';

import './Spinner.css';

const Spinner = () => {
	return (
		<div className="spinner">
			<img src={spinner} alt="Loading..." />
		</div>
	);
};

export default Spinner;