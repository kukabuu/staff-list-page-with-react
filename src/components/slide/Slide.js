import React from 'react';
import { Link } from 'react-router-dom';

import "./Slide.css";

const Slide = ({id, name, avatar}) => {

	return (
		<div>
			<Link to={`/user/${id}`}>
				<img src={avatar} alt={name} className="carousel-slide-pic" />
			</Link>
			<p className="carousel-slide-name">{name}</p>
		</div>	
	)
}

export default Slide;