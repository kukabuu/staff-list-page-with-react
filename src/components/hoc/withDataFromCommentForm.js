import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions';

import CommentForm from '../commentForm/CommentForm';


const WithDataFromCommentForm = (userId) => {
	return class extends Component {

		state = {
			title: '',
			text: '',
			phone: '',
			minCommentId: 200,
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
	
		createNewCommentObject = (createdAt, title, text, phone) => {
			const { minCommentId } = this.state;
			const id = minCommentId;
			this.setState({ minCommentId: minCommentId + 1});
			const {userId} = this.props;
	
			const newComment = {
				"id": id,
				"userId": userId,
				"createdAt": createdAt,
				"title": title,
				"text": text,
				"phone": phone
			};

			return newComment;
		}
	
		onSubmit = (e) => {
			e.preventDefault();

			const {title, text, phone} = this.state;
			const createdAt = new Date().toISOString();

			const newComment = this.createNewCommentObject(createdAt, title, text, phone);

			this.props.addComment(newComment);
	
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
			return (
				<CommentForm
					{...this.state}
					handleChange={this.handleChange}
					isError={this.isError}
					onFocus={this.onFocus}
					validate={this.validate}
					onSubmit={this.onSubmit}
				/>
			)
		}
	}
};

const mapDispatchToProps = { 
	addComment
}

export default connect(null, mapDispatchToProps)(WithDataFromCommentForm());