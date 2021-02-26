import { combineReducers } from 'redux'
import questions from './questions.reducer'
import auth from './auth.reducer'
import users from './users.reducer'

export default combineReducers({
    questions, 
    auth,
    users
})