import { LOGIN_USER, LOGOUT_USER } from '../actions/auth.actions'

export default function auth(state = { username: '' }, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                username: action.username
            }
        case LOGOUT_USER:
            return {
                ...state,
                username: ''
            }
        default:
            return state
    }
}