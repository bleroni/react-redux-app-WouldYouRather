export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'


export function loginUser(username) {
    return {
        type: LOGIN_USER,
        username
    }
}

export function logOutUser() {
    return {
        type: LOGOUT_USER,
        username: ''
    }
}