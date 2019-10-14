const initialState = {
	users: [],
	userId: null,
	comments: []
}

const reducer = (state = initialState, action) => {

	switch(action.type) {
	case 'USERS_LOADED' : 
		return {
			users: action.payload
		};
	// case 'USER_SELECTED' :
	// 	return {
	// 		userId: action.payload
	// 	};
	// case 'COMMENTS_LOADED' :
	// 	return {
	// 		comments: action.payload
	// 	};
	default: 
		return state;
	};
};

export default reducer;