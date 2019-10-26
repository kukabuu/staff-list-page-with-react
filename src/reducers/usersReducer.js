
const initialState = {
	users: [],
	isLoadingUsers: false,
	errorLoadingUsers: null
}

const userReducer = (state = initialState, action) => {

	switch(action.type) {
	case 'FETCH_USERS_REQUEST':
		return {
			users: [],
			isLoadingUsers: true,
			errorLoadingUsers: null
		}
	case 'FETCH_USERS_SUCCESS': 
		return {
			users: action.payload,
			isLoadingUsers: false,
			errorLoadingUsers: null
		};
	case 'FETCH_USERS_ERROR': 
		return {
			users: [],
			isLoadingUsers: false,
			errorLoadingUsers: action.payload
		};
	case 'ADD_USER':
		return {
			users: [action.payload, ...state.users],
			isLoadingUsers: false,
			errorLoadingUsers: null
		}
	default: 
		return state;
	};
};

export default userReducer;