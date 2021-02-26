import { RECEIVE_QUESTIONS } from '../actions/questions.actions'

export default function questions(state = [], action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return action.questions
        default:
            return state
    }
}