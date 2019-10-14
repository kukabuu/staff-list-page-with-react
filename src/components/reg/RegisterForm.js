import React, { Component } from 'react';

import './RegisterForm.css';

export default class RegisterForm extends Component {
	state = {
		name: '',
		surname: '',
		position: '',
		address: '',
		phone: ''
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

	onSubmit = (e) => {
		e.preventDefault();

		const {name, surname, position, address, phone} = this.state;
		this.props.onUserAdd(name, surname, position, address, phone);
		this.setState({
			name: '',
			surname: '',
			position: '',
			address: '',
			phone: ''
		}) 
	}

	render() {
		const {name, surname, position, address, phone} = this.state;
		return (
			<form className="register-form" onSubmit={this.onSubmit}>
				<h2>Добавить сотрудника</h2>
				
				<input 
					id="name"
					type="text"
					onChange={this.handleChange}
					className="add-name"
					placeholder="Имя"
					value={name}
					required					
				/>

				<input 
					id="surname"
					type="text"
					onChange={this.handleChange}
					className="add-surname"
					placeholder="Фамилия"
					value={surname}
					required
				/>

				<input 
					id="position"
					type="text"
					onChange={this.handleChange}
					className="add-position"
					placeholder="Должность"
					value={position}
					required
				/>

				<input 
					id="address"
					type="text"
					onChange={this.handleChange}
					className="add-address"
					placeholder="Адрес"
					value={address}
					required
				/>
				
				<input 
					id="phone"
					type="tel"
					onChange={this.handleChange}
					className="add-phone"
					placeholder="+7-xxx-xxx-xxxxx"
					value={phone}
					required
				/>
				<button
					type="submit"
					className="submit-form"
					disabled={!this.validate()}
				>
					Зарегистрировать
				</button>

			</form>
			
		);
	}
}
