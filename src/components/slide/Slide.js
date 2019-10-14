import React from 'react';
import { Link } from 'react-router-dom';

import "./Slide.css";

const Slide = ({id, name, pic}) => {
	return (
		<>
			<Link to={`/user/${id}`}>
				<img src={pic} alt={name} className="carousel-slide-pic" />
			</Link>
			<p className="carousel-slide-name">{name}</p>
		</>
			
		
	)
}

export default Slide;