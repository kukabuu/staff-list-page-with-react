import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Carousel from '../carousel/Carousel';
import RegisterForm from '../reg/RegisterForm';
import UserList from '../userList/UserList';
import User from '../user/User';
import withDataService from '../hoc/withDataService';

import './App.css';

class App extends Component {

	minUserId = 100;

	state = {
		users: [],
		isLoading: true,
		error: null
	}

	componentDidMount() {
		this.getUsers();
	}

	getUsers = () => {
		const {dataService} = this.props;
		dataService
			.getAllUsers()
			.then(data => {
				this.setState({
					users: data,
					isLoading: false
				})
			})
			.catch(error => {
				this.setState({ isLoading: false });
				this.setState({ error });
			})
	}

	toString = (prime) => {
		return `${prime}`
	}

	onUserAdd = (name, surname, position, address, phone) => {
		const id = this.minUserId++;
		const url = `https://www.gravatar.com/avatar/00000000000000000000000000000${id}?d=retro`;

		const newUser = {
			"id": this.toString(id),
			"name": name,
			"avatar": url,
			"surname": surname,
			"position": position,
			"address": address,
			"phone": phone
		};
		
		this.setState(({users}) => {
			const newUsersArr = [
				newUser,
				...users
			]
			return {
				users: newUsersArr
			}
		});
	};
	
	onUserFiltered = (id) => {
		const {users} = this.state; 
		return users.filter(user => user.id === id)[0];
	}
 
	render() {
		const {users, isLoading, error} = this.state;

		const WrappedUserList = () => {
			return ( 
				<UserList 
					users={users} 
					isLoading={isLoading} 
					error={error} 
				/>
			);
		}
		return (
			<div className="container">
				<Router>
					<Carousel users={users}	/>
					<RegisterForm onUserAdd={this.onUserAdd} />
					
					<Route 
						path="/" 
						component={WrappedUserList}	
						exact
					/>
					<Route 
						path="/user/:id"
						render={
							({match}) => {
								const {id} = match.params;
								return (
									<User {...this.onUserFiltered(id)} />
								)
							}} 
					/>
				</Router>

			</div>
		);
	};
}

export default withDataService()(App);
