export const signIn = () => {
   return {
       type: 'SIGN_IN',
   }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT',
    }
 }

 export const getUser = (user) => {
    return {
        type: 'GET_USER',
        payload: user
    }
 }