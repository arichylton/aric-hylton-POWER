export default (state={}, action={}) => {
    switch (action.type) {
        case 'GET_WILKS':
            return {...state, ...action.payload};
        case 'SIGN_OUT':
            return state
        default:
            return state
    }
}