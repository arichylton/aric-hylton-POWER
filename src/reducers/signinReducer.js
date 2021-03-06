const initialState = {
    isSignedIn: false,
}

export default (state=initialState, action={}) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {...state, isSignedIn: true};
        case 'REGISTER':
            return {...state, isSignedIn: true};
        case 'SIGN_OUT':
            return {...state, isSignedIn: false};
        default:
            return state
    }
}