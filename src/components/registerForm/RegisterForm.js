import React from 'react';
import './RegisterForm.css';

const RegisterForm = (props) => {

	const {name, surname, position, address, phone, onSubmit, handleChange, validate} = props;

	return (
		<form className="register-form" onSubmit={onSubmit}>
			<h2>Добавить пользователя</h2>
			
			<input 
				id="name"
				type="text"
				onChange={handleChange}
				className="add-name"
				placeholder="Имя"
				value={name}
				required					
			/>

			<input 
				id="surname"
				type="text"
				onChange={handleChange}
				className="add-surname"
				placeholder="Фамилия"
				value={surname}
				required
			/>

			<input 
				id="position"
				type="text"
				onChange={handleChange}
				className="add-position"
				placeholder="Должность"
				value={position}
				required
			/>

			<input 
				id="address"
				type="text"
				onChange={handleChange}
				className="add-address"
				placeholder="Адрес"
				value={address}
				required
			/>

			<input 
				id="phone"
				type="tel"
				onChange={handleChange}
				className="add-phone"
				placeholder="+7-xxx-xxx-xxxxx"
				value={phone}
				required
			/>
			
			<button
				type="submit"
				className="submit-user-form"
				disabled={!validate()}
			>
				Зарегистрировать
			</button>
		</form>
	);
}

export default RegisterForm;