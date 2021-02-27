export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'


export function logInUser(username, name) {
    return {
        type: LOGIN_USER,
        username, 
        name
    }
}

export function logOutUser() {
    return {
        type: LOGOUT_USER,
        username: ''
    }
}