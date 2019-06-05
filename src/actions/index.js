export const signIn = () => {
	return {
		type: 'SIGN_IN'
	};
};

export const register = () => {
	return { type: 'REGISTER' };
};

export const signOut = () => {
	return {
		type: 'SIGN_OUT'
	};
};

export const getUser = (user) => {
	return {
		type: 'GET_USER',
		payload: user
	};
};

export const getWilks = (wilks) => {
	return {
		type: 'GET_WILKS',
		payload: wilks
	};
};

export const deleteWilks = (id) => {
	return {
        type: 'DELETE_WILKS',
        payload: id
	};
};
