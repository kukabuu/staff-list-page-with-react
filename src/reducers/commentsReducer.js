const initialState = {
	comments: [],
	isLoadingComments: false,
	errorLoadingComments: null
}

const commentsReducer = (state = initialState, action) => {
	switch(action.type) {
	case 'FETCH_COMMENTS_REQUEST':
		return {
			comments: [],
			isLoadingComments: true,
			errorLoadingComments: null
		}
	case 'FETCH_COMMENTS_SUCCESS': 
		return {
			comments: action.payload,
			isLoadingComments: false,
			errorLoadingComments: null
		};
	case 'FETCH_COMMENTS_ERROR': 
		return {
			comments: [],
			isLoadingComments: false,
			errorLoadingComments: action.payload
		};
	case 'ADD_COMMENT':
		return {
			comments: [action.payload, ...state.comments],
			isLoadingComments: false,
			errorLoadingComments: null
		}
	default: 
		return state;
	};
}

export default commentsReducer;