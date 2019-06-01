export default (state={}, action={}) => {
    switch (action.type) {
        case 'GET_WILKS':
            return {...state, ...action.payload};
        default:
            return state
    }
}