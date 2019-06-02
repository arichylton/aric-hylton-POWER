import _ from 'lodash';

export default (state = {}, action = {}) => {
	switch (action.type) {
		case 'GET_WILKS':
			return { ...state, ...action.payload };
		case 'DELETE_WILKS':
			return _.omit(state, action.payload);
		case 'SIGN_OUT':
			return state;
		default:
			return state;
	}
};
