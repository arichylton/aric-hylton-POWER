import { combineReducers } from 'redux';

import signinReducer from './signinReducer';
import getUserReducer from './getUserReducer';

export default combineReducers({
    signin: signinReducer,
    user: getUserReducer
})