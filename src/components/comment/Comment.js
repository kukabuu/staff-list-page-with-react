import React from 'react';

import './Comment.css'

const Comment = ({ createdAt, title, text, phone }) => {
	const dateConfig = createdAt => {
		const date = new Date(createdAt);
		const year = date.getFullYear();
		let month = date.getMonth() + 1;
		let dt = date.getDate();
		let hh = date.getHours();
		let min = date.getMinutes();
		
		const addZero = num => {
			let correctNum = num;
			if (num < 10) {
				correctNum = '0' + num;
			} 
			return correctNum;
		};

		month = addZero(month);
		dt = addZero(dt);
		hh = addZero(hh);
		min = addZero(min);
		
		return `${hh}:${min} ${dt}-${month}-${year}`;
	}

	return (
		<>
			<h3 className="title">{ title }</h3> 
			<p>{ text }</p> 
			<p className="posted">{ dateConfig(createdAt) }</p>
			<p className="phone">
				<em>{ phone } </em>
			</p>
		</>
	);
}

export default Comment;