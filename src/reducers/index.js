import { combineReducers } from 'redux'
import questions from './questions.reducer'
import auth from './auth.reducer'

export default combineReducers({
    questions, 
    auth
})