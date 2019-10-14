import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './UserCard.css'

export default class UserCard extends Component {
	
	

	render () {
		const {id, avatar, name, surname, position, onChangePage} = this.props;
				
		return (
			<Link to={`/user/${id}`}>
				<ul className="user-card" onClick={onChangePage}>
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
			
		);
	}
};
