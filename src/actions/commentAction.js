import MockService from '../services/mockService';

export const fetchCommentsRequest = () => {
	return {
		type: 'FETCH_COMMENTS_REQUEST'
	}
}

export const fetchCommentsSuccess = (comments) => {
	return {
		type: 'FETCH_COMMENTS_SUCCESS',
		payload: comments
	}
}

export const fetchCommentsError = (err) =>{
	return {
		type: 'FETCH_COMMENTS_ERROR',
		payload: err
	}
}

export const addComment = (newComment) => {
	return {
		type: 'ADD_COMMENT',
		payload: newComment
	}
}

export const getComments = (id) => {
	const mockService = new MockService();

	return (dispatch) => {
		dispatch(fetchCommentsRequest());
		mockService
			.getAllComments(id)
			.then(data => {
				dispatch(fetchCommentsSuccess(data));
			})
			.catch(err => {
				dispatch(fetchCommentsError(err));
			})
	}
};
