import React, { Component } from 'react';

import './CommentForm.css';

export default class CommentForm extends Component {

	state = {
		title: '',
		text: '',
		phone: '',
		errors: {
			title: '',
			text: '',
			phone: ''
		}
	}
	
	handleChange = (e) => {
		const {id, value} = e.currentTarget;
		this.setState({ [id]: value });
	}

	isError = e => {
		const {errors} = this.state;
		const {id, value} = e.target;

		const regExpPhone = /\+7-[0-9]{3}-[0-9]{3}-[0-9]{4}/;

		switch (id) {
		case "title": 
			errors[id] = (value.trim().length < 5 || value.trim().length > 80) && "Длина заголовка не менее 5 и не более 80 символов";
			break;
		case "text": 
			errors[id] = (value.trim().length === 0 || value.trim().length > 128) && "Размер комментария не более 128 символов";
			break;
		case "phone": 
			errors[id] = !regExpPhone.test(value.trim()) && "Введите телефон в формате +7-xxx-xxx-xxxx";
			break;
		default: 
			break;
		}

		this.setState({ errors });
	}

	onFocus = (e) => {
		const {errors} = this.state;
		const {id} = e.target;

		this.setState({ 
			errors: {
				...errors,
				[id]: "" 
			}
		});
	}

	validate = () => {
		const {errors} = this.state;

		return Object.keys(errors).some(field => errors[field]);
	}

	onSubmit = (e) => {
		e.preventDefault();
		const {title, text, phone} = this.state;
		const createdAt = new Date().toISOString();
		this.props.onCommentAdd(createdAt, title, text, phone);
		this.setState({
			title: '',
			text: '',
			phone: '',
			errors: {
				title: '',
				text: '',
				phone: ''
			}
		}) 
	}

	render() {
		const {title, text, phone, errors} = this.state;
		return (
			<form className="comment-form" onSubmit={this.onSubmit}>
				<input 
					id="title"
					type="text"
					onChange={this.handleChange}
					onBlur={this.isError}
					onFocus={this.onFocus}
					className={`add-comment-title ${errors.title ? "error" : ""}`}
					placeholder="Заголовок комментария"
					value={title}
					required					
				/>

				{errors.title && <p className="error-message">{errors.title}</p>}

				<textarea 
					id="text"
					onChange={this.handleChange}
					onBlur={this.isError}
					onFocus={this.onFocus}
					className={`add-comment-text ${errors.text ? "error" : ""}`}
					placeholder="Оставьте комментарий здесь"
					value={text}
					required
				/>

				{errors.text && <p className="error-message">{errors.text}</p>}

				<input 
					id="phone"
					type="text"
					onChange={this.handleChange}
					onBlur={this.isError}
					onFocus={this.onFocus}
					className={`add-comment-phone ${errors.phone ? "error" : ""}`}
					placeholder="+7-xxx-xxx-xxxxx"
					value={phone}
					required
				/>

				{errors.phone && <p className="error-message">{errors.phone}</p>}

				<button
					type="submit"
					className="submit-form"
					disabled={this.validate()}
				>
					Оставить комментарий
				</button>
				
					
			</form>
		);
	}
}
