import React from 'react';
import { Link } from 'react-router-dom';

import './UserCard.css'

const UserCard = (props) => {
	const {id, avatar, name, surname, position} = props;
	
	return (
		<>
			<Link to={`/user/${id}`}>
				<ul className="user-card">
					<li>
						<img 
							src={avatar} 
							alt={name} 
							className="user-photo"
						/>
					</li>
					<li>
						<span><b>{name} {surname}</b></span>
					</li>
					<li>
						<span>{position}</span> 
					</li>
				</ul>
			</Link>
		</>
	);
}
export default UserCard;