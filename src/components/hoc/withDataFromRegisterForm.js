import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions';

import RegisterForm from '../registerForm/RegisterForm';

const WithDataFromRegisterForm = () => {
	return class extends Component {

		state = {
			name: '',
			surname: '',
			position: '',
			address: '',
			phone: '',
			minUserId: 100
		}
		
		handleChange = (e) => {
			const {id, value} = e.currentTarget;
			this.setState({ [id]: value });
		}

		validate = () => {
			const {name, surname, position, address, phone} = this.state;
			const regExpPhone = /\+7-[0-9]{3}-[0-9]{3}-[0-9]{4}/;

			if (name.trim() && surname.trim() && position.trim() && address.trim() && phone.trim()) {
				return regExpPhone.test(phone);
			}
			return false;
		}

		createNewUserObject = (name, surname, position, address, phone) => {
			const { minUserId } = this.state;
			const url = `https://www.gravatar.com/avatar/00000000000000000000000000000${id}?d=retro`;

			this.setState({ minUserId: minUserId + 1 })

			const id = minUserId;

			const newUser = {
				"id": `${id}`,
				"name": name,
				"avatar": url,
				"surname": surname,
				"position": position,
				"address": address,
				"phone": phone
			};
			return newUser;
		}

		onSubmit = (e) => {
			e.preventDefault();

			const {name, surname, position, address, phone} = this.state;

			const newUser = this.createNewUserObject(name, surname, position, address, phone);
			
			this.props.addUser(newUser);

			this.setState({
				name: '',
				surname: '',
				position: '',
				address: '',
				phone: ''
			}) 
		}

		render() {
			return (
				<RegisterForm 
					{...this.state}
					onSubmit={this.onSubmit} 
					validate={this.validate}
					handleChange={this.handleChange}
				/>
			)
		}
	}
}

const mapDispatchToProps = {
	addUser
}

export default connect(null, mapDispatchToProps)(WithDataFromRegisterForm());