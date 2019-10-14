const userLoaded = (users) => {
	return {
		type: 'USERS_LOADED',
		payload: users
	};
};

export {
	userLoaded
};