import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CommentList from '../commentList/CommentList';
import WithDataFromCommentForm from '../hoc/withDataFromCommentForm';

import { getComments } from '../../actions';

import './UserReviews.css';


const UserReviews = ({userId}) => {

	const {comments, isLoadingComments, errorLoadingComments} = useSelector(state => state.commentsReducer);
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(getComments(userId));
	}, [userId]);

	const sortComments = comments => {
		const arr = comments;
		arr.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1);
		return arr;
	}

	const showFiveLastComments = comments => {
		const arr = sortComments(comments);
		return arr.slice(0, 5);
	}

	return (
		<div className="user-reviews">
			<h2>Комментарии</h2>
			{ 
				errorLoadingComments 
					? <h3>No comments</h3> 
					: null
			}
			{ 
				!isLoadingComments 
					? <CommentList comments={showFiveLastComments(comments)} /> 
					: <h3>Loading...</h3> 
			}
			<WithDataFromCommentForm userId={userId} />
		</div>
	);
}
export default UserReviews;