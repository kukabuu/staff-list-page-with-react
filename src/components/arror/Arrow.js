import React from 'react';

const Arrow = ({toSlide, direction}) => {
	
	return (
		<div className="carousel-arrow" onClick={() => toSlide(direction)}>
			{direction === "right" ? <p>▶</p> : <p>◀</p>}
		</div>
	)
}

export default Arrow;