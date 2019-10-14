import React, { Component } from 'react';
import CommentList from '../commentList/CommentList';
import CommentForm from '../commentForm/CommentForm';

import MockService from '../../services/mockService';

import './UserReviews.css';

export default class UserReviews extends Component {
	
	mockServise = new MockService();

	minCommentId = 200;

	state = {
		comments: [],
		isLoading: true,
		error: null
	};
	
	// componentDidMount() {
	// 	const {userId} = this.props;
	// 	console.log('componentDidMount')
		
	// 	this.getComments(userId);
		
	// }

	componentDidUpdate(prevProps) {
		if (this.props.userId !== prevProps.userId) {
			this.getComments(this.props.userId);	
		}
	}

	getComments(id) {
		this.mockServise
			.getAllComments(id)
			.then(data => {
				this.setState({
					comments: data,
					isLoading: false
				})
			})
			.catch(error => {
				this.setState({ 
					isLoading: false, 
					error,
				 	comments: []
				});
			})
	}
	
	onCommentAdd = (createdAt, title, text, phone) => {
		const id = this.minCommentId++;
		const {userId} = this.props;

		const newComment = {
			"id": id,
			"userId": userId,
			"createdAt": createdAt,
			"title": title,
			"text": text,
			"phone": phone
		}

		this.setState(({comments}) => {
			const newCommentsArr = [
				newComment,
				...comments
			]
			return {
				comments: newCommentsArr
			}
		}) 

		this.setState({error: null})
	}

	sortComments = comments => {
		const arr = comments;
		arr.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1);
		return arr;
	}

	showFiveLastComments = comments => {
		const arr = this.sortComments(comments);
		return arr.slice(0, 5);
	}

	render() {
		const { comments, isLoading, error } = this.state;
		return (
			<div className="user-reviews">
				<h2>Комментарии</h2>
				{ 
					error 
						? <h3>No comments</h3> 
						: null
				}
				{ 
					!isLoading 
						? <CommentList comments={this.showFiveLastComments(comments)} /> 
						: <h3>Loading...</h3> 
				}
				<CommentForm 
					onCommentAdd={this.onCommentAdd}
				/>
			</div>
		);
	}
}
