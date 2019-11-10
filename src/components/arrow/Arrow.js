import React from 'react';

import leftArrow from '../../assets/back.png';
import rigthArrow from '../../assets/next.png';

import './Arrow.css';

const Arrow = ({toSlide, direction}) => {
	
	return (
		<div className="arrow" onClick={() => toSlide(direction)}>
			{
				direction === "right" 
					? <img src={rigthArrow} alt="Right Arrow" /> 
					: <img src={leftArrow} alt="Left Arrow" />
			}
		</div>
	)
}

export default Arrow;