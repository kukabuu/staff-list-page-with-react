import React from 'react';
import { Link } from 'react-router-dom';

import './UserCard.css'

const UserCard = (props) => {
	const {id, avatar, name, surname, position} = props;
	
	return (
		<>
			<Link to={`/user/${id}`}>
				<div className="user-card">
					<img 
						src={avatar} 
						alt={name} 
						className="user-card-photo"
					/>
					<div className="user-card-info">
						<span className="user-name">{name} {surname}</span>
						<span>{position}</span> 
					</div>
				</div>
			</Link>
		</>
	);
}
export default UserCard;