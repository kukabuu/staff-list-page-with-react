import React from 'react';
import { useSelector } from 'react-redux';

import UserCard from '../userCard/UserCard';

import './UserList.css'

const UserList = () => {
	const {users, isLoadingUsers, errorLoadingUsers} = useSelector(state => state.usersReducer);

	const userProfiles = users.map(user => {
		return (
			<div key={user.id}>
				<UserCard {...user} />
			</div>	
		)
	});

	return (
		<>
			<h1>Список сотрудников</h1>
			<div className="user-list">
				{ errorLoadingUsers ? <p> {errorLoadingUsers.message} </p> : null }
				{ !isLoadingUsers ? userProfiles : <h3>Loading...</h3> }
			</div>
		</>
	)
};

export default UserList;