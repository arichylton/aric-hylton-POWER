export default (state={}, action={}) => {
    switch (action.type) {
        case 'GET_USER':
            return {...state, ...action.payload};
        case 'SIGN_OUT': 
            return {...state }
        default:
            return state
    }
}