import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import Carousel from '../carousel/Carousel';
import Logo from '../logo/Logo';
import UserList from '../userList/UserList';
import User from '../user/User';
import WithDataFromRegisterForm from '../hoc/withDataFromRegisterForm';


import { getUsers } from '../../actions';

import './App.css';

const App = () => {
	const {users} = useSelector(state => state.usersReducer);
	const dispatch = useDispatch();

	useEffect(() => {
  	dispatch(getUsers());
	}, [dispatch]);

	const onUserSelected = (id) => {
		return users.filter(user => user.id === id)[0];
	};

	return (
		<div className="container">
			<Logo />
			<Carousel	/>
			<Switch>
				<Route 
					path="/" 
					component={UserList}	
					exact
				/>
				<Route 
					path="/user/:id"
					render={
						({match}) => {
							const {id} = match.params;
							return (
								<User {...onUserSelected(id)} />
							)
						}
					} 
				/>
				<Redirect to="/" />
			</Switch>
			
			<WithDataFromRegisterForm />
		</div>
	);
};

export default App;