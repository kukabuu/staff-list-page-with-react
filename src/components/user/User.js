import React from 'react';
import UserReviews from '../userReviews/UserReviews';

import './User.css'

const User = ({id, avatar, name, surname, position, address, phone}) => {
	
	return (
		<div className="user-page">
			<div className="user-data">
				<img src={avatar} alt={name} className="user-photo" />
				<div>
					<p className="user-name"><b>{name} {surname}</b></p> 
					<p>{position}</p> 
					<p>{address}</p>
					<p>{phone}</p>
				</div>	
			</div>
			<UserReviews userId={id} />
		</div>
	);
}	

export default User;