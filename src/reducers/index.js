import { combineReducers } from 'redux';

import signinReducer from './signinReducer';
import getUserReducer from './getUserReducer';
import getWilksReducer from './getWilksReducer';

export default combineReducers({
    signin: signinReducer,
    user: getUserReducer,
    wilksData: getWilksReducer
});