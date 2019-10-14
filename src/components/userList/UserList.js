import React from 'react';
import { withRouter } from 'react-router-dom';
import UserCard from '../userCard/UserCard';

import './UserList.css'

const UserList = ({users, isLoading, error, history}) => {
	const userProfile = users.map(user => {
		const {id} = user;
		return (
			<div key={id}>
				<UserCard 
					{...user} 
					onUserSelected={(id) => history.push(`/user/${id}`)} 
				/>
			</div>	
		)
	});

	return (
		<>
			<h1>Список сотрудников</h1>
			<div className="user-list">
				{ error ? <p> {error.message} </p> : null }
				{ !isLoading ? userProfile : <h3>Loading...</h3> }
			</div>
		</>
	)
}
export default withRouter(UserList);