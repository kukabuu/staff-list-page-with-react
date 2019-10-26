import MockService from '../services/mockService';

export const fetchUsersRequest = () => {
	return {
		type: 'FETCH_USERS_REQUEST'
	}
}

export const fetchUsersSuccess = (users) => {
	return {
		type: 'FETCH_USERS_SUCCESS',
		payload: users
	}
}

export const fetchUsersError = (err) =>{
	return {
		type: 'FETCH_USERS_ERROR',
		payload: err
	}
}

export const addUser = (newUser) => {
	return {
		type: 'ADD_USER',
		payload: newUser
	}
}

export const getUsers = () => {
	const mockService = new MockService();

	return (dispatch) => {
		dispatch(fetchUsersRequest());
		mockService
			.getAllUsers()
			.then(data => {
				dispatch(fetchUsersSuccess(data));
			})
			.catch(err => {
				dispatch(fetchUsersError(err));
			})
	}
};
