import React from 'react';
import { useSelector } from 'react-redux';

import Spinner from '../spinner/Spinner';
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
			<div className="user-list">
				{ errorLoadingUsers ? <p> {errorLoadingUsers.message} </p> : null }
				{ !isLoadingUsers ? userProfiles : <Spinner /> }
			</div>
		</>
	)
};

export default UserList;