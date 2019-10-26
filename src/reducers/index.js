import { combineReducers } from 'redux';
import commentsReducer from './commentsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
	commentsReducer, usersReducer
})

export default rootReducer;